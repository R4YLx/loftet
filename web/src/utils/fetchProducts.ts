export const fetchProducts = async (): Promise<Product[]> => {
  const query =
    encodeURIComponent(`*[_type == "products"] | order(_createdAt desc){
    ...
   }`)
  const url = `${process.env.SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const products: Product[] = data.result

  return products
}
