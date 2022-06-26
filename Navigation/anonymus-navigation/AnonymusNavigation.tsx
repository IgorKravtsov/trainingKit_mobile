import React from 'react'
import { useTranslation } from 'react-i18next'
import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from '../../screens/Login/Login.screen'
import RegisterScreen from '../../screens/Register/Register.screen'

import { darkTheme, ScreenNames } from '../../common'
import SettingsScreen from '../../screens/Settings/Settings.screen'

const Drawer = createDrawerNavigator()

const AnonymusNavigation: React.FC = (): React.ReactElement => {
  const { t } = useTranslation()
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
          title: t('login:title'),
        }}
      />
      <Drawer.Screen
        name={ScreenNames.Register}
        component={RegisterScreen}
        options={{
          title: t('register:title'),
        }}
      />
      <Drawer.Screen
        name={ScreenNames.Settings}
        component={SettingsScreen}
        options={{
          title: t('settings:title'),
        }}
      />
    </Drawer.Navigator>
  )
}

export default AnonymusNavigation
