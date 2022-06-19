import { Id } from '../../user/types'
import { Gym } from './gym.types'

export interface GetLearnerGymsRequest {
  trainers: Id[]
}

export interface GetLearnerGymsResponse {
  gyms: Gym[]
}
