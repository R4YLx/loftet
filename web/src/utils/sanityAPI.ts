export const fetchProducts = async (lastest?: string): Promise<IProduct[]> => {
  const query = encodeURIComponent(
    `*[_type == "products"] | order(_createdAt desc)${
      lastest ? '[0..11]' : ''
    }{...,
        subcategory->{
          slug,
          title,
          category[]->{
            slug,
            title
          }
        }
      }`
  )
  const url = `${process.env.NEXT_PUBLIC_SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const products: IProduct[] = data.result

  return products
}

export const fetchProductById = async (slug: string): Promise<IProduct> => {
  const query = encodeURIComponent(
    `*[_type == "products" && _id == "${slug}"][0]{
        ...,
        categories[]->{
          slug
        }
      }`
  )
  const url = `${process.env.NEXT_PUBLIC_SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const product: IProduct = data.result

  return product
}

export const fetchSimilarProducts = async (
  productId: string,
  category: string
): Promise<IProduct[]> => {
  const query = encodeURIComponent(
    `*[_type == "products" 
      && _id != "${productId}"
      && references(*[_type=="categories" 
      && slug.current == "${category}"]._id)][0...9]`
  )
  const url = `${process.env.NEXT_PUBLIC_SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const products: IProduct[] = data.result

  return products
}

export const fetchProductsByCategory = async (
  slug: string
): Promise<IProduct[]> => {
  const query = encodeURIComponent(
    `*[_type == "products" 
      && references(*[_type=="categories" 
      && slug.current == "${slug}"]._id)]
  `
  )

  const url = `${process.env.NEXT_PUBLIC_SANITY_API_URL}query=${query}`

  const data = await fetch(url).then((res) => res.json())

  const products: IProduct[] = data.result

  return products
}
