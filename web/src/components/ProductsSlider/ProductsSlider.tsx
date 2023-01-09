import ProductCard from '@components/ProductCard'
import Headline from '@components/Headline'
import { ProductsSliderProps } from './ProductsSlider.types'
import styles from './ProductsSlider.module.scss'

const ProductsSlider = ({ products }: ProductsSliderProps) => {
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

export default ProductsSlider
