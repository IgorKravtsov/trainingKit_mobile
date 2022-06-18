import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from '../../screens/Login/Login.screen'
import RegisterScreen from '../../screens/Register/Register.screen'

const Drawer = createDrawerNavigator()

const Navigation: React.FC = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='login' component={LoginScreen} />
        <Drawer.Screen name='register' component={RegisterScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
