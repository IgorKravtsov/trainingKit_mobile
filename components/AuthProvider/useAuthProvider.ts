import { useEffect } from 'react'

import { $api } from '../../api/config/axios.config'
import { Organization } from '../../api/organization/types'
import { LanguageType, UserRoles } from '../../api/user/enums'
import { AppUser } from '../../api/user/interfaces'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { hideLoading, showLoading } from '../../redux/slices/loading-indicator.slice'
import { logOutUser, selectUser, setUser } from '../../redux/slices/user.slice'

export type AuthContextState = {
  user: Partial<AppUser> | null
  isAuth: boolean
  role: UserRoles
  error?: any
  // selectedOrganization: Organization | null
}

export const useAuthProvider = (): AuthContextState => {
  const { user } = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const getLoggedInUser = async () => {
    try {
      dispatch(showLoading())
      const { data } = await $api.get<AppUser>('user')

      dispatch(setUser(data))
      setUserLanguage(data.lang)
    } catch (e: any) {
      dispatch(logOutUser())
      // dispatch(setError(e.message))
    } finally {
      dispatch(hideLoading())
    }
  }

  const setUserLanguage = (lang: LanguageType) => {
    // i18next.changeLanguage(lang || LanguageType.Ukrainian)
  }

  useEffect(() => {
    !user && getLoggedInUser()
  }, [])

  return {
    user,
    isAuth: user !== null,
    role: user?.role || UserRoles.ANONYMOUS,
    // selectedOrganization: user?.selectedOrganization || null,
  }
}
