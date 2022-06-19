import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Form from './components/Form'
import { SubmitRegister } from './interfaces'

const RegisterScreen: React.FC = (): React.ReactElement => {
  const onSubmit = (data: SubmitRegister) => {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <Form onSubmit={onSubmit} />
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 58,
    justifyContent: 'center',
    // alignItems: 'center',
  },
})
