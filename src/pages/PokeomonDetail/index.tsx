import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { Image } from 'expo-image'

import { getPokemonDetail } from '../../api/Requests/getPokemonDetail'
import { addSavedCard, removeSavedCard } from '../../redux/features/pokemon/pokemonSlice'
import { selectSavedCards } from '../../redux/features/pokemon/pokemonSelectors'
import type { RootParamList } from '../../navigation/types'
import type { Routes } from '../../navigation/routes'
import type { PokemonCard } from '../../redux/features/pokemon/pokemonTypes'
import type { RouteProp } from '@react-navigation/native'

export const PokemonDetailScreen: React.FC = () => {
  const { params } = useRoute<RouteProp<RootParamList, Routes.PokemonDetailPage>>()
  const { id } = params
  const dispatch = useDispatch()
  const savedCards = useSelector(selectSavedCards)

  const [cardDetails, setCardDetails] = useState<PokemonCard | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await getPokemonDetail(id)
        setCardDetails(response?.data)
      } catch (error) {
        console.error('Failed to fetch card details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCardDetails()
  }, [id])

  const isSaved = savedCards.includes(id)

  const toggleSaveCard = useCallback(() => {
    if (isSaved) {
      dispatch(removeSavedCard(id))
    } else {
      dispatch(addSavedCard(id))
    }
  }, [dispatch, id, isSaved])

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    )
  }

  if (!cardDetails) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load card details. Please try again later.</Text>
      </View>
    )
  }

  const { name, images, types, hp, abilities, attacks } = cardDetails

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        transition={100}
        source={{ uri: images?.large }}
        style={styles.image}
      />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.detailText}>
          Type: <Text style={styles.detailValue}>{types?.join(', ') || 'Unknown'}</Text>
        </Text>
        <Text style={styles.detailText}>
          HP: <Text style={styles.detailValue}>{hp || 'N/A'}</Text>
        </Text>
        <Text style={styles.detailText}>
          Abilities:{' '}
          <Text style={styles.detailValue}>{abilities?.map((ability) => ability.name).join(', ') || 'None'}</Text>
        </Text>
        <Text style={styles.detailText}>
          Attacks: <Text style={styles.detailValue}>{attacks?.map((attack) => attack.name).join(', ') || 'None'}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.saveButton, isSaved ? styles.removeButton : styles.addButton]}
        onPress={toggleSaveCard}
      >
        <Text style={styles.saveButtonText}>{isSaved ? 'Remove Card' : 'Save Card'}</Text>
      </TouchableOpacity>
      <Text style={styles.saveStatusText}>
        {isSaved ? 'This card is saved in your collection.' : 'This card is not saved yet.'}
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fce4e4',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  image: {
    width: 243,
    height: 352,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 8,
    color: '#555',
  },
  detailValue: {
    fontWeight: '600',
    color: '#000',
  },
  saveButton: {
    width: '80%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50',
  },
  removeButton: {
    backgroundColor: '#f44336',
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  saveStatusText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
})
