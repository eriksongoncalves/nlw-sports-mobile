import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './styles'
import logo from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { GameCard } from '../../components/GameCard'
import { Background } from '../../components/Background'

type Games = {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

export const Home = () => {
  const navigation = useNavigation()
  const [games, setGames] = useState<Games[]>([])

  useEffect(() => {
    fetch('http://192.168.0.16:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  const handleOpenGame = ({ id, title, bannerUrl }: Games) => {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  )
}
