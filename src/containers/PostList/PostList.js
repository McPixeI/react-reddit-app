import { useSelector } from 'react-redux'
import { useGetPostsByCategoryQuery } from '../../services/posts'
import { Post } from '../../components/Post'
import { PostListSkeleton } from '../../common/utils/skeletons/PostListSkeleton'

export const PostList = () => {
  const category = useSelector(state => state.categories.value)
  const { data, error, isLoading, isFetching } = useGetPostsByCategoryQuery(category)

  return (
    <div>
      {error
        ? (
          <p>Oh no, there was an error</p>
          )
        : isLoading || isFetching
          ? <PostListSkeleton />
          : data
            ? data.map((post, i) => <Post key={i} props={post.data} />)
            : null}
    </div>
  )
}
