import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RootNavigator } from './RootNavigator'

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
