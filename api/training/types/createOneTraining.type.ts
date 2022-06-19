import { Id } from '../../user/types'

export interface CreateOneTrainingRequest {
  title: string
  description?: string
  trainingDateTime: Date | string
  gymId: Id
  trainers: Id[]
}

export interface CreateOneTrainingResponse {}
