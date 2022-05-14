import { Link } from 'react-router-dom'
import { ExtLink } from '../../components/UI/Link/ExtLink'
import { NAV_ITEMS } from '../../utils/config/nav-items'

export const AppFooter = () => {
  return (
    <footer className='container mx-auto p-4 bg-white md:flex md:items-center md:justify-between dark:bg-bgdark'>
      <span className='text-sm text-gray-500 dark:text-gray-400'>
        <p>{`© ${new Date().getFullYear()} McPixel. All Rights Reserved.`}</p>
        <p>Built by <ExtLink to='https://github.com/McPixeI' label='McPixel' />. Data provided by <ExtLink to='https://api.reddit.com/' label='Reddit API' />.</p>
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
        {NAV_ITEMS.map(item =>
          <li key={item.id}>
            <Link to={item.to} className='mr-4 hover:underline md:mr-6 '>{item.label}</Link>
          </li>
        )}
      </ul>
    </footer>
  )
}
