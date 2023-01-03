interface PageProps {
  categories?: ICategory[]
  products?: IProduct[]
  product?: IProduct
  similarProducts?: IProduct[]
  lineItems?: IStripeProduct[]
  customer?: IStripeCustomer
}
