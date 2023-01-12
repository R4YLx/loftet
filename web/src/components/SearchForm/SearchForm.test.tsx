import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'
import SearchForm from './SearchForm'

// useRouter mocking
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

const pushMock = jest.fn()

// mock a return value on useRouter
useRouter.mockReturnValue({
  query: {},
  push: pushMock
})

it('renders empty input field initially', () => {
  render(<SearchForm />)

  const inputElement = screen.getByRole('textbox') as HTMLInputElement

  expect(inputElement.value).toBe('')
})

it('user can type in input field', async () => {
  render(<SearchForm />)

  const inputElement = screen.getByRole('textbox') as HTMLInputElement

  await userEvent.type(inputElement, 'military')

  expect(inputElement.value).toBe('military')
})

it('searching product on <enter> and re-routes', async () => {
  render(<SearchForm />)

  const inputElement = screen.getByRole('textbox') as HTMLInputElement

  await userEvent.type(inputElement, 'military')
  await userEvent.type(inputElement, '{Enter}')

  expect(inputElement.value).toBe('')
  useRouter.mockReturnValue({ query: { result: 'military' } })
})
