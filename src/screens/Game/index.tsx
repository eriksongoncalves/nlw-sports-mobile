import { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import { styles } from './styles'
import logo from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background'
import { RouteGameParams } from '../../@types/navigation'
import { THEME } from '../../theme'
import { Heading } from '../../components/Heading'
import { DuoCard } from '../../components/DuoCard'

type DuoData = {
  id: string
  name: string
  weekDays: string[]
  yearsPlaying: number
  useVoiceChanel: boolean
  hoursStart: string
  hoursEnd: string
}

export const Game = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const game = route.params as RouteGameParams
  const [duos, setDuos] = useState<DuoData[]>([])

  useEffect(() => {
    fetch(`http://192.168.0.16:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => {
        setDuos(data)
      })
  }, [game.id])

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logo} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => {}} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          style={styles.containerList}
        />
      </SafeAreaView>
    </Background>
  )
}
