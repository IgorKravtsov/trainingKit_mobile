import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { useHttpRequest } from '../../hooks'
import { useAppDispatch } from '../../redux/hooks'

import { Register } from '../../api/auth/auth.api'
import { GetOrganizations } from '../../api/organization/organization'

import { setOrganizations } from '../../redux/slices/organizations.slice'

import Form from './components/Form'
import { SubmitRegister } from './interfaces'

const RegisterScreen: React.FC = (): React.ReactElement => {
  const [register] = useHttpRequest(Register)
  const [getOrganizations] = useHttpRequest(GetOrganizations)

  const dispatch = useAppDispatch()

  const onSubmit = (data: SubmitRegister) => {
    register(data)
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
