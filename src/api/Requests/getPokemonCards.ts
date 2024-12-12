import { getRequest } from '../request'
import type { PokemonCard } from '../../redux/features/pokemon/pokemonTypes'

type GetPokemonCardsResponse = {
  data: PokemonCard[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export const getPokemonCards = (page: number, pageSize = 10) => {
  return getRequest<GetPokemonCardsResponse>('/cards', { page, pageSize })()
}
