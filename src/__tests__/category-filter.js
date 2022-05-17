import { render, screen } from '../common/utils/test/test-utils'
import { fireEvent } from '@testing-library/react'
import { CategoryFilter } from '../containers/CategoryFilter'

const setup = () => {
  const utils = render(<CategoryFilter />)
  const newRadio = screen.getByRole('radio', { name: /new/i })
  const hotRadio = screen.getByRole('radio', { name: /hot/i })
  const controversialRadio = screen.getByRole('radio', { name: /controversial/i })
  const topRadio = screen.getByRole('radio', { name: /top/i })
  return {
    newRadio,
    hotRadio,
    controversialRadio,
    topRadio,
    ...utils
  }
}

describe('Category filter', () => {
  test('Should render all radio categories', () => {
    const { newRadio, hotRadio, controversialRadio, topRadio } = setup()
    expect(newRadio).toBeInTheDocument()
    expect(hotRadio).toBeInTheDocument()
    expect(controversialRadio).toBeInTheDocument()
    expect(topRadio).toBeInTheDocument()
  })

  test('Should have NEW as default checked radio', () => {
    const { newRadio, hotRadio, controversialRadio, topRadio } = setup()
    expect(newRadio).toBeChecked()
    expect(hotRadio).not.toBeChecked()
    expect(controversialRadio).not.toBeChecked()
    expect(topRadio).not.toBeChecked()
  })

  test('Should update checked attributes on click radio', () => {
    const { newRadio, hotRadio, controversialRadio, topRadio } = setup()
    expect(newRadio).toBeChecked()
    expect(hotRadio).not.toBeChecked()
    expect(controversialRadio).not.toBeChecked()
    expect(topRadio).not.toBeChecked()

    fireEvent.click(hotRadio)

    expect(newRadio).not.toBeChecked()
    expect(hotRadio).toBeChecked()
    expect(controversialRadio).not.toBeChecked()
    expect(topRadio).not.toBeChecked()

    fireEvent.click(controversialRadio)

    expect(newRadio).not.toBeChecked()
    expect(hotRadio).not.toBeChecked()
    expect(controversialRadio).toBeChecked()
    expect(topRadio).not.toBeChecked()

    fireEvent.click(topRadio)

    expect(newRadio).not.toBeChecked()
    expect(hotRadio).not.toBeChecked()
    expect(controversialRadio).not.toBeChecked()
    expect(topRadio).toBeChecked()
  })
})
