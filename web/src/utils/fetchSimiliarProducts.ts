export const fetchSimilarProducts = async (
  productId: string,
  subcategory: string
): Promise<IProduct[]> => {
  const query = encodeURIComponent(
    `*[_type == "products" 
    && _id != "${productId}"
    && references(*[_type=="subcategories" 
    && slug.current == "${subcategory}"]._id)][0...10]`
  )
  const url = `${process.env.SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const products: IProduct[] = data.result

  return products
}
