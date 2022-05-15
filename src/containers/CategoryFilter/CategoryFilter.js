import { useState } from 'react'
import { Radio } from '../../components/UI/Form/Radio/Radio'
import { CATEGORIES } from '../../utils/config/categories'

export const CategoryFilter = () => {
  const [selected, setSelected] = useState(CATEGORIES.NEW)

  return (
    <>
      {Object.keys(CATEGORIES).map(category => {
        return (
          <Radio
            key={category}
            name='category'
            value={CATEGORIES[category]}
            selected={selected}
            onChange={evt => setSelected(evt.target.value)}
          />
        )
      })}
      <p>Selected is: {selected}</p>
    </>

  )
}
