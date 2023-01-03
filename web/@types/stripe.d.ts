interface IStripeCustomer {
  address: {
    country: string
    city: string
    line1: string
    line2: string | null
    postal_code: string
    state: string | null
  }
  email: string
  name: string
  phone: string
}

interface IStripeProduct {
  id: string
  amount_discount: number
  amount_subtotal: number
  amount_tax: number
  amount_total: number
  currency: string
  description: string
  object: string
  quantity: number
  price: {
    unit_amount: number
  }
}
