import { createSlice } from '@reduxjs/toolkit'
import { STATUSES } from '../../common/utils/constants/statuses'

const initialState = {
  posts: [],
  status: STATUSES.IDLE,
  error: null
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

// export const {} = postsSlice.actions

export const selectAllPosts = state => state.posts.posts

export default postsSlice.reducer
