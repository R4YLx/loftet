import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useCartStore } from '@store/store'
import {
  fetchStripeLineItems,
  fetchStripeCustomerDetails
} from '@utils/stripeAPI'
import Headline from '@components/Headline'
import Divider from '@components/Divider'
import Text from '@components/Text'
import Table from '@components/Table'
import Button from '@components/Button'
import styles from './SuccessPage.module.scss'
import { patchProductQuantity } from '@utils/sanityAPI'

const SuccessPage = ({ lineItems, customer }: PageProps) => {
  const router = useRouter()
  const { session_id } = router.query
  const orderNumber = session_id?.slice(-10)
  const { cleanCart, itemsInCart } = useCartStore()

  useEffect(() => {
    patchProductQuantity(itemsInCart)

    cleanCart()
  }, [])

  return (
    <div className={styles.Root}>
      <header className={styles.Root__header}>
        <Headline element="h2" size="xl" className={styles.Root__headline}>
          It&apos;s ordered!
        </Headline>

        <Text element="p" size="xl">
          Hi {customer ? customer?.name.split(' ')[0] : 'friend'} - Thank you
          for your order, we hope you enjoyed shopping with us.
        </Text>
      </header>

      <Divider subtle />

      <main className={styles.Root__wrapper}>
        <section className={styles.Root__orderSection}>
          <Headline element="h4" size="sm">
            Order number: {orderNumber}
          </Headline>

          <Text element="p" size="lg">
            We&apos;ve sent the confirmation to {customer?.email}
          </Text>
        </section>

        <section className={styles.Root__productSection}>
          {lineItems && <Table items={lineItems} />}
        </section>

        <section className={styles.Root__deliverySection}>
          <div className={styles.Root__textContainer}>
            <Headline element="h4" size="sm">
              Your order is being shipped to:
            </Headline>

            <div className={styles.Root__customerDetails}>
              <Text element="p" size="lg">
                {customer?.name}
              </Text>

              <Text element="p" size="lg">
                {customer?.address.line1}
              </Text>
              <Text element="p" size="lg">
                {customer?.address.postal_code} {customer?.address.city}
              </Text>
              <Text element="p" size="lg">
                {customer?.address.country}
              </Text>
            </div>
          </div>

          <div className={styles.Root__textContainer}>
            <Headline element="h4" size="sm">
              Estimated time of delivery:
            </Headline>

            <Text element="p" size="lg">
              5-7 working days
            </Text>
          </div>
        </section>

        <div className={styles.Root__ctaWrapper}>
          <Button
            block
            bgDark
            isFluid
            onClick={() => router.push('/', undefined, { shallow: true })}
            className={styles.Root__CTA}
          >
            <Text element="p" size="lg">
              Continue shopping
            </Text>
          </Button>
        </div>
      </main>
    </div>
  )
}

export default SuccessPage

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  query
}) => {
  const sessionId = query.session_id as string
  const lineItems = await fetchStripeLineItems(sessionId)
  const customer = await fetchStripeCustomerDetails(sessionId)

  return {
    props: {
      lineItems,
      customer
    }
  }
}
