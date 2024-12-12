import { PokemonState } from './pokemonTypes'

export const selectCards = (state: { pokemon: PokemonState }) => state.pokemon.cards

export const selectSavedCards = (state: { pokemon: PokemonState }) => state.pokemon.savedCards

export const selectLoading = (state: { pokemon: PokemonState }) => state.pokemon.loading

export const selectPage = (state: { pokemon: PokemonState }) => state.pokemon.page
