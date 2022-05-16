import { useSelector } from 'react-redux'
import { useGetPostsByCategoryQuery } from '../../services/posts'
import { Button } from '../../components/UI/Button'
import { Post } from '../../components/Post'
import { PostListSkeleton } from '../../common/utils/skeletons/PostListSkeleton'
import { RefreshIcon } from '@heroicons/react/outline'
import { dateTimeFormatter } from '../../common/utils/helpers/formatters'
import clsx from 'clsx'

export const PostList = () => {
  const category = useSelector(state => state.categories.value)
  const { data, error, isLoading, isFetching, refetch, startedTimeStamp } = useGetPostsByCategoryQuery(category)
  const iconClasses = clsx('w-5 h-5 mr-1', { 'animate-spin': isFetching || isLoading })

  const lastUpdate = new Date(startedTimeStamp) || null

  if (error) return <p role='alert' className='text-center mt-10'>There was an error retrieving the data.Please, try refreshing the page</p>

  /* eslint-disable react/jsx-closing-tag-location */
  return (
    <>
      <div className='flex flex-row items-center mb-4'>
        <Button className='mr-4' onClick={refetch} disabled={isFetching || isLoading}>
          <RefreshIcon className={iconClasses} /> Refresh
        </Button>
        {lastUpdate && !isFetching && !isLoading
          ? <div>
            <p className='text-sm font-medium'>/{category}</p>
            <p className='text-sm'>last updated at {dateTimeFormatter(lastUpdate)}</p>
          </div>
          : null}
      </div>
      {isFetching || isLoading
        ? <PostListSkeleton />
        : data
          ? data.map((post, i) => <Post key={post.data.id} props={post.data} />)
          : null}
    </>
  )
}
