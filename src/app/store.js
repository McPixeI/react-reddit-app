import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/cateogories/categoriesSlice'
import postsReducer from '../features/posts/postsSlice'
import { postsApi } from '../services/posts'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    categories: categoriesReducer,
    posts: postsReducer
  }
})
