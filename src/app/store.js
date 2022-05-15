import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/cateogories/categoriesSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer
  }
})
