import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'

export const fetchProductById = async (productId: string) => {
  const query = groq`*[_type == "products" && _id == ${productId}]{
  ...
  }`

  const product: Product = await sanityClient.fetch(query)

  return product
}
