import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { RxChevronLeft } from 'react-icons/rx'
import { fetchProductById } from 'utils/fetchProductById'
import ProductDetails from '@components/ProductDetails'
import Button from '@components/Button'
import Text from '@components/Text'
import styles from './ProductPage.module.scss'
import ProductsCarousel from '@components/ProductsCarousel'

const ProductPage = ({ product }: PageProps) => {
  if (!product) return

  const router = useRouter()

  return (
    <div className={styles.Root}>
      <Button className={styles.Root__backButton} onClick={() => router.back()}>
        <div className={styles.Root__chevronWrapper}>
          <RxChevronLeft size={20} aria-hidden />
        </div>
        <Text element="p" size="xl">
          Back
        </Text>
      </Button>

      <div className={styles.Root__wrapper}>
        <ProductDetails product={product}></ProductDetails>
        <ProductsCarousel />
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
