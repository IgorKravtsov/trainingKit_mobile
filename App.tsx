import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Text>Hello world!!</Text>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({})
