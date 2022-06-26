import React from 'react'
import { StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTranslation } from 'react-i18next'

import { AsyncStorageKey, LanguageType } from '../../common'

import { Logout } from '../../api/auth/auth.api'
import { useHttpRequest } from '../../hooks'

import { useAppDispatch } from '../../redux/hooks'
import { logOutUser } from '../../redux/slices/user.slice'

import Button from '../../components/Button/Button'
import SubTitle from './components/SubTitle'
import { useAuthContext } from '../../components/AuthProvider/AuthProvider'
import { UpdateLanguage } from '../../api/user/user'

const SettingsScreen: React.FC = (): React.ReactElement => {
  const { t, i18n } = useTranslation()
  const { isAuth, user } = useAuthContext()

  const [logout] = useHttpRequest(Logout)
  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    await logout()
    await AsyncStorage.removeItem(AsyncStorageKey.User)
    dispatch(logOutUser())
  }

  const updateLanguage = async (lang: LanguageType) => {
    await UpdateLanguage(user?.id || 0, { lang })
  }

  const changeLanguageHandler = (lang: LanguageType) => {
    i18n.changeLanguage(lang)
    isAuth && updateLanguage(lang)
  }

  return (
    <View style={styles.container}>
      <View>
        <SubTitle style={styles.changeLangTitle}>{t('settings:langProps.title')}</SubTitle>
        <View style={styles.changeLangContainer}>
          <Button onPress={() => changeLanguageHandler(LanguageType.Ukrainian)} mode='flat'>
            {t('settings:langProps.ukr')}
          </Button>
          <Button onPress={() => changeLanguageHandler(LanguageType.English)} mode='flat' style={styles.lang2}>
            {t('settings:langProps.eng')}
          </Button>
        </View>
      </View>
      {isAuth && (
        <Button style={styles.btn} onPress={handleLogout}>
          {t('settings:langProps.logoutLabel')}
        </Button>
      )}
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  changeLangTitle: {
    marginBottom: 24,
    textAlign: 'center',
  },
  changeLangContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  lang2: {
    marginLeft: 50,
  },
  btn: {
    width: '100%',
  },
})
