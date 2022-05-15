import { Card } from '../UI/Card'
import { Image } from '../UI/Image'
import { Badge } from '../UI/Badge'
import { CardBody, CardHeading } from '../UI/Card/Card'
import { ChatAlt2Icon, PhotographIcon, StarIcon } from '@heroicons/react/solid'
import { relativeDateFormatter, scoreFormatter } from '../../common/utils/helpers/formatters'

export const Post = ({ props }) => {
  return (
    <Card className='mb-4'>
      <CardHeading className='aspect-auto overflow-hidden relative'>
        {props.thumbnail && props.thumbnail !== 'nsfw'
          ? <Image
              className='object-cover w-full rounded-t-md md:h-auto md:w-48 md:rounded-none md:rounded-l-md'
              src={props.thumbnail}
            />
          : <PhotographIcon className='w-52 h-52 text-gray-400' />}
      </CardHeading>

      <CardBody>
        {relativeDateFormatter(props.created)}
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{props.title}</h5>
        <h2>{props.author}</h2>
        <div className='flex'><ChatAlt2Icon className='h-4 w-4' />{props.num_comments}</div>
        {props.score ? <Badge>{scoreFormatter(props.score)}<StarIcon className='w-4 h-4' /></Badge> : null}

      </CardBody>
    </Card>
  )
}
