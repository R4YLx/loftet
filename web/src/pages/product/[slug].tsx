import ProductDetails from '@components/ProductDetails'
import { GetServerSideProps } from 'next'
import { fetchProductById } from 'utils/fetchProductById'
import styles from './ProductPage.module.scss'

const ProductPage = ({ product }: PageProps) => {
  console.log('product', product)

  return (
    <div className={styles.Root}>
      <div className={styles.Root__wrapper}>
        <ProductDetails></ProductDetails>
      </div>
    </div>
  )
}

export default ProductPage

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const pageSlug = String(context.query.slug)

  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const product = await fetchProductById(pageSlug)

  return {
    props: {
      product
    }
  }
}
