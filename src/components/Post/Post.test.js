
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Post } from './Post'
import { MemoryRouter, Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

const fakeData = {
  author: 'Samuel',
  created: new Date(2022, 2, 17).getTime(),
  num_comments: 10,
  score: '2500',
  title: 'Title test',
  id: '1'
}

describe('Post', () => {
  it('Should render a Post with author, title, date, comments-count and score', () => {
    render(
      <Post props={fakeData} />,
      { wrapper: MemoryRouter }
    )

    const author = screen.getByRole('heading', { name: /Samuel/ })
    const title = screen.getByRole('heading', { name: /Title test/ })
    const created = screen.getByRole('timer')
    const score = screen.getByText(/2.5K/i)
    const numComments = screen.getByText(/10/i)

    expect(author).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(created).toBeInTheDocument()
    expect(score).toBeInTheDocument()
    expect(numComments).toBeInTheDocument()
  })

  it('Should navigate on click to post details', async () => {
    const history = createMemoryHistory()
    const route = `/post/${fakeData.id}`
    history.push(route)
    render(
      <Router location={history.location} navigator={history}>
        <Post props={fakeData} />
      </Router>
    )
    const post = screen.getByRole('article')
    await userEvent.click(post)
    expect(history.location.pathname).toEqual(route)
  })
})
