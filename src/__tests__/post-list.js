import { renderWithProviders, screen, waitForLoadingToFinish } from '../common/utils/test/test-utils'
import { fireEvent } from '@testing-library/react'
import { PostList } from '../containers/PostList/PostList'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fakePost } from '../common/utils/test/fake'

const fakeData = {
  data: {
    children: [
      {
        data: fakePost
      }
    ]
  }
}

const setup = () => {
  const utils = renderWithProviders(<PostList />)
  const refreshButton = screen.getByRole('button', { name: 'Refresh' })
  return {
    refreshButton,
    ...utils
  }
}

export const handlers = [
  rest.get('https://api.reddit.com/r/pics/new.json', (req, res, ctx) => {
    return res(ctx.json(fakeData), ctx.delay(300))
  })
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())
// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())
// Disable API mocking after the tests are done.
afterAll(() => server.close())

describe('Post List', () => {
  it('Should render without crashing', () => {
    const { refreshButton } = setup()
    expect(refreshButton).toBeInTheDocument()
  })

  it('Refetches current post list after clicking refresh button', async () => {
    const { refreshButton } = setup()
    expect(screen.getByRole('status')).toBeInTheDocument()
    fireEvent.click(refreshButton)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(refreshButton).toHaveAttribute('disabled')
    await waitForLoadingToFinish()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(await screen.findByText(/Samuel/i)).toBeInTheDocument()
  })

  it('Shows error when fetch failes', () => {

  })
})
