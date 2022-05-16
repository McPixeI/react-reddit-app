import { Radio } from '../../components/UI/Form/Radio/Radio'
import { Card } from '../../components/UI/Card'
import { CATEGORIES } from '../../common/utils/constants/categories'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../features/cateogories/categoriesSlice'
import { CardBody } from '../../components/UI/Card/Card'

export const CategoryFilter = () => {
  const dispatch = useDispatch()
  const selected = useSelector(state => state.categories.value)

  return (
    <Card className='mb-8'>
      <CardBody>
        <div className='flex items-cente'>
          <p className='font-medium'>Filter by:</p>
          {Object.keys(CATEGORIES)
            .map(category =>
              <Radio
                key={category}
                value={CATEGORIES[category]}
                selected={selected}
                onChange={evt => dispatch(selectCategory(evt.target.value))}
                className='ml-10 first:ml-0'
              />
            )}
        </div>
      </CardBody>
    </Card>

  )
}
