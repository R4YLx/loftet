import { useDispatch } from 'react-redux'
import { addToCart } from '@redux/cartSlice'
import { toast } from 'react-toastify'
import { urlFor } from '@lib/sanity.config'
import Button from '@components/Button'
import Headline from '@components/Headline'
import Image from '@components/Image'
import Text from '@components/Text'
import SelectMenu from '@components/SelectMenu'
import ProductDetailsList from '@components/ProductDetailsList'
import { ProductDetailsProps } from './ProductDetails.types'
import styles from './ProductDetails.module.scss'

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch(addToCart(product))

    toast.success(`${product.title} has been added to your cart!`)
  }

  return (
    <div className={styles.Root}>
      <Image src={urlFor(product.image).url()} className={styles.Root__image} />

      <div className={styles.Root__wrapper}>
        <div className={styles.Root__titleAndPriceWrapper}>
          <Headline
            element="h2"
            size="md"
            className={styles.Root__productTitle}
          >
            {product.title}
          </Headline>

          <Headline element="h3" size="md">
            {product.price} SEK
          </Headline>
        </div>

        <Text element="p" size="xl" className={styles.Root__sizeText}>
          Size
        </Text>
        <div className={styles.Root__actionsWrapper}>
          <div className={styles.Root__selectWrapper}>
            <SelectMenu
              option={product.size.toUpperCase()}
              className={styles.Root__selectMenu}
            />
          </div>

          <Button block bgDark isFluid onClick={addItemToCart}>
            <Text element="p" size="xl" className={styles.Root__addText}>
              Add to cart
            </Text>
          </Button>
        </div>

        <ProductDetailsList product={product} />
      </div>
    </div>
  )
}

export default ProductDetails
