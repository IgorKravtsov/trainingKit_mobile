import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GymTraining, PartTraining } from '../../api/training/types'
import { RootState } from '../store'

interface MyTrainingsState {
  myLearnerTrainings: GymTraining[]
  myTrainerTrainings: PartTraining[]
}

const initialState: MyTrainingsState = {
  myLearnerTrainings: [],
  myTrainerTrainings: [],
}

const myTrainings = createSlice({
  name: 'myTrainings',
  initialState,
  reducers: {
    setMyLearnerTrainings(state, action: PayloadAction<GymTraining[]>) {
      state.myLearnerTrainings = action.payload
    },
    setMyTrainerTrainings(state, action: PayloadAction<PartTraining[]>) {
      state.myTrainerTrainings = action.payload
    },
  },
})

export const { setMyLearnerTrainings, setMyTrainerTrainings } = myTrainings.actions
export const myTrainingsReducer = myTrainings.reducer
export const selectMyTrainings = (state: RootState) => state.myTrainings
