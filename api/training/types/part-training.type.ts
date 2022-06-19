import { Id } from '../../user/types'

export interface PartTraining {
  id: Id
  title: string
  description?: string
  trainingDateTime: Date | string
}
