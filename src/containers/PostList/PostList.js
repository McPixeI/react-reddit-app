import { useSelector } from 'react-redux'
import { useGetPostsByCategoryQuery } from '../../services/posts'
import { Spinner } from '../../components/UI/Spinner'

export const PostList = () => {
  const category = useSelector(state => state.categories.value)
  const { data, error, isLoading, isFetching } = useGetPostsByCategoryQuery(category)

  return (
    <>
      {error
        ? (
          <>Oh no, there was an error</>
          )
        : isLoading || isFetching
          ? <Spinner />
          : data
            ? (
                console.log(JSON.stringify(data))
              )
            : null}
    </>
  )
}
