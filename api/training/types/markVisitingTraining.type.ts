import { Id } from '../../user/types'

export interface MarkVisitingTrainingRequest {
  trainingId: Id
  userId: Id
}

export interface MarkVisitingTrainingResponse {
  message: string
}
