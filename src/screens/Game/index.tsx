import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'

import { styles } from './styles'
import logo from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { Background } from '../../components/Background'
import { RouteGameParams } from '../../@types/navigation'

export const Game = () => {
  const route = useRoute()
  const game = route.params as RouteGameParams

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
      </SafeAreaView>
    </Background>
  )
}
