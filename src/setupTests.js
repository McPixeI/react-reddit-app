import '@testing-library/jest-dom'
import { store } from './app/store'
import { server } from './common/utils/test/server'
import { postsApi } from './services/posts'

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => {
  server.resetHandlers()
})

// solution to clear RTK Query cache after each test
beforeEach(() => {
  store.dispatch(postsApi.util.resetApiState())
})

// Disable API mocking after the tests are done.
afterAll(() => server.close())

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn()
})
