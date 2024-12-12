import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { PokemonCard, PokemonState } from './pokemonTypes'

const initialState: PokemonState = {
  cards: [],
  savedCards: [],
  loading: false,
  page: 1,
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<PokemonCard[]>) => {
      state.cards = action.payload
    },
    appendCards: (state, action: PayloadAction<PokemonCard[]>) => {
      state.cards = [...state.cards, ...action.payload]
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    addSavedCard: (state, action: PayloadAction<string>) => {
      if (!state.savedCards.includes(action.payload)) {
        state.savedCards.push(action.payload)
      }
    },
    removeSavedCard: (state, action: PayloadAction<string>) => {
      state.savedCards = state.savedCards.filter((id) => id !== action.payload)
    },
    setSavedCards: (state, action: PayloadAction<string[]>) => {
      state.savedCards = action.payload
    },
  },
})

export const { setCards, appendCards, setLoading, setPage, addSavedCard, removeSavedCard, setSavedCards } =
  pokemonSlice.actions

export const pokemonReducer = pokemonSlice.reducer
