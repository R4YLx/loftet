import { toast } from 'react-toastify'
import { urlFor } from '@lib/sanity.config'
import { useCartStore } from '@store/store'
import Button from '@components/Button'
import Headline from '@components/Headline'
import Image from '@components/Image'
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
      {/* <Image
        src={urlFor(product.image[0]).url()}
        className={styles.Root__image}
      /> */}

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
            <Headline element="h3" size="md">
              SOLD OUT
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
            disabled={product.quantity <= 0}
            onClick={addItemToCart}
          >
            {product.quantity <= 0 ? (
              <Text element="p" size="xl" className={styles.Root__addText}>
                Sold out
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
