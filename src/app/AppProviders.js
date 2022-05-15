import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router } from 'react-router-dom'

export const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        {children}
      </Router>
    </Provider>
  )
}
