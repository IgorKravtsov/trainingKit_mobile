import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur'

import { MaterialIcons } from '@expo/vector-icons'

import { UserRoles } from '../../api/user/enums'

import { darkTheme, ScreenNames } from '../../common'
import { useAuthContext } from '../../components/AuthProvider/AuthProvider'

import LearnerMyTrainingsScreen from '../../screens/MyTrainings/Learner-screen/LearnerMyTrainings.screen'
import TrainerMyTrainingsStack from './TrainerMyTrainerStack'

const Tab = createBottomTabNavigator()

const MyTrainingsTabs: React.FC = (): React.ReactElement => {
  const { role } = useAuthContext()
  const { t } = useTranslation()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: darkTheme.primaryContrast,
          position: 'absolute',
        },
        tabBarBackground: () => <BlurView tint='dark' intensity={100} style={StyleSheet.absoluteFill} />,
      }}
      sceneContainerStyle={{
        backgroundColor: darkTheme.secondaryMain,
      }}
      safeAreaInsets={{
        bottom: 10,
      }}
    >
      <Tab.Screen
        name={ScreenNames.MyTrainingsLearner}
        component={LearnerMyTrainingsScreen}
        options={{
          tabBarIcon: iconProps => <MaterialIcons {...iconProps} name='sports-mma' />,
          title: t('learnerTrainings:bottomTitle'),
        }}
      />
      {role !== UserRoles.LEARNER && (
        <Tab.Screen
          name={ScreenNames.MyTrainingsTrainerStack}
          component={TrainerMyTrainingsStack}
          options={{
            tabBarIcon: iconProps => <MaterialIcons {...iconProps} name='admin-panel-settings' />,
            title: t('trainerTrainings:bottomTitle'),
          }}
        />
      )}
    </Tab.Navigator>
  )
}

export default MyTrainingsTabs
