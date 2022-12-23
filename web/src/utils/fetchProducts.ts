import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'

export const fetchProducts = async () => {
  const query = groq`*[_type == "product"] | order(_createdAt asc){
    _id,
    color,
    condition,
    image,
    item,
    material,
    measurements,
    price,
    size,
    slug,
    subcategory,
    title
  }`

  const products: Product[] = await sanityClient.fetch(query)

  return products
}
