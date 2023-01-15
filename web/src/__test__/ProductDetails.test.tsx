import { render, screen, within } from '@testing-library/react'
import ProductDetails from '@components/ProductDetails'
import { mockedProduct } from '@utils/mockProducts'

it('renders Add to cart in button', () => {
  render(<ProductDetails product={mockedProduct} />)

  const { getByText } = within(
    screen.getByRole('button', { name: /Add to cart/i })
  )

  expect(getByText(/Add to cart/i)).toBeInTheDocument()
})
