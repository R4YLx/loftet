export const fetchProductsByCategory = async (
  slug: string
): Promise<IProduct> => {
  const query = encodeURIComponent(
    `*[_type == "products" 
    && references(*[_type=="categories" 
    && slug.current == "${slug}"]._id)]
`
  )
  const url = `${process.env.SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const product: IProduct = data.result

  return product
}
