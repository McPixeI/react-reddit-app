import { useSelector } from 'react-redux'
import { useGetPostsByCategoryQuery } from '../../services/posts'
import { Spinner } from '../../components/UI/Spinner'
import { Post } from '../../components/Post'

export const PostList = () => {
  const category = useSelector(state => state.categories.value)
  const { data, error, isLoading, isFetching } = useGetPostsByCategoryQuery(category)

  return (
    <>
      {error
        ? (
          <p>Oh no, there was an error</p>
          )
        : isLoading || isFetching
          ? <Spinner />
          : data
            ? data.map((post, i) => <Post key={i} props={post.data} />)
            : null}
    </>
  )
}
