import { renderWithProviders, screen } from '../common/utils/test/test-utils'
import { PostList } from '../containers/PostList/PostList'

const setup = () => {
  const utils = renderWithProviders(<PostList />)
  const refreshButton = screen.getByRole('button', { name: 'Refresh' })

  return {
    refreshButton,
    ...utils
  }
}

describe('Post List', () => {
  it('Should render without crashing', () => {
    const { refreshButton } = setup()
    expect(refreshButton).toBeInTheDocument()
  })
})
