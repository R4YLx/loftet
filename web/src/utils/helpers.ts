export const textToArray = (text: string) => {
  const result = text.split(',')
  return result
}

export const filterBySubcategory = (products: IProduct[], slug: string) => {
  const filtered = products?.filter(
    (product) => product.subcategory.slug.current === slug
  )

  return filtered
}
