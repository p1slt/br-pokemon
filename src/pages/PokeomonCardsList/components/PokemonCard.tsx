import React, { type FC } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { type PokemonCard as PokemonCardType } from '../../../redux/features/pokemon/pokemonTypes'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../../navigation/routes'
import { type RootParamList } from '../../../navigation/types'
import { type NativeStackNavigationProp } from '@react-navigation/native-stack'

type PokemonCardProps = {
  item: PokemonCardType
  index: number
}

const windowWidth = Dimensions.get('window').width
const numColumns = 2
const cardWidth = windowWidth / numColumns - 20 // 10px margin for spacing

export const PokemonCard: FC<PokemonCardProps> = ({ item, index }) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootParamList, Routes.PokemonCardsList>>()
  const isEven = index % 2 === 0

  return (
    <TouchableOpacity
      onPress={() => navigate(Routes.PokemonDetailPage, { id: item.id })}
      style={[styles.cardContainer, isEven ? styles.evenCard : styles.oddCard]}
    >
      <View style={[styles.card, { width: cardWidth }]}>
        <Image transition={100} style={styles.cardImage} source={{ uri: item.images?.large }} />
        <Text style={styles.pokemonName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
  },
  evenCard: {
    marginRight: 8,
  },
  oddCard: {
    marginLeft: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b7b7b7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: 100,
    height: 150,
    marginBottom: 8,
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#555',
  },
})
