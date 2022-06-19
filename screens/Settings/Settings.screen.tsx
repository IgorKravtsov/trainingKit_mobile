import React from 'react'
import { StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageKey } from '../../common'

import { Logout } from '../../api/auth/auth.api'
import { useHttpRequest } from '../../hooks'

import { useAppDispatch } from '../../redux/hooks'
import { logOutUser } from '../../redux/slices/user.slice'

import Button from '../../components/Button/Button'

const SettingsScreen: React.FC = (): React.ReactElement => {
  const [logout] = useHttpRequest(Logout)
  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    await logout()
    await AsyncStorage.removeItem(AsyncStorageKey.User)
    dispatch(logOutUser())
  }

  return (
    <View style={styles.container}>
      <Button style={styles.btn} onPress={handleLogout}>
        LOGOUT
      </Button>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  btn: {
    width: '100%',
  },
})
