import { type Routes } from './routes'
import { type PokemonCard } from '../redux/features/pokemon/pokemonTypes'

export type RootParamList = {
  [Routes.PokemonCardsList]: undefined
  [Routes.PokemonDetailPage]: {
    pokemon: PokemonCard
  }
}
