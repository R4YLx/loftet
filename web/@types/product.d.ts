interface Product {
  _createdAt: string
  _id: string
  _rev: string
  _type: 'product'
  _updatedAt: string
  color: string
  condition: string
  image: Image[]
  item: string
  material: string
  measurements: string
  price: number
  size: Size
  slug: {
    _type: 'slug'
    current: string
  }
  subcategory: Subcategory[]
  title: string
}

interface Image {
  _key: string
  _type: 'image'
  asset: {
    url: string
  }
}

interface Size {
  _ref: string
  _type: 'reference'
}

interface ProductData {
  products: Product[]
}
