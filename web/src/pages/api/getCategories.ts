import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity.config'
import type { NextApiRequest, NextApiResponse } from 'next'

const query = groq`*[_type == "category"] {
  _id,
  slug,
  title
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoryData>
) {
  const categories = await sanityClient.fetch(query)

  res.status(200).json({ categories })
}
