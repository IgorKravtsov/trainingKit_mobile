import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { useHttpRequest } from '../../hooks'
import { useAppDispatch } from '../../redux/hooks'

import { setOrganizations } from '../../redux/slices/organizations.slice'
import { setUser } from '../../redux/slices/user.slice'

import { Register } from '../../api/auth/auth.api'
import { GetOrganizations } from '../../api/organization/organization'

import { saveUserToStorage } from '../../util'

import Form from './components/Form'
import { SubmitRegister } from './interfaces'

const RegisterScreen: React.FC = (): React.ReactElement => {
  const [register] = useHttpRequest(Register)
  const [getOrganizations] = useHttpRequest(GetOrganizations)

  const dispatch = useAppDispatch()

  const onSubmit = async (data: SubmitRegister) => {
    const user = await register(data)
    if (user) {
      dispatch(setUser(user))
      const { email, password } = data
      await saveUserToStorage({ email, password })
    }
  }

  const getServerData = async () => {
    const response = await getOrganizations()
    response && dispatch(setOrganizations(response.organizations))
  }

  useEffect(() => {
    getServerData()
  }, [])

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
    paddingVertical: 20,
    justifyContent: 'center',
  },
})
