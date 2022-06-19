import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { useAuthContext } from '../AuthProvider/AuthProvider'

import AuthNavigation from './AuthNavigation'
import AnonymusNavigation from './AnonymusNavigation'

const Navigation: React.FC = (): React.ReactElement => {
  const { isAuth } = useAuthContext()
  return <NavigationContainer>{isAuth ? <AuthNavigation /> : <AnonymusNavigation />}</NavigationContainer>
}

export default Navigation
