import { urlFor } from '@lib/sanity.config'
import Button from '@components/Button'
import Divider from '@components/Divider'
import Headline from '@components/Headline'
import Image from '@components/Image'
import Text from '@components/Text'

import { ProductDetailsProps } from './ProductDetails.types'
import styles from './ProductDetails.module.scss'
import DropdownMenu from '@components/DropdownMenu/DropdownMenu'

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className={styles.Root}>
      <Image src={urlFor(product.image).url()} isFluid />

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

        <DropdownMenu />

        <Button block bgDark isFluid>
          <Text element="p" size="xl">
            Add to cart
          </Text>
        </Button>

        <div className={styles.Root__detailsWrapper}>
          <Divider />

          <Headline
            element="h4"
            size="sm"
            className={styles.Root__detailsHeadline}
          >
            Product details
          </Headline>

          <div className={styles.Root__listWrapper}>
            <div className={styles.Root__listWrapper__item}>
              <Text element="p" size="xl">
                Item:
              </Text>
              <Text element="p" size="xl">
                {product.item}
              </Text>
            </div>

            <div className={styles.Root__listWrapper__item}>
              <Text element="p" size="xl">
                Material:
              </Text>
              <Text element="p" size="xl">
                {product.material}
              </Text>
            </div>

            <div className={styles.Root__listWrapper__item}>
              <Text element="p" size="xl">
                Color:
              </Text>
              <Text element="p" size="xl">
                {product.color}
              </Text>
            </div>

            <div className={styles.Root__listWrapper__item}>
              <Text element="p" size="xl">
                Condition:
              </Text>
              <Text element="p" size="xl">
                {product.condition}
              </Text>
            </div>
          </div>

          <Divider />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
