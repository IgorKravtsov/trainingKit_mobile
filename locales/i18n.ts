import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

// import {} from 'react-i18next'
//@ts-ignore
import locale from 'react-native-locale-detector'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AsyncStorageKey } from '../common'

import eng from './eng.json'
import ukr from './ukr.json'
import { LanguageType } from '../api/user/enums'

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true,
  detect: async (callback: Function) => {
    const savedDataJSON = await AsyncStorage.getItem(AsyncStorageKey.LangCode)
    const lng = savedDataJSON ? savedDataJSON : null
    const selectLanguage = lng || locale
    callback(selectLanguage)
  },
  cacheUserLanguage: () => {},
}

const loadPath = '/locales/{{lng}}/{{ns}}.json'

i18next
  //@ts-ignore
  // .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ukr',
    resources: { eng, ukr },
    ns: ['common'],
    defaultNS: 'common',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  })

export default i18next
