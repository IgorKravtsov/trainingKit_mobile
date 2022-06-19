import { Gym } from '../../gym/types'
import { PublicAppUserDto } from '../../user/interfaces'
import { Id } from '../../user/types'

export enum CannotVisitTrainingType {
  Time = 'time',
  AlreadyMarked = 'alreadyMarked',
}

export interface CannotVisitTraining {
  type: CannotVisitTrainingType
  canBeVisited: boolean
}

export interface Training {
  id: Id
  title: string
  gym?: Gym
  trainingDateTime: Date | string
  trainers: PublicAppUserDto[]
  canBeVisited?: boolean | CannotVisitTraining
}
