import { Id } from "../../../api/user/types"

export interface SubmitRegister {
  name: string
  lastName: string
  email: string
  password: string
  confirmPassword?: string
  DoB: Date
  organizations: Id[]
}
