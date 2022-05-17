import { CATEGORIES } from '../common/utils/constants/categories'
import reducer, { selectCategory } from '../features/cateogories/categoriesSlice'

describe('Categories Slice', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      value: CATEGORIES.NEW
    })
  })

  it('Should handle category change', () => {
    expect(reducer(undefined, {})).toEqual({
      value: CATEGORIES.NEW
    })
    const previousState = { value: CATEGORIES.NEW }
    expect(reducer(previousState, selectCategory(CATEGORIES.HOT))).toEqual({
      value: CATEGORIES.HOT
    })
  })
})
