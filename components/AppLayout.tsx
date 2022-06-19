import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { selectLoadingIndicator } from '../redux/slices/loading-indicator.slice'

import AppLoader from './AppLoader/AppLoader'
import Navigation from './Navigation/Navigation'
import { View } from 'react-native'
import { AsyncStorageUser } from '../interfaces'
import { useHttpRequest } from '../hooks'
import { Login } from '../api/auth/auth.api'
import { setUser } from '../redux/slices/user.slice'
import { useAuthContext } from './AuthProvider/AuthProvider'

interface AppLayoutProps {
  onLayoutRootView: () => void
  currentUserCredentials: AsyncStorageUser | null
}

const AppLayout: React.FC<AppLayoutProps> = ({ currentUserCredentials }): React.ReactElement => {
  const { isLoading } = useAppSelector(selectLoadingIndicator)

  const [login] = useHttpRequest(Login)
  const dispatch = useAppDispatch()

  const getUser = async (currentUserCredentials: AsyncStorageUser | null) => {
    if (!currentUserCredentials) return

    const response = await login(currentUserCredentials)
    response && dispatch(setUser(response))
  }

  useEffect(() => {
    getUser(currentUserCredentials)
  }, [currentUserCredentials])

  return (
    <>
      <StatusBar style='light' />
      <Navigation />
      {isLoading && <AppLoader />}
    </>
  )
}

export default AppLayout
