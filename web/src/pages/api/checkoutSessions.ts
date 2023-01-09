import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { urlFor } from '@lib/sanity.config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15'
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const items: IProduct[] = req.body.items

    const transformedItems = items.map((item) => ({
      price_data: {
        currency: 'sek',
        product_data: {
          name: item.title,
          images: [urlFor(item.image[0]).url()]
        },
        unit_amount: item.price * 100
      },
      quantity: 1
    }))

    try {
      // Create Checkout Sessions from body params
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card', 'klarna'],
        shipping_address_collection: { allowed_countries: ['SE'] },
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: { amount: 0, currency: 'sek' },
              display_name: 'Free shipping',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 5 },
                maximum: { unit: 'business_day', value: 7 }
              }
            }
          }
        ],
        phone_number_collection: {
          enabled: true
        },
        line_items: transformedItems,
        payment_intent_data: {},
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
        metadata: {
          images: JSON.stringify(items.map((item) => item.image[0].asset.url))
        }
      }
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params)

      res.status(200).json(checkoutSession)
    } catch (err) {
      console.log(err)
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
