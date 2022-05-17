// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import categoriesReducer from '../../../features/cateogories/categoriesSlice'

function render (
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { categories: categoriesReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper ({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

/* eslint-disable import/export */
export * from '@testing-library/react'
export { render }
