import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import CheckoutProductCard from '@components/CheckoutProductCard'

const products: IProduct[] = [
  {
    _createdAt: '2023-01-02T10:43:43Z',
    _id: '1cf08ab7-b043-4e21-8eac-3117ff35ef17',
    _rev: 'B4PIvYGv2UFUcg0RJkycEF',
    color: 'Light blue',
    condition: 'Good, very nice signs of wear',
    image: [
      {
        _key: '441caa6a3dd1',
        _type: 'image',
        asset: {
          url: 'https://cdn.sanity.io/images/testing/undefined/9cd112c12728d8ba6875d66b4492674d96b221d0-1134x1492.jpg'
        }
      },
      {
        _key: '1e9285dac333',
        _type: 'image',
        asset: {
          url: 'https://cdn.sanity.io/images/testing/undefined/1ffca655690166df106932801f2ea7c58dcccca6-1288x1716.jpg'
        }
      },
      {
        _key: '17cf4a3053b4',
        _type: 'image',
        asset: {
          url: 'https://cdn.sanity.io/images/testing/undefined/9d13e7a24be6e5c56cbb77979abd26730fa10899-1120x1492.jpg'
        }
      }
    ],
    item: "Vintage Levi's Lined Denim Trucker Jacket - Made in USA",
    material: '100% cotton/ 50% polyester, 50% acrylic',
    measurements:
      'Shoulders 51 cm / 20",\nChest 60 cm / 23.5",\nSleeves 65 cm / 25.5",\nBack 60 cm / 23.5"',
    price: 890,
    quantity: 1,
    size: 'M',
    slug: { _type: 'slug', current: '1cf08ab7-b043-4e21-8eac-3117ff35ef17' },
    title: "Vtg Levi's Lined Denim Trucker Jacket",
    _type: 'product',
    _updatedAt: '',
    categories: []
  }
]

describe('renders checkout products', () => {
  it('renders image', () => {
    // render
    render(<CheckoutProductCard products={products} />)

    // find
    const imageElement = document.querySelector('img') as HTMLImageElement

    // assert
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
    // render
    render(<CheckoutProductCard products={products} />)

    // find
    const titleElement = screen.getByText(
      /Vtg Levi's Lined Denim Trucker Jacket/i
    )

    // assert
    expect(titleElement).toBeInTheDocument()
  })

  it('renders size', () => {
    // render
    render(<CheckoutProductCard products={products} />)

    // find
    const sizeElement = screen.getByText(/Size: M/i)

    // assert

    expect(sizeElement).toBeInTheDocument()
  })

  it('renders price', () => {
    // render
    render(<CheckoutProductCard products={products} />)

    // find
    const priceElement = screen.getByText(/890/i)

    // assert

    expect(priceElement).toBeInTheDocument()
  })

  it('renders quantity', () => {
    // render
    render(<CheckoutProductCard products={products} />)

    // find
    const quantityElement = screen.getByText(/1/i)

    // assert

    expect(quantityElement).toBeInTheDocument()
  })

  it('Remove button renders correctly', async () => {
    // render
    render(<CheckoutProductCard products={products} />)

    // find
    const removeBtnElement = screen.getByRole('button')

    // interact
    await userEvent.click(removeBtnElement)

    // assert
    expect(removeBtnElement).toBeInTheDocument()
  })
})
