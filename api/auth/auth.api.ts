import { $api } from '../config/axios.config'
import { AppUser } from '../user/interfaces'
import { LoginRequest, RegisterRequest } from './dto'

export const Login = async (request: LoginRequest): Promise<AppUser> => {
  const { data } = await $api.post<AppUser>('auth/login', request)
  return data
}

export const Register = async (request: RegisterRequest): Promise<AppUser> => {
  // return Promise.resolve({ accessToken: 'MOCKED_accessToken', refreshToken: 'MOCKED_refreshToken', user: mocked_user['superletsplay7@gmail.com'] })
  const { data } = await $api.post<AppUser>('auth/register', request)
  return data
}

export const Logout = async () => {
  const { data } = await $api.post<{ message: string }>('auth/logout')
  return data
}