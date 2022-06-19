import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface HttpRequestConfig<T> {
  shouldShowLoading: boolean
  action?: ActionCreatorWithPayload<Awaited<T>>
}
