import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GymTraining, PartTraining, Training } from '../../api/training/types'
import { RootState } from '../store'

interface MyTrainingsState {
  myLearnerTrainings: GymTraining[]
  oldMyTrainerTrainings: PartTraining[]
  myTrainerTrainings: Training[]
}

const initialState: MyTrainingsState = {
  myLearnerTrainings: [],
  oldMyTrainerTrainings: [],
  myTrainerTrainings: [],
}

const myTrainings = createSlice({
  name: 'myTrainings',
  initialState,
  reducers: {
    setOldMyLearnerTrainings(state, action: PayloadAction<GymTraining[]>) {
      state.myLearnerTrainings = action.payload
    },
    setOldMyTrainerTrainings(state, action: PayloadAction<PartTraining[]>) {
      state.oldMyTrainerTrainings = action.payload.reverse()
    },
    setMyTrainerTrainings(state, action: PayloadAction<Training[]>) {
      state.myTrainerTrainings = action.payload.reverse()
    },
  },
})

export const { setOldMyLearnerTrainings, setOldMyTrainerTrainings, setMyTrainerTrainings } = myTrainings.actions
export const myTrainingsReducer = myTrainings.reducer
export const selectMyTrainings = (state: RootState) => state.myTrainings
