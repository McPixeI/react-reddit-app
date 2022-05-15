import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/cateogories/categoriesSlice'
import { postsApi } from '../services/posts'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    categories: categoriesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware)
})
