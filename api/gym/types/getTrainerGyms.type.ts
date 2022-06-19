import { Id } from '../../user/types'
import { Gym } from './gym.types'

export interface GetTrainerGymsRequest {
  trainerId: Id
}

export interface GetTrainerGymsResponse {
  gyms: Gym[]
}
