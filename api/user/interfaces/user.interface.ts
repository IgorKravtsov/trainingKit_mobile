import { LanguageType, UserRoles } from '../enums'
import { Id } from '../types'
import { PublicAppUserDto } from './public-user.interface'

export interface AppUser {
  id: Id
  email: string | null
  emailVerified?: boolean
  isAnonymous?: boolean
  phoneNumber?: string | null
  photoURL: string | null
  displayName: string | null
  birthDate?: Date
  role: UserRoles
  lang: LanguageType
  prefferedCurrency?: string // Предпочитаемая валюта - в перспективе
  level?: string //Уровень пояса
  trainers?: PublicAppUserDto[]
  // organizations?: Organization[]
  // selectedOrganization?: Organization
  // characteristics?: Characteristic[]
  // abonements?: Abonement[]
  // learnerAbonements?: LearnerAbonement[]
  // gyms?: Gym[]
}
