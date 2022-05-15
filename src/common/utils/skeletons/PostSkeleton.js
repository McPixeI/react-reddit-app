import { Card } from '../../../components/UI/Card'
import { CardBody, CardHeading } from '../../../components/UI/Card/Card'

export const PostSkeleton = () => {
  return (
    <Card className='mb-4 opacity-30 animate-pulse'>
      <CardHeading className='aspect-square bg-gray-400 dark:bg-gray-500 overflow-hidden relative'>
        <div className='object-cover w-full rounded-t-md md:h-auto md:w-80 md:rounded-none md:rounded-l-md' />
      </CardHeading>
      <CardBody className='w-full'>
        <div className='h-3.5 mt-8 bg-gray-400 dark:bg-gray-400 rounded mb-3 w-2/3' />
        <div className='h-3.5 bg-gray-400 dark:bg-gray-400 rounded mb-3 w-1/2' />
      </CardBody>
    </Card>
  )
}
