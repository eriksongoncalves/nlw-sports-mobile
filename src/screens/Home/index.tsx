import { View, Image, SafeAreaView } from 'react-native'

import { styles } from './styles'
import logo from '../../assets/logo-nlw-esports.png'

export const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  )
}
