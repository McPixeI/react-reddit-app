import { useSelector } from 'react-redux'
import { useGetPostsByCategoryQuery } from '../../services/posts'
import { Button } from '../../components/UI/Button'
import { Post } from '../../components/Post'
import { PostListSkeleton } from '../../common/utils/skeletons/PostListSkeleton'
import { RefreshIcon } from '@heroicons/react/outline'
import { dateTimeFormatter } from '../../common/utils/helpers/formatters'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export const PostList = () => {
  const category = useSelector(state => state.categories.value)
  const { data, error, isLoading, isFetching, refetch, startedTimeStamp } = useGetPostsByCategoryQuery(category)
  const [lastUpdate, setLastUpdate] = useState(null)

  useEffect(() => {
    setLastUpdate(new Date(startedTimeStamp))
  }, [startedTimeStamp])

  /* eslint-disable react/jsx-indent */
  const ListHeader = () => {
    const classes = clsx('w-5 h-5 mr-1', { 'animate-spin': isFetching || isLoading })
    return (
      <div className='flex flex-row items-center mb-4'>
        <Button className='mr-4' onClick={refetch} disabled={isFetching || isLoading}>
          <RefreshIcon className={classes} />
          Refresh
        </Button>
        {lastUpdate && !isFetching && !isLoading
          ? <div>
            <p className='text-sm font-medium'>/{category}</p>
            <p className='text-sm'>last updated at {dateTimeFormatter(lastUpdate)}</p>
            </div>
          : null}
      </div>
    )
  }

  if (isLoading) return <PostListSkeleton />

  if (isFetching) {
    return (
      <>
        <ListHeader />
        <PostListSkeleton />
      </>
    )
  }

  if (error) return <p>Sorry, there was an error. Try refreshing the page</p>

  return (
    <>
      {data
        ? (<>
          <ListHeader />
          {data.map((post, i) => <Post key={i} props={post.data} />)}
           </>
          )
        : null}
    </>
  )
}
