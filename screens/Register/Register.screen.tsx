import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Register } from '../../api/auth/auth.api'
import { useHttpRequest } from '../../hooks'

import Form from './components/Form'
import { SubmitRegister } from './interfaces'

const RegisterScreen: React.FC = (): React.ReactElement => {
  const [register] = useHttpRequest(Register)

  const onSubmit = (data: SubmitRegister) => {
    register(data)
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
