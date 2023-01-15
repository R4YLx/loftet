import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import CheckoutProductCard from '@components/CheckoutProductCard'
import { mockedProducts } from '@utils/mockProducts'

describe('renders checkout products', () => {
  it('renders image', async () => {
    render(<CheckoutProductCard products={mockedProducts} />)

    const imageElement = screen.getByRole('img') as HTMLImageElement

    await waitFor(() => {
      expect(imageElement).toHaveAttribute(
        'src',
        '/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftesting%2Fundefined%2FTb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000.jpg&w=3840&q=75'
      )
      expect(imageElement).toHaveAttribute('alt', mockedProducts[0].title)
    })
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
