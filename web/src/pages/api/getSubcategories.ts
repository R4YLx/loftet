import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'
import type { NextApiRequest, NextApiResponse } from 'next'

const query = groq`*[_type == "subcategory"] {
  _id,
  slug,
  title,
  category
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubcategoryData>
) {
  const subcategories = await sanityClient.fetch(query)

  res.status(200).json({ subcategories })
}
