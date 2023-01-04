import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

export const fetchStripeCustomerDetails = async (sessionId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getStripeSession?session_id=${sessionId}`
  )

  if (!res.ok) return

  const data = await res.json()
  const customer = data.customer.customer_details

  return customer
}

export const fetchStripeLineItems = async (sessionId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getStripeSession?session_id=${sessionId}`
  )

  if (!res.ok) return

  const data = await res.json()
  const products = data.session.data

  return products
}
