import { LinearGradient } from 'expo-linear-gradient'
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps
} from 'react-native'
import { THEME } from '../../theme'

import { styles } from './styles'

export type GameCardData = {
  id: string
  title: string
  _count: {
    ads: number
  }
  bannerUrl: string
}

type GameCardProps = {
  data: GameCardData
} & TouchableOpacityProps

export const GameCard = ({ data }: GameCardProps) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Press')}
      style={styles.container}
    >
      <ImageBackground source={{ uri: data.bannerUrl }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
