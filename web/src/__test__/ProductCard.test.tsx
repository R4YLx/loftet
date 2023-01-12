import { render, screen } from '@testing-library/react'
import ProductCard from '@components/ProductCard'
import { mockedAvailableProduct } from '@utils/mockProducts'

describe('renders details', () => {
  it('renders image', () => {
    render(<ProductCard product={mockedAvailableProduct} />)

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
    render(<ProductCard product={mockedAvailableProduct} />)

    const titleElement = screen.getByText(
      /Vtg Levi's Lined Denim Trucker Jacket/i
    )
    expect(titleElement).toBeInTheDocument()
  })

  it('renders price', () => {
    render(<ProductCard product={mockedAvailableProduct} />)

    const priceElement = screen.getByText(/890/i)
    expect(priceElement).toBeInTheDocument()
  })
})
