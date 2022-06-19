import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Organization } from '../../api/organization/types'
import { RootState } from '../store'

interface OrganizationsState {
  organizations: Organization[] | null
}

const initialState: OrganizationsState = {
  organizations: null,
}

const organizations = createSlice({
  name: '',
  initialState,
  reducers: {
    setOrganizations(state, action: PayloadAction<Organization[]>) {
      state.organizations = action.payload
    },
  },
})

export const { setOrganizations } = organizations.actions
export const organizationsReducer = organizations.reducer
export const selectOrganizations = (state: RootState) => state.organizations
