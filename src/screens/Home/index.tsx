import { Image, SafeAreaView } from 'react-native'

import { styles } from './styles'
import logo from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar"
      />
    </SafeAreaView>
  )
}
