import { AppNav } from './containers/AppNav'
import { AppFooter } from './containers/AppFooter/AppFooter'
import { CategoryFilter } from './containers/CategoryFilter'

function App () {
  return (
    <>
      <AppNav />
      <CategoryFilter />
      <AppFooter />
    </>
  )
}

export default App
