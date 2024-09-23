// Write your tests here
import React from 'react'
import { screen, render } from '@testing-library/react'
import AppFunctional from './AppFunctional'
import '@testing-library/jest-dom'


describe('AppFunctional Component', () => {
  beforeEach(() => {
    render(<AppFunctional />)
  })
  test('renders all the text elements correctly', () => {
    expect(screen.getByText('Coordinates (2, 2)')).toBeInTheDocument()
    expect(screen.getByText('You moved 0 times')).toBeInTheDocument()
    expect(screen.getByText('UP')).toBeInTheDocument()
    expect(screen.getByText('DOWN')).toBeInTheDocument()
    expect(screen.getByText('LEFT')).toBeInTheDocument()
    expect(screen.getByText('RIGHT')).toBeInTheDocument()
    expect(screen.getByText('reset')).toBeInTheDocument()
  })
})
