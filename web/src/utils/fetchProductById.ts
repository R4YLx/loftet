export const fetchProductById = async (slug: string): Promise<Product> => {
  const query = encodeURIComponent(
    `*[_type == "products" && _id == "${slug}"][0]`
  )
  const url = `${process.env.SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const product: Product = data.result

  return product
}
