interface Category {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'category'
  uid: number
  slug: {
    _type: 'slug'
    current: string
  }
  title: string
}

interface CategoryData {
  categories: Category[]
}
