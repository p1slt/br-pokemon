import { Text, View, StyleSheet } from 'react-native'

export const PokemonCardsListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pokemon Cards List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
