import React, { useEffect, useCallback } from 'react'
import { FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonCards } from '../../api/Requests/getPokemonCards'
import { appendCards, setCards, setLoading, setPage } from '../../redux/features/pokemon/pokemonSlice'
import { selectCards, selectLoading, selectPage } from '../../redux/features/pokemon/pokemonSelectors'
import { PokemonCard } from './components/PokemonCard'

export const PokemonCardsListScreen = () => {
  const dispatch = useDispatch()
  const cards = useSelector(selectCards)
  const page = useSelector(selectPage)
  const loading = useSelector(selectLoading)

  const fetchCards = useCallback(async () => {
    dispatch(setLoading(true))
    try {
      const response = await getPokemonCards(page)
      const newCards = response?.data || []
      if (page === 1) {
        dispatch(setCards(newCards))
      } else {
        dispatch(appendCards(newCards))
      }
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoading(false))
    }
  }, [dispatch, page])

  useEffect(() => {
    fetchCards()
  }, [fetchCards])

  const loadMore = () => {
    if (!loading) {
      dispatch(setPage(page + 1))
    }
  }

  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={cards}
      numColumns={2}
      renderItem={({ item, index }) => <PokemonCard item={item} index={index} />}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  )
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
