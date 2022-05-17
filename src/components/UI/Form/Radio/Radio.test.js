import { render, screen } from '@testing-library/react'
import { Radio } from './Radio'

const mockFn = jest.fn()

const setup = () => {
  const utils = render(
    <>
      <Radio
        value='test'
        selected='test'
        onChange={evt => mockFn}
      />
      <Radio
        value='test-2'
        selected='test'
        onChange={evt => mockFn}
      />
    </>
  )
  const radioOne = screen.getByLabelText('test')
  const radioTwo = screen.getByLabelText('test-2')
  return {
    radioOne,
    radioTwo,
    ...utils
  }
}

describe('Radio', () => {
  it('Should render without crashing', () => {
    const { radioOne, radioTwo } = setup()
    expect(radioOne).toBeInTheDocument()
    expect(radioTwo).toBeInTheDocument()
  })

  it('Should be checked if value matches selected', () => {
    const { radioOne } = setup()
    expect(radioOne).toBeChecked()
  })

  it('Should be NOT checked if value matches selected', () => {
    const { radioTwo } = setup()
    expect(radioTwo).not.toBeChecked()
  })
})
