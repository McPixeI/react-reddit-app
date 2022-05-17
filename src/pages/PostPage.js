import { useParams } from 'react-router-dom'
import { Card } from '../components/UI/Card'
import { CardBody } from '../components/UI/Card/Card'
import { Spinner } from '../components/UI/Spinner'
import { Image } from '../components/UI/Image'

import { useGetPostByIdQuery } from '../services/posts'
import { ChatAlt2Icon, ClockIcon } from '@heroicons/react/outline'
import { relativeDateFormatter, scoreFormatter } from '../common/utils/helpers/formatters'
import { StarIcon } from '@heroicons/react/solid'
import { Badge } from '../components/UI/Badge'

export const PostPage = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetPostByIdQuery(id)

  if (error) return <p role='alert' className='text-center mt-10'>There was an error retrieving the data.Please, try refreshing the page</p>

  if (isLoading) return <Spinner />

  /* eslint-disable react/jsx-closing-tag-location */
  return (
    data
      ? <Card className='max-w-4xl mx-auto '>
        <CardBody className='w-full'>
          <h1 className='text-3xl text-center font-medium dark:text-white mb-6'>{data.title}</h1>
          {data.url ? <Image className='aspect-square mx-auto' src={data.url} /> : null}
          <div className='flex flex-col justify-between mb-2 mt-6 md:flex-row '>
            <div className='flex text-sm items-center mb-2 md:m-0'>
              <h2>Published by <strong>{data.author}</strong></h2>
            </div>
            <div className='flex'>
              <div className='flex mr-4'>
                <ClockIcon className='h-5 w-5 mt-0.5 mr-0.5' />
                <time className='mr-4'>
                  {relativeDateFormatter(data.created)}
                </time>
                <ChatAlt2Icon className='h-5 w-5 mt-0.5 mr-0.5' />
                {data.num_comments}
              </div>
              <Badge>{scoreFormatter(data.score)}<StarIcon className='w-4 h-4 mt-0.5 ml-1' /></Badge>
            </div>
          </div>
        </CardBody>
      </Card>
      : null
  )
}
