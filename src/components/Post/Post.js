import { Card } from '../UI/Card'
import { Image } from '../UI/Image'
import { Badge } from '../UI/Badge'
import { CardBody, CardHeading } from '../UI/Card/Card'
import { ChatAlt2Icon, PhotographIcon, ClockIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { relativeDateFormatter, scoreFormatter } from '../../common/utils/helpers/formatters'
import { Link } from 'react-router-dom'

export const Post = ({ props }) => {
  const {
    thumbnail,
    author,
    created,
    num_comments: numComments,
    score,
    title,
    id
  } = props

  /* eslint-disable react/jsx-indent */
  return (
    <Link
      to={`/post/${id}`}
      target='_blank'
    >
      <Card role='article' className='mb-4 hover:bg-gray-100 dark:hover:bg-gray-700'>
        <CardHeading className='aspect-auto overflow-hidden relative'>
          {thumbnail
            ? thumbnail !== 'nsfw'
                ? <Image
                    className='object-cover w-full rounded-t-md md:h-auto md:w-80 md:rounded-none md:rounded-l-md'
                    src={thumbnail}
                  />
                : <>
                  <PhotographIcon className='w-full text-gray-400' />
                  <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black text-2xl'>NSFW</span>
                  </>
            : <PhotographIcon className='w-full text-gray-400' />}
        </CardHeading>
        <CardBody className='w-full'>
          <div className='flex flex-col justify-between mb-2 md:flex-row '>
            <div className='flex text-sm items-center mb-2 md:m-0'>
              <h2 aria-level='2'>Published by {author}</h2>
            </div>
            <div className='flex'>
              <div className='flex mr-4'>
              {created
                ? <><ClockIcon className='h-5 w-5 mt-0.5 mr-0.5' />
                <time role='timer' className='mr-4'>
                  {relativeDateFormatter(created)}
                </time>
                  </>
                : null}
                <ChatAlt2Icon className='h-5 w-5 mt-0.5 mr-0.5' />
                <span role='contentinfo'>{numComments}</span>
              </div>
              <Badge>{scoreFormatter(score)}<StarIcon className='w-4 h-4 mt-0.5 ml-1' /></Badge>
            </div>
          </div>
          <h3 className='mb-2 max-w-xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h3>
        </CardBody>
      </Card>
    </Link>
  )
}
