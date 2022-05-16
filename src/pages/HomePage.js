import { CategoryFilter } from '../containers/CategoryFilter'
import { PostList } from '../containers/PostList/PostList'

export const HomePage = () => {
  return (
    <>
      <CategoryFilter />
      <PostList />
    </>
  )
}
