import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { fetchStripeLineItems } from '@utils/fetchStripeLineItems'
import Headline from '@components/Headline'
import Divider from '@components/Divider'
import styles from './SuccessPage.module.scss'
import Text from '@components/Text'
import { fetchStripeCustomerDetails } from '@utils/fetchStripeCustomerDetails'

const SuccessPage = ({ lineItems, customer }: PageProps) => {
  console.log('lineItems', lineItems)
  console.log('customer', customer)

  const router = useRouter()
  const { session_id } = router.query
  const orderNumber = session_id?.slice(-5)

  return (
    <div className={styles.Root}>
      <header className={styles.Root__header}>
        <Headline element="h2" size="xl">
          It&apos;s ordered!
        </Headline>

        <Text element="p" size="xl">
          Thank you for your order, we hope you enjoyed shopping with us.
        </Text>
      </header>

      <Divider subtle />

      <main>
        <section></section>

        {lineItems &&
          lineItems.map((lineItem) => <div key={lineItem.id}></div>)}
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

  console.log('customer', customer)

  return {
    props: {
      lineItems,
      customer
    }
  }
}
