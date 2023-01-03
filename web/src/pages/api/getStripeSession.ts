import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe: Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessionId = req.query.session_id as string

  const session = await stripe.checkout.sessions.listLineItems(sessionId)
  const customer = await stripe.checkout.sessions.retrieve(sessionId)

  res.status(200).json({
    session,
    customer
  })
}
