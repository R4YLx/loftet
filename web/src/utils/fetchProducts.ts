import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'

export const fetchProducts = async () => {
  const query = groq`*[_type == "products"] | order(_createdAt desc){
   ...
  }`

  const products: Product[] = await sanityClient.fetch(query)

  return products
}
