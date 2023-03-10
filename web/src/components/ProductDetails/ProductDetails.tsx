import { toast } from 'react-toastify'
import { useCartStore } from '@store/store'
import Button from '@components/Button'
import Headline from '@components/Headline'
import Text from '@components/Text'
import SelectMenu from '@components/SelectMenu'
import ProductDetailsList from '@components/ProductDetailsList'
import { ProductDetailsProps } from './ProductDetails.types'
import styles from './ProductDetails.module.scss'
import ImageCarousel from '@components/ImageCarousel'

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { addToCart } = useCartStore()

  const addItemToCart = () => {
    addToCart(product)
    toast.success(`${product.title} has been added to your cart!`)
  }

  return (
    <div className={styles.Root}>
      <ImageCarousel images={product.image} />

      <div className={styles.Root__wrapper}>
        <div className={styles.Root__titleAndPriceWrapper}>
          <Headline
            element="h2"
            size="md"
            className={styles.Root__productTitle}
          >
            {product.title}
          </Headline>

          {product.quantity <= 0 ? (
            <Headline
              element="h3"
              size="md"
              className={styles.Root__price_sold}
            >
              OUT OF STOCK
            </Headline>
          ) : (
            <Headline element="h3" size="md">
              {product.price} SEK
            </Headline>
          )}
        </div>

        <Text element="p" size="xl" className={styles.Root__sizeText}>
          Size
        </Text>
        <div className={styles.Root__actionsWrapper}>
          <div className={styles.Root__selectWrapper}>
            <SelectMenu
              sizeSelection
              option={product.size.toUpperCase()}
              className={styles.Root__selectMenu}
            />
          </div>

          <Button
            block
            bgDark
            isFluid
            aria-label="Add to cart"
            disabled={product.quantity <= 0}
            onClick={addItemToCart}
          >
            {product.quantity <= 0 ? (
              <Text element="p" size="xl" className={styles.Root__addText}>
                Out of stock
              </Text>
            ) : (
              <Text element="p" size="xl" className={styles.Root__addText}>
                Add to cart
              </Text>
            )}
          </Button>
        </div>

        <ProductDetailsList product={product} />
      </div>
    </div>
  )
}

export default ProductDetails
