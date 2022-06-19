import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur'

import { MaterialIcons } from '@expo/vector-icons'

import { UserRoles } from '../../api/user/enums'

import { darkTheme, ScreenNames } from '../../common'
import { useAuthContext } from '../../components/AuthProvider/AuthProvider'

import LearnerMyTrainingsScreen from '../../screens/MyTrainings/Learner-screen/LearnerMyTrainings.screen'
import TrainerMyTrainingsScreen from '../../screens/MyTrainings/Trainer-screen/TrainerMyTrainings.screen'

const Tab = createBottomTabNavigator()

const MyTrainingsTabs: React.FC = (): React.ReactElement => {
  const { role } = useAuthContext()
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
          title: 'I am Learner',
        }}
      />
      {role !== UserRoles.LEARNER && (
        <Tab.Screen
          name={ScreenNames.MyTrainingsTrainer}
          component={TrainerMyTrainingsScreen}
          options={{
            tabBarIcon: iconProps => <MaterialIcons {...iconProps} name='admin-panel-settings' />,
            title: 'I am Trainer',
          }}
        />
      )}
    </Tab.Navigator>
  )
}

export default MyTrainingsTabs
