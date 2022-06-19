import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppUser, PublicAppUserDto } from '../../api/user/interfaces'
import { RootState } from '../store'

interface UserState {
  user: AppUser | null
  learnerList: PublicAppUserDto[] | null
}

const initialState: UserState = {
  user: null,
  learnerList: null,
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AppUser>) {
      state.user = action.payload
    },
    logOutUser(state) {
      state.user = null
    },
    // setError(state, action: PayloadAction<any>) {
    //   state.error = action.payload
    // },
    setLearnerList(state, action: PayloadAction<PublicAppUserDto[] | null>) {
      state.learnerList = action.payload
    },
  },
})

export const { logOutUser, setLearnerList, setUser } = user.actions
export const userReducer = user.reducer
export const selectUser = (state: RootState) => state.user
