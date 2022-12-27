import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'

export const fetchCategories = async () => {
  const query = groq`*[_type == "categories"]{
    _id,
    title,
    slug,
    subcategories[]->{
      _id,
      slug,
      title
    }
  }`

  const categories: Category[] = await sanityClient.fetch(query)

  console.log('categories', categories)

  return categories
}
