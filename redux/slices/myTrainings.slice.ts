import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GymTraining } from '../../api/training/types'
import { RootState } from '../store'

interface MyTrainingsState {
  myLearnerTrainings: GymTraining[]
  myTrainerTrainings: GymTraining[]
}

const initialState: MyTrainingsState = {
  myLearnerTrainings: [],
}

const myTrainings = createSlice({
  name: 'myTrainings',
  initialState,
  reducers: {
    setMyLearnerTrainings(state, action: PayloadAction<GymTraining[]>) {
      state.myLearnerTrainings = action.payload
    },
  },
})

export const { setMyLearnerTrainings } = myTrainings.actions
export const myTrainingsReducer = myTrainings.reducer
export const selectMyTrainings = (state: RootState) => state.myTrainings
