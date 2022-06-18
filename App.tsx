import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import Navigation from './components/Navigation/Navigation'

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <Navigation />
      {/* <Text>Hello world!!</Text> */}
    </>
  )
}

const styles = StyleSheet.create({})
