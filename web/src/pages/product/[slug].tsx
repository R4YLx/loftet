import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { RxChevronLeft } from 'react-icons/rx'
import { fetchProductById } from 'utils/fetchProductById'
import { fetchSimilarProducts } from 'utils/fetchSimiliarProducts'
import ProductDetails from '@components/ProductDetails'
import Button from '@components/Button'
import Text from '@components/Text'
import ProductsCarousel from '@components/ProductsCarousel'
import styles from './ProductPage.module.scss'

const ProductPage = ({ product, similarProducts }: PageProps) => {
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
        {product && (
          <>
            <ProductDetails product={product}></ProductDetails>

            <ProductsCarousel products={similarProducts} />
          </>
        )}
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

  const productSubcategory = product.subcategory.slug.current

  const similarProducts = await fetchSimilarProducts(productSubcategory)

  return {
    props: {
      product,
      similarProducts
    }
  }
}
