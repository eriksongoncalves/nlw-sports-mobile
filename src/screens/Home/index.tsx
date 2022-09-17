import { useState, useEffect } from 'react'
import { Image, SafeAreaView, FlatList } from 'react-native'

import { styles } from './styles'
import logo from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { GameCard } from '../../components/GameCard'

type Games = {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

export const Home = () => {
  const [games, setGames] = useState<Games[]>([])

  useEffect(() => {
    fetch('http://192.168.0.16:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      ></FlatList>
    </SafeAreaView>
  )
}
