import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from '../screens/Login/Login.screen'
import RegisterScreen from '../screens/Register/Register.screen'

import { darkTheme, ScreenNames } from '../common'

const Drawer = createDrawerNavigator()

const AnonymusNavigation: React.FC = (): React.ReactElement => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: darkTheme.headerBackground },
        headerTintColor: darkTheme.textMain,
        sceneContainerStyle: { backgroundColor: darkTheme.secondaryMain },
        drawerContentStyle: { backgroundColor: darkTheme.secondaryMain },
        drawerInactiveTintColor: darkTheme.textMain,
        drawerActiveTintColor: darkTheme.secondaryMain,
        drawerActiveBackgroundColor: darkTheme.primaryMain,
      }}
    >
      <Drawer.Screen
        name={ScreenNames.Login}
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Drawer.Screen
        name={ScreenNames.Register}
        component={RegisterScreen}
        options={{
          title: 'Register',
        }}
      />
    </Drawer.Navigator>
  )
}

export default AnonymusNavigation
