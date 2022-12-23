import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'

export const fetchCategories = async () => {
  const query = groq`*[_type == "category"]{
    _id,
    title,
    slug,
    "subcategory": *[_type == "subcategory" && references(^._id)]
  }`

  const categories: Category[] = await sanityClient.fetch(query)

  console.log('categories', categories)

  return categories
}
