import { Id } from '../../user/types'
import { GymTraining } from './gymTraining.type'

export interface GetUserTrainingsRequest {
  learnerId: Id
  startDate: Date | string
  endDate: Date | string
}

export interface GetUserTrainingsResponse {
  trainings: GymTraining[]
}
