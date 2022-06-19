import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface UserState {}

const initialState: UserState = {}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const {} = user.actions
export const userReducer = user.reducer
export const selectUser = (state: RootState) => state.user
