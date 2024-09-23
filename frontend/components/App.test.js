// Write your tests here
import React from 'react'
import { screen, render } from '@testing-library/react'
import AppFunctional from './AppFunctional'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


describe('AppFunctional Component', () => {
  beforeEach(() => {
    render(<AppFunctional />)
  })
  test('1 renders coordinates and movement correctly', () => {
    expect(screen.getByText('Coordinates (2, 2)')).toBeInTheDocument()
    expect(screen.getByText('You moved 0 times')).toBeInTheDocument()
   })
   test('2 make sure all directional buttons are on screen', async () => {
    expect(screen.getByText('UP')).toBeInTheDocument()
    expect(screen.getByText('DOWN')).toBeInTheDocument()
    expect(screen.getByText('LEFT')).toBeInTheDocument()
    expect(screen.getByText('RIGHT')).toBeInTheDocument()
    expect(screen.getByText('reset')).toBeInTheDocument()
   })
   test('3 prevent moving out of bounds and display error message', async () => {
    const upButton = screen.getByText('UP')
    await userEvent.click(upButton) 
    await userEvent.click(upButton)  
    expect(screen.getByText("You can't go up")).toBeInTheDocument() 
  })
  test('4 form submission without email shows an error message', async () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' })  
    await userEvent.click(submitButton)  
  
    expect(screen.getByText('Ouch: email is required.')).toBeInTheDocument()  
  })
  test('5 form submission with valid email shows success message', async () => {
    const emailInput = screen.getByPlaceholderText('type email')
    await userEvent.type(emailInput, 'Ajani@Maragh.com')
    const submitButton = screen.getByRole('button', {name: 'Submit'})
    await userEvent.click(submitButton)
    const successMessage = await screen.findByText("Ajani win #28")
    expect(successMessage).toBeInTheDocument()
    screen.debug()
  })
  })
