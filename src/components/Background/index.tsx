import { ImageBackground } from 'react-native'

import { styles } from './styles'
import backgroundImage from '../../assets/background-galaxy.png'

type BackgroundProps = {
  children: React.ReactNode
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <ImageBackground
      source={backgroundImage}
      defaultSource={backgroundImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}
