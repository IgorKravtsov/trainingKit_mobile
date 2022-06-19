import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Login } from '../../api/auth/auth.api'

import { useHttpRequest } from '../../hooks'
import { setUser } from '../../redux/slices/user.slice'

import Form from './components/Form'

import { SubmitLogin } from './interfaces'

const LoginScreen: React.FC = (): React.ReactElement => {
  const [login] = useHttpRequest(Login, { action: setUser })

  const onSubmit = async (data: SubmitLogin) => {
    await login(data)
  }

  return (
    <View style={styles.container}>
      <Form onSubmit={onSubmit} />
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
