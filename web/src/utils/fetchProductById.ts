import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'

export const fetchProductById = async (slug: string) => {
  const query = groq`*[_type == "products" && _id == "${slug}"][0]`

  const product: Product = await sanityClient.fetch(query)

  return product
}
