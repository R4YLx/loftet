import ProductCard from '@components/ProductCard'
import Headline from '@components/Headline'
import { ProductsCarouselProps } from './ProductsCarousel.types'
import styles from './ProductsCarousel.module.scss'

const ProductsCarousel = ({ products }: ProductsCarouselProps) => {
  return (
    <div className={styles.Root}>
      <Headline element="h5" size="sm">
        You may also like
      </Headline>
      <div className={styles.Root__wrapper}>
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default ProductsCarousel
