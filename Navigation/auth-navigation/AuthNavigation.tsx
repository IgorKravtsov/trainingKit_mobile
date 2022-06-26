import React from 'react'
import { useTranslation } from 'react-i18next'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { darkTheme, ScreenNames } from '../../common'

import HomeScreen from '../../screens/Home/Home.screen'
import SettingsScreen from '../../screens/Settings/Settings.screen'
import MyTrainingsTabs from './MyTrainingsTabs'

const Drawer = createDrawerNavigator()

const AuthNavigation: React.FC = (): React.ReactElement => {
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
        name={ScreenNames.Home}
        component={HomeScreen}
        options={{
          title: t('home:title'),
        }}
      />
      <Drawer.Screen
        name={ScreenNames.MyTrainings}
        component={MyTrainingsTabs}
        options={{
          title: t('myTrainings:title'),
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

export default AuthNavigation
