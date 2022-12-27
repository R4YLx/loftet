import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'

export const fetchProductByCategory = async (category: string) => {
  const query = groq`*[_type == "products"]`

  const product: Product = await sanityClient.fetch(query)

  return product
}
