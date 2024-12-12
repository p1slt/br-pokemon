import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PokemonCardsListScreen } from '../../pages/PokeomonCardsList'
import { PokemonDetailScreen } from '../../pages/PokeomonDetail'

import { Routes } from '../routes'
import { type RootParamList } from '../types'

const Stack = createNativeStackNavigator<RootParamList>()
export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.PokemonCardsList} component={PokemonCardsListScreen} />
      <Stack.Screen name={Routes.PokemonDetailPage} component={PokemonDetailScreen} />
    </Stack.Navigator>
  )
}
