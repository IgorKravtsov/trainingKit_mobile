import { $api } from '../config/axios.config'
import { PartTraining } from '../training/types'
import { GetTrainerTrainingsRequest } from './types'

export const GetTrainerTrainings = async (request: GetTrainerTrainingsRequest): Promise<PartTraining[]> => {
  const { data } = await $api.post<PartTraining[]>('user/get-trainer-trainings', request)
  return data
}
