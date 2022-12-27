import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'

export const fetchProductBySubcategory = async (subcategory: string) => {
  const query = groq`*[_type == "products" && references(*[_type=="subcategories" && slug.current == ${subcategory}]._id)]`

  const product: Product = await sanityClient.fetch(query)

  return product
}
