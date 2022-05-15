import { AppNav } from '../containers/AppNav'
import { AppFooter } from '../containers/AppFooter/AppFooter'
import { CategoryFilter } from '../containers/CategoryFilter'
import { AppContainer } from '../containers/AppContainer'
import { PostList } from '../containers/PostList/PostList'

function App () {
  return (
    <>
      <AppNav />
      <AppContainer className='min-h-[80vh]'>
        <CategoryFilter />
        <PostList />
      </AppContainer>
      <AppFooter />
    </>
  )
}

export default App
