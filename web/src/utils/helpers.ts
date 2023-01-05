export const textToArray = (text: string) => {
  const result = text.split(',')
  return result
}

export const categories = [
  {
    id: 1,
    title: 'Jackets',
    slug: 'jackets',
    value: 'category-1',
    subcategories: [
      { id: 1, title: 'All jackets', slug: 'jackets' },
      { id: 2, title: 'Military jackets', slug: 'military-jackets' },
      { id: 3, title: 'Sports jackets', slug: 'sports-jackets' },
      { id: 4, title: 'Workwear jackets', slug: 'workwear-jackets' },
      { id: 5, title: 'Denim jackets', slug: 'denim-jackets' }
    ]
  },
  {
    id: 2,
    title: 'Shirts',
    slug: 'shirts',
    value: 'category-2',
    subcategories: [
      { id: 1, title: 'All shirts', slug: 'shirts' },
      { id: 2, title: 'Military shirts', slug: 'military-shirts' },
      { id: 3, title: 'Casual shirts', slug: 'casual-shirts' },
      { id: 4, title: 'Workwear shirts', slug: 'workwear-shirts' }
    ]
  },
  {
    id: 3,
    title: 'Tops',
    slug: 'tops',
    value: 'category-3',
    subcategories: [
      { id: 1, title: 'All tops', slug: 'tops' },
      { id: 2, title: 'T-shirts', slug: 't-shirts' },
      {
        id: 3,
        title: 'Sweatshirts & Hoodies',
        slug: 'sweatshirts-and-hoodies'
      },
      { id: 4, title: 'Knitwear', slug: 'knitwear' }
    ]
  },
  {
    id: 4,
    title: 'Trousers',
    slug: 'trousers',
    value: 'category-4',
    subcategories: [
      { id: 1, title: 'All trousers', slug: 'trousers' },
      { id: 2, title: 'Military trousers', slug: 'military-trousers' },
      { id: 3, title: 'Shorts', slug: 'shorts' },
      { id: 4, title: 'Denim trousers', slug: 'denim-trousers' }
    ]
  },
  {
    id: 5,
    title: 'Denim',
    slug: 'denim',
    value: 'category-5',
    subcategories: [
      { id: 1, title: 'All denim', slug: 'denim' },
      { id: 2, title: 'Denim trousers', slug: 'denim-trousers' },
      { id: 3, title: 'Denim jackets', slug: 'denim-jackets' }
    ]
  },
  {
    id: 6,
    title: 'Military',
    slug: 'military',
    value: 'category-6',
    subcategories: [
      { id: 1, title: 'All military', slug: 'military' },
      { id: 2, title: 'Military jackets', slug: 'military-jackets' },
      { id: 3, title: 'Military shirts', slug: 'military-shirts' },
      { id: 4, title: 'Military trousers', slug: 'military-trousers' }
    ]
  }
]

export const sortLowToHigh = (products: IProduct[]) => {
  const copy = [...products]

  copy.sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))

  return copy
}

export const sortHighToLow = (products: IProduct[]) => {
  const copy = [...products]

  copy.sort((a, b) => (a.price < b.price ? 1 : a.price > b.price ? -1 : 0))

  return copy
}

export const sortNewToOld = (products: IProduct[]) => {
  const copy = [...products]

  copy.sort((a, b) =>
    a._createdAt > b._createdAt ? 1 : b._createdAt > a._createdAt ? -1 : 0
  )

  return copy
}

export const setDefault = (products: IProduct[]) => {
  const copy = [...products]

  copy.sort((a, b) =>
    a._updatedAt > b._updatedAt ? 1 : b._updatedAt > a._updatedAt ? -1 : 0
  )

  return copy
}
