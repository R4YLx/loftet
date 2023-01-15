import { render, screen, waitFor } from '@testing-library/react'
import ProductCard from '@components/ProductCard'
import { mockedProduct } from '@utils/mockProducts'

describe('renders details', () => {
  it('renders image', async () => {
    render(<ProductCard product={mockedProduct} />)

    const imageElement = screen.getByRole('img') as HTMLImageElement

    await waitFor(() => {
      expect(imageElement).toHaveAttribute(
        'src',
        '/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftesting%2Fundefined%2FTb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000.jpg&w=3840&q=75'
      )
      expect(imageElement).toHaveAttribute('alt', mockedProduct.title)
    })
  })

  it('renders title', () => {
    render(<ProductCard product={mockedProduct} />)

    const titleElement = screen.getByText(
      /Vtg Levi's Lined Denim Trucker Jacket/i
    )
    expect(titleElement).toBeInTheDocument()
  })

  it('renders price', () => {
    render(<ProductCard product={mockedProduct} />)

    const priceElement = screen.getByText(/890/i)
    expect(priceElement).toBeInTheDocument()
  })
})
