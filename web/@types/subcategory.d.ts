interface ISubcategory {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'subcategory'
  slug: {
    _type: 'slug'
    current: string
  }
  title: string
}
