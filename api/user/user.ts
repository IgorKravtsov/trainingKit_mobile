import { $api } from '../config/axios.config'
import { PartTraining } from '../training/types'
import { AppUser } from './interfaces'
import { GetTrainerTrainingsRequest, Id } from './types'
import { UpdateLanguageRequest } from './types/update-language.type'

export const GetTrainerTrainings = async (request: GetTrainerTrainingsRequest): Promise<PartTraining[]> => {
  const { data } = await $api.post<PartTraining[]>('user/get-trainer-trainings', request)
  return data
}

export const UpdateLanguage = async (userId: Id, request: UpdateLanguageRequest): Promise<AppUser> => {
  const { data } = await $api.put<AppUser>(`user/change-language/${userId}`, request)
  return data
}
