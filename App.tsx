import { Provider } from 'react-redux'
import * as SplashScreen from 'expo-splash-screen'

import './locales/i18n'

import { store } from './redux/store'
import AppLayout from './components/AppLayout'
import AuthProvider from './components/AuthProvider/AuthProvider'
import { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageKey } from './common'
import { AsyncStorageUser } from './interfaces'

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false)
  const [currentUserCredentials, setCurrentUserCredentials] = useState<AsyncStorageUser | null>(null)

  const parseUser = async () => {
    const user = await AsyncStorage.getItem(AsyncStorageKey.User)
    const parsedUser: AsyncStorageUser | null = user && JSON.parse(user)
    setCurrentUserCredentials(parsedUser)
  }

  const hideSplashScreen = async (isAppReady: boolean) => {
    if (isAppReady) {
      await SplashScreen.hideAsync()
    }
  }

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        await parseUser()
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setIsAppReady(true)
      }
    }

    prepare()
  }, [])

  useEffect(() => {
    hideSplashScreen(isAppReady)
  }, [isAppReady])

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [isAppReady])

  if (!isAppReady) {
    return null
  }

  return (
    <Provider store={store}>
      <AuthProvider>
        <AppLayout currentUserCredentials={currentUserCredentials} onLayoutRootView={onLayoutRootView} />
      </AuthProvider>
    </Provider>
  )
}
