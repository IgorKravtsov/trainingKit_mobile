import { Id } from '../../user/types'

export interface RegisterRequest {
  email: string
  name: string
  lastName: string
  organizations: Id[]
  // role: UserRoles
  phoneNumber?: string
  photoURL?: string
}
