import { AppNav } from '../containers/AppNav'
import { AppFooter } from '../containers/AppFooter/AppFooter'
import { AppContainer } from '../containers/AppContainer'
import AppRoutes from './AppRoutes'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../common/utils/errorBoundaries/ErrorFallback'

function App () {
  return (
    <>
      <AppNav />
      <AppContainer>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AppRoutes />
        </ErrorBoundary>
      </AppContainer>
      <AppFooter />
    </>
  )
}

export default App
