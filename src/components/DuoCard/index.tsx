import { TouchableOpacity, View, Text } from 'react-native'
import { GameController } from 'phosphor-react-native'

import { styles } from './styles'
import { DuoInfo } from '../DuoInfo'
import { THEME } from '../../theme'

type DuoData = {
  id: string
  name: string
  weekDays: string[]
  yearsPlaying: number
  useVoiceChanel: boolean
  hoursStart: string
  hoursEnd: string
}

type DuoCardProps = {
  data: DuoData
  onConnect(): void
}

export const DuoCard = ({ data, onConnect }: DuoCardProps) => {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />

      <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} -  ${data.hoursEnd}`}
      />

      <DuoInfo
        label="Chamada de audio"
        value={data.useVoiceChanel ? 'Sim' : 'Não'}
        colorValue={
          data.useVoiceChanel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity onPress={onConnect} style={styles.button}>
        <GameController color={THEME.COLORS.TEXT} size={20} />

        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
