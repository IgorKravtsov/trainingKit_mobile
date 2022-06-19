import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from '../../components/Input/Input'
import Form from './components/Form'

const LoginScreen: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 58,
    justifyContent: 'center',
    // alignItems: 'center',
  },
})
