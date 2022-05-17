// test-utils.jsx
import { render as rtlRender, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../../../features/cateogories/categoriesSlice'
import { AppProviders } from '../../../app/AppProviders'

function renderWithProviders (
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { categories: categoriesReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  return rtlRender(ui, { wrapper: AppProviders, ...renderOptions })
}

const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => screen.getByRole('status'),
    { timeout: 4000 }
  )

/* eslint-disable import/export */
export * from '@testing-library/react'
export { renderWithProviders, waitForLoadingToFinish }
