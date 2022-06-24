import { Id } from '../api/user/types'

export enum ScreenNames {
  Login = 'login',
  Register = 'register',
  Home = 'home',
  Settings = 'settings',

  MyTrainings = 'myTrainings',
  MyTrainingsLearner = 'myTrainingsLearner',
  MyTrainingsTrainerStack = 'myTrainingsTrainerStack',

  MyTrainingsTrainer = 'myTrainingsTrainer',
  MyTrainingsTrainerTraining = 'myTrainingsTrainerTraining',
}

export type MyTrainingsTrainerParamList = {
  [ScreenNames.MyTrainingsTrainerTraining]: { trainingId: Id }
}
