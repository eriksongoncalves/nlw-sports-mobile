import { useRef, useEffect } from 'react'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications'

import { Background } from './src/components/Background'
import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'

import './src/service/notificationConfigs'
import { getPushNotificationToken } from './src/service/getPushNotificationToken'
import { removeNotificationSubscription } from 'expo-notifications'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  const getNotificationListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()

  useEffect(() => {
    getPushNotificationToken()
  }, [])

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener(notification => {
        console.log('>>> ReceivedListener ', notification)
      })

    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log('>>> ResponseReceivedListener', response)
      })

    return () => {
      if (
        getNotificationListener.current &&
        responseNotificationListener.current
      ) {
        removeNotificationSubscription(getNotificationListener.current)
        removeNotificationSubscription(responseNotificationListener.current)
      }
    }
  }, [])

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  )
}
