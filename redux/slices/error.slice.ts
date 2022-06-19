import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface ErrorState {
  error: string
}

const initialState: ErrorState = {
  error: '',
}

const error = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    clearError(state) {
      state.error = ''
    },
  },
})

export const { clearError, setError } = error.actions
export const errorReducer = error.reducer
export const selectError = (state: RootState) => state.error
