import { PublicAppUserDto } from '../../user/interfaces'
import { Id } from '../../user/types'

export interface Gym {
  id: Id
  title: string
  address: string
  img?: string
  trainers?: PublicAppUserDto
}
