import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageKey } from '../common'
import { AsyncStorageUser } from '../interfaces'

export const saveUserToStorage = async (credetials: AsyncStorageUser) => {
  try {
    await AsyncStorage.setItem(AsyncStorageKey.User, JSON.stringify(credetials))
  } catch (error) {
    console.error(error)
  }
}
