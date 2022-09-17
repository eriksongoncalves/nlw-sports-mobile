import { TouchableOpacity, View, Text } from 'react-native'
import { GameController } from 'phosphor-react-native'

import { styles } from './styles'
import { DuoInfo } from '../DuoInfo'
import { THEME } from '../../theme'

type DuoData = {
  id: string
  name: string
  weekDays: string
  yearsPaying: number
  useVoiceChannel: boolean
  hourStart: string
  hourEnd: string
}

type DuoCardProps = {
  data: DuoData
  onConnect(): void
}

export const DuoCard = ({ data, onConnect }: DuoCardProps) => {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />

      <DuoInfo label="Tempo de jogo" value={`${data.yearsPaying} anos`} />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} -  ${data.hourEnd}`}
      />

      <DuoInfo
        label="Chamada de audio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity onPress={onConnect} style={styles.button}>
        <GameController color={THEME.COLORS.TEXT} size={20} />

        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
