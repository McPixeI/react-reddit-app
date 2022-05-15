import { createSlice } from '@reduxjs/toolkit'
import { CATEGORIES } from '../../common/utils/config/categories'

const initialState = {
  value: CATEGORIES.NEW
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      return {
        ...state,
        value: action.payload
      }
    }
  }
})

export const { selectCategory } = categoriesSlice.actions

export default categoriesSlice.reducer
