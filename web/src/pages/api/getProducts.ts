import { groq } from 'next-sanity'
import { sanityClient } from '@lib/sanity.config'
import type { NextApiRequest, NextApiResponse } from 'next'

const query = groq`*[_type == "product"]{
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductData>
) {
  const products = await sanityClient.fetch(query)

  res.status(200).json({ products })
}
