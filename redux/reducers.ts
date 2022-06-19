import { combineReducers } from 'redux'

import { loadingIndicatorReducer } from './slices/loading-indicator.slice'
import { userReducer } from './slices/user.slice'
import { errorReducer } from './slices/error.slice'
import { organizationsReducer } from './slices/organizations.slice'

const reducer = combineReducers({
  user: userReducer,
  loadingIndicator: loadingIndicatorReducer,
  error: errorReducer,
  organizations: organizationsReducer,
})

export default reducer
