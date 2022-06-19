import { Gym } from '../../gym/types'
import { Training } from './training.type'

export interface GymTraining {
  gym: Gym
  trainings: Training[]
}
