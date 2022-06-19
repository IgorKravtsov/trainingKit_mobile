import { $api } from '../config/axios.config'
import { GetOrganizationsResponse } from './types'

export const GetOrganizations = async (): Promise<GetOrganizationsResponse> => {
  // return Promise.resolve({ organizations: mocked_organizations })
  const { data } = await $api.get<GetOrganizationsResponse>('organization/get-organizations')
  return data
}
