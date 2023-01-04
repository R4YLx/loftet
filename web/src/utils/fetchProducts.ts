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
  const url = `${process.env.SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const products: IProduct[] = data.result

  return products
}
