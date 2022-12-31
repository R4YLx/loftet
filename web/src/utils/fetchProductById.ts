export const fetchProductById = async (slug: string): Promise<IProduct> => {
  const query = encodeURIComponent(
    `*[_type == "products" && _id == "${slug}"][0]{
      ...,
      subcategory->{
        slug
      }
    }`
  )
  const url = `${process.env.SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const product: IProduct = data.result

  return product
}
