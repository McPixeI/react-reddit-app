import { useEffect, useState } from 'react'
import { Radio } from '../../components/UI/Form/Radio/Radio'
import { Card } from '../../components/UI/Card'
import { CATEGORIES } from '../../utils/config/categories'

export const CategoryFilter = () => {
  const [selected, setSelected] = useState(CATEGORIES.NEW)

  function fetchPosts (selected) {
    return window.fetch(`https://api.reddit.com/r/pics/${selected}.json`)
      .then(response => response.json())
      .then(json => console.log(json))
  }

  useEffect(() => {
    fetchPosts(selected)
  }, [selected])

  return (
    <Card>
      <div className='flex'>
        {Object.keys(CATEGORIES)
          .map(category =>
            <Radio
              key={category}
              name='category'
              value={CATEGORIES[category]}
              selected={selected}
              onChange={evt => setSelected(evt.target.value)}
              className='ml-10 first:ml-0'
            />
          )}
      </div>

      <p>Selected is: {selected}</p>
    </Card>

  )
}
