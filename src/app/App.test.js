import { renderWithProviders, screen } from '../common/utils/test/test-utils'
import { render } from '@testing-library/react'
import App from './App'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('App', () => {
  test('Renders App without crashing', async () => {
    renderWithProviders(<App />)
    expect(screen.getByText(/react/i)).toBeInTheDocument()
  })

  test('landing on a bad page should go to NotFoundPage', () => {
    const history = createMemoryHistory()
    history.push('/wrong-route')
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    )
    expect(screen.getByText(/404/i)).toBeInTheDocument()
  })
})
