import React from 'react'
import { StatusBar } from 'expo-status-bar'

import AppLoader from './AppLoader/AppLoader'
import Navigation from './Navigation/Navigation'
import { useAppSelector } from '../redux/hooks'
import { selectLoadingIndicator } from '../redux/slices/loading-indicator.slice'

const AppLayout: React.FC = (): React.ReactElement => {
  const { isLoading } = useAppSelector(selectLoadingIndicator)
  return (
    <>
      <StatusBar style='light' />
      <Navigation />
      {isLoading && <AppLoader />}
    </>
  )
}

export default AppLayout
