interface IProduct {
  _createdAt: string
  _id: string
  _rev: string
  _type: 'product'
  _updatedAt: string
  categories: ICategory[]
  color: string
  condition: string
  image: IImage
  item: string
  material: string
  measurements: string
  price: number
  size: string
  slug: {
    _type: 'slug'
    current: string
  }
  title: string
  quantity: number
}

interface IImage {
  _key: string
  _type: 'image'
  asset: {
    url: string
  }
}
