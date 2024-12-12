import { Text, View, StyleSheet } from 'react-native'

export const PokemonDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pokemon Detail Screen</Text>
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
