import { ProductsCarouselProps } from './ProductsCarousel.types'
import styles from './ProductsCarousel.module.scss'
import ProductCard from '@components/ProductCard'

const ProductsCarousel = ({ products }: ProductsCarouselProps) => {
  return (
    <div className={styles.Root}>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product._id}
            slug={product.slug.current}
            image={product.image}
            item={product.item}
            size={product.size}
            price={product.price}
          />
        ))}
    </div>
  )
}

export default ProductsCarousel
