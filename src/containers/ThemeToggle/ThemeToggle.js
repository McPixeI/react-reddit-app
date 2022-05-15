import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { Toggle } from '../../components/UI/Form/Toggle'
import { useDarkMode } from '../../common/hooks/use-dark-mode'

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <Toggle
      name='theme_toggler'
      aria-label={darkMode ? 'Activate Light Mode' : 'Activate Dark Mode'}
      label={darkMode
        ? <MoonIcon className='w-5 h-5 fill-gray-300 relative -left-1.5 mr-1 md:mr-5' />
        : <SunIcon className='w-5 h-5 fill-yellow-500 relative -left-1.5 mr-1 md:mr-5' />}
      onClick={() => setDarkMode(!darkMode)}
      checked={darkMode}
    />
  )
}
