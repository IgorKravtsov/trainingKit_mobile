import { Alert } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectError, setError } from '../../redux/slices/error.slice'
import { hideLoading, selectLoadingIndicator, showLoading } from '../../redux/slices/loading-indicator.slice'
import { defaultHttpRequestConfig } from './default-http-request-config'
import { HttpRequestConfig } from './http-request-config.interface'

export function useHttpRequest<Args, Res>(
  request: (...arg: Args[]) => Promise<Res | void>,
  httpRequestConfig?: Partial<HttpRequestConfig<Res>>
): [(...args: Args[]) => Promise<Res | void>, string, boolean] {
  const config: HttpRequestConfig<Res> = {
    ...defaultHttpRequestConfig,
    ...httpRequestConfig,
  }
  const { isLoading } = useAppSelector(selectLoadingIndicator)
  const { error } = useAppSelector(selectError)

  const dispatch = useAppDispatch()

  const method = async (...args: Args[]): Promise<Res | void> => {
    try {
      config.shouldShowLoading && dispatch(showLoading())
      const data = await request(...args)
      data && config.action && dispatch(config.action(data))

      return data
    } catch (err: any) {
      config.logError && console.log(err)

      let message = err?.response?.data?.message
      if (err?.message === 'Network Error') {
        message = 'Помилка інтернет з`єднання'
      }

      dispatch(setError(message))
      Alert.alert('Помилка', message)
      // setTimeout(() => {
      //   dispatch(clearError())
      // }, config.clearErrorTime)
    } finally {
      config.shouldShowLoading && dispatch(hideLoading())
    }
  }

  return [method, error, isLoading]
}
