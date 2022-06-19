import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Organization } from '../../api/organization/types'
import { RootState } from '../store'

interface OrganizationsState {
  organizations: Organization[]
}

const initialState: OrganizationsState = {
  organizations: [],
}

const organizations = createSlice({
  name: 'organizations',
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
