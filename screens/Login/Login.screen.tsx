import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

import { Login } from '../../api/auth/auth.api'
import { AsyncStorageKey } from '../../common'

import { useHttpRequest } from '../../hooks'
import { AsyncStorageUser } from '../../interfaces'
import { setUser } from '../../redux/slices/user.slice'
import { saveUserToStorage } from '../../util'

import Form from './components/Form'

import { SubmitLogin } from './interfaces'

const LoginScreen: React.FC = (): React.ReactElement => {
  const { i18n } = useTranslation()
  const [login] = useHttpRequest(Login, { action: setUser })

  const onSubmit = async (data: SubmitLogin) => {
    const response = await login(data)
    if (response) {
      const { email, password } = data
      await saveUserToStorage({ email, password })
      i18n.changeLanguage(response.lang)
    }
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
