import { renderWithProviders, screen, waitForLoadingToFinish } from '../common/utils/test/test-utils'
import { fireEvent } from '@testing-library/react'
import { PostList } from '../containers/PostList/PostList'
import { rest } from 'msw'
import { server } from '../common/utils/test/server'
import { fakePost } from '../common/utils/test/fake'
import { dateTimeFormatter } from '../common/utils/helpers/formatters'
import { API_BASE_PATH } from '../common/utils/constants/api'

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

  it('Refetches current post list after clicking refresh button', async () => {
    const { refreshButton } = setup()

    expect(screen.getByRole('status')).toBeInTheDocument()

    fireEvent.click(refreshButton)

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(refreshButton).toHaveAttribute('disabled')

    await waitForLoadingToFinish()

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(await screen.findByText(/Samuel/i)).toBeInTheDocument()

    const img = screen.getByRole('img')
    expect(img.src).toBe(fakePost.thumbnail)
  })

  it('Updates refresh date after post list refreshed', async () => {
    const { refreshButton } = setup()
    fireEvent.click(refreshButton)
    await waitForLoadingToFinish()
    const updateDate = screen.getByTestId('update-date').textContent
    expect(updateDate).toBe(dateTimeFormatter(new Date()))
  })

  it('Handles error response', async () => {
    server.use(
      rest.get(
        `${API_BASE_PATH}new.json`,
        (req, res, ctx) => res(ctx.status(500))

      )
    )
    renderWithProviders(<PostList />)
    await screen.findByRole('alert')
  })
})
