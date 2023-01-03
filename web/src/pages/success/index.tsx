import { GetServerSideProps } from 'next'
import { fetchStripeLineItems } from '@utils/fetchStripeLineItems'

import styles from './SuccessPage.module.scss'

const SuccessPage = () => {
  return <div className={styles.Root}>SuccessPage</div>
}

export default SuccessPage

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string
  const products = await fetchStripeLineItems(sessionId)

  console.log('products', products)

  return {
    props: {
      products
    }
  }
}
