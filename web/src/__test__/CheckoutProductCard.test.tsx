import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import CheckoutProductCard from '@components/CheckoutProductCard'
import { mockedProducts } from '@utils/mockProducts'

describe('renders checkout products', () => {
  it('renders image', () => {
    render(<CheckoutProductCard products={mockedProducts} />)

    const imageElement = document.querySelector('img') as HTMLImageElement

    expect(imageElement).toHaveAttribute(
      'src',
      'https://cdn.sanity.io/images/testing/undefined/9cd112c12728d8ba6875d66b4492674d96b221d0-1134x1492.jpg'
    )
    expect(imageElement).toHaveAttribute(
      'alt',
      "Vtg Levi's Lined Denim Trucker Jacket"
    )
  })

  it('renders title', () => {
    render(<CheckoutProductCard products={mockedProducts} />)

    const titleElement = screen.getByText(
      /Vtg Levi's Lined Denim Trucker Jacket/i
    )

    expect(titleElement).toBeInTheDocument()
  })

  it('renders size', () => {
    render(<CheckoutProductCard products={mockedProducts} />)

    const sizeElement = screen.getByText(/Size: M/i)

    expect(sizeElement).toBeInTheDocument()
  })

  it('renders price', () => {
    render(<CheckoutProductCard products={mockedProducts} />)

    const priceElement = screen.getByText(/890/i)

    expect(priceElement).toBeInTheDocument()
  })

  it('renders quantity', () => {
    render(<CheckoutProductCard products={mockedProducts} />)

    const quantityElement = screen.getByText(/1/i)

    expect(quantityElement).toBeInTheDocument()
  })

  it('Remove button renders correctly', async () => {
    render(<CheckoutProductCard products={mockedProducts} />)

    const removeBtnElement = screen.getByRole('button')

    await userEvent.click(removeBtnElement)

    expect(removeBtnElement).toBeInTheDocument()
  })
})
