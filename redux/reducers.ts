import { combineReducers } from 'redux'

import { loadingIndicatorReducer } from './slices/loading-indicator.slice'
import { userReducer } from './slices/user.slice'

const reducer = combineReducers({
  user: userReducer,
  loadingIndicator: loadingIndicatorReducer,
})

export default reducer
