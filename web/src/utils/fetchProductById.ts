import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'

export const fetchProductById = async (id: string) => {
  const query = groq`*[_type == "products" && _id == ${id}]{
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
    title
  }`

  const product: Product = await sanityClient.fetch(query)

  return product
}
