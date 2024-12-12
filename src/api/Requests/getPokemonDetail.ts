import { getRequest } from '../request'
import type { PokemonCard } from '../../redux/features/pokemon/pokemonTypes'

type GetPokemonDetailResponse = {
  data: PokemonCard
}

export const getPokemonDetail = (id: string) => {
  return getRequest<GetPokemonDetailResponse>(`/cards/${id}`)()
}
