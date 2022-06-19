import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import Navigation from './components/Navigation/Navigation'
import { store } from './redux/store'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style='light' />
        <Navigation />
      </Provider>
      {/* <Text>Hello world!!</Text> */}
    </>
  )
}

const styles = StyleSheet.create({})
