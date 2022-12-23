import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'
import type { NextApiRequest, NextApiResponse } from 'next'

const query = groq`*[_type == "category"]{
  _id,
  title,
  slug,
  "subcategory": *[_type == "subcategory" && references(^._id)].title
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoryData>
) {
  const categories = await sanityClient.fetch(query)

  res.status(200).json({ categories })
}
