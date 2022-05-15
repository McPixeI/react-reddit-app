import { PostSkeleton } from './PostSkeleton'

export const PostListSkeleton = ({ num = 6 }) => {
  const skeletons = Array.from({ length: num }, (v, index) => ({
    id: `loading-post-${index}`
  }))

  return (
    skeletons.map(skeleton => <PostSkeleton key={skeleton.id} />)
  )
}
