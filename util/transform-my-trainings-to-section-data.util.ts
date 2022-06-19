import { Gym } from '../api/gym/types'
import { GymTraining, Training } from '../api/training/types'

export interface SectionGymTraining {
  gym: Gym
  data: Training[]
}

export const transformMyTrainingsToSectionData = (gymTrainings: GymTraining[]): SectionGymTraining[] => {
  return gymTrainings.map(gt => ({ gym: gt.gym, data: gt.trainings }))
}
