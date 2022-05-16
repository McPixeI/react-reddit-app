import { EmojiSadIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI/Button'

export const NotFoundPage = () => {
  return (
    <div className='container min-h-[70vh] flex flex-col justify-center items-center'>
      <EmojiSadIcon className='w-16 h-16 mb-2' />
      <h1 className='text-3xl font-semibold mb-3'>Error <span className='text-primary'>404</span></h1>
      <p className='text-lg mb-8'>Sorry, the page you are looking for doesn't exist.</p>
      <Link to='/'>
        <Button>
          Go back
        </Button>
      </Link>
    </div>
  )
}
