import { Provider } from 'react-redux'

import { store } from './redux/store'
import AppLayout from './components/AppLayout'
import AuthProvider from './components/AuthProvider/AuthProvider'

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </Provider>
  )
}
