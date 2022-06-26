import React from 'react'
import { useTranslation } from 'react-i18next'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { darkTheme, ScreenNames } from '../../common'
import TrainerTrainingScreen from '../../screens/MyTrainings/Trainer-training-screen/TrainerTraining.screen'
import TrainerMyTrainingsScreen from '../../screens/MyTrainings/Trainer-screen/TrainerMyTrainings.screen'

const Stack = createNativeStackNavigator()

const TrainerMyTrainingsStack: React.FC = (): React.ReactElement => {
  const { t } = useTranslation()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: darkTheme.secondaryMain },
      }}
    >
      <Stack.Screen name={ScreenNames.MyTrainingsTrainer} component={TrainerMyTrainingsScreen} />
      <Stack.Screen
        name={ScreenNames.MyTrainingsTrainerTraining}
        component={TrainerTrainingScreen}
        options={{
          title: t('training:title'),
          headerStyle: { backgroundColor: darkTheme.headerBackground },
          headerTintColor: darkTheme.textMain,
        }}
      />
    </Stack.Navigator>
  )
}

export default TrainerMyTrainingsStack
