import { AppNav } from '../containers/AppNav'
import { AppFooter } from '../containers/AppFooter/AppFooter'
import { CategoryFilter } from '../containers/CategoryFilter'
import { AppContainer } from '../containers/AppContainer'

function App () {
  return (
    <>
      <AppNav />
      <AppContainer className='min-h-[80vh]'>
        <CategoryFilter />
      </AppContainer>
      <AppFooter />
    </>
  )
}

export default App
