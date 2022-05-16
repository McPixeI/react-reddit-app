
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Image } from './Image'
import fallbackImg from '../../../assets/img/fallbackImg.jpg'

describe('Image', () => {
  it('Should render without errors', () => {
    render(<Image src='fake-src' alt='test' />)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('Should show fallback image on error', async () => {
    render(<Image src='fake-src' alt='test' />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'fake-src')
    fireEvent.error(image)
    expect(image).toHaveAttribute('src', fallbackImg)
  })
})
