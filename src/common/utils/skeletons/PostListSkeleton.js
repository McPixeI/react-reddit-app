import { PostSkeleton } from './PostSkeleton'

export const PostListSkeleton = ({ num = 6 }) => {
  const skeletons = Array.from({ length: num }, (v, index) => ({
    id: `loading-post-${index}`
  }))

  return (
    <div role='status'>
      {skeletons.map(skeleton => <PostSkeleton key={skeleton.id} />)}
    </div>
  )
}
