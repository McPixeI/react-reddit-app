import { AppNav } from '../containers/AppNav'
import { AppFooter } from '../containers/AppFooter/AppFooter'
import { CategoryFilter } from '../containers/CategoryFilter'
import { AppContainer } from '../containers/AppContainer'
import { useGetPostsByCategoryQuery } from '../services/posts'
import { useSelector } from 'react-redux'

function App () {
  const category = useSelector(state => state.categories.value)

  const { data, error, isLoading } = useGetPostsByCategoryQuery(category)

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
