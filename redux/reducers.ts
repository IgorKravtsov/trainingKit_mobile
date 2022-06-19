import { combineReducers } from 'redux'

import { loadingIndicatorReducer } from './slices/loading-indicator.slice'
import { userReducer } from './slices/user.slice'
import { errorReducer } from './slices/error.slice'
import { organizationsReducer } from './slices/organizations.slice'
import { myTrainingsReducer } from './slices/myTrainings.slice'

const reducer = combineReducers({
  user: userReducer,
  loadingIndicator: loadingIndicatorReducer,
  error: errorReducer,
  organizations: organizationsReducer,
  myTrainings: myTrainingsReducer,
})

export default reducer
