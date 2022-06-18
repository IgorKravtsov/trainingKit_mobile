import { $api } from '../config/axios.config'
import { AppUser } from '../user/interfaces'
import { LoginRequest } from './dto'

export const Login = async (request: LoginRequest): Promise<AppUser> => {
  const { data } = await $api.post<AppUser>('auth/login', request)
  return data
}
