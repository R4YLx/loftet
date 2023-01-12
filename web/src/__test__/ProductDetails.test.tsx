import { render, screen, within } from '@testing-library/react'
import ProductDetails from '@components/ProductDetails'
import {
  mockedAvailableProduct,
  mockedUnavailableProduct
} from '@utils/mockProducts'

it('renders Add to cart in button', () => {
  render(<ProductDetails product={mockedAvailableProduct} />)

  const { getByText } = within(
    screen.getByRole('button', { name: /Add to cart/i })
  )

  expect(getByText(/Add to cart/i)).toBeInTheDocument()
})

it('disables button if product is not available', () => {
  render(<ProductDetails product={mockedUnavailableProduct} />)

  const { getByText } = within(
    screen.getByRole('button', { name: /Out of stock/i })
  )

  expect(getByText(/Out of stock/i)).toBeInTheDocument()

  expect(getByText(/Out of stock/i).closest('button')).toBeDisabled()

  expect
})
