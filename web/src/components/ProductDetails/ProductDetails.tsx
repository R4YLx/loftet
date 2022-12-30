import { urlFor } from '@lib/sanity.config'
import { textToArray } from 'helpers/textToArray'
import Button from '@components/Button'
import Divider from '@components/Divider'
import Headline from '@components/Headline'
import Image from '@components/Image'
import Text from '@components/Text'
import SelectMenu from '@components/SelectMenu'

import { ProductDetailsProps } from './ProductDetails.types'
import styles from './ProductDetails.module.scss'

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

        <div className={styles.Root__actionsWrapper}>
          <div className={styles.Root__selectWrapper}>
            <Text element="p" size="xl">
              Size
            </Text>
            <SelectMenu
              value={product.size.toUpperCase()}
              className={styles.Root__selectMenu}
            />
          </div>

          <Button block bgDark isFluid>
            <Text element="p" size="xl">
              Add to cart
            </Text>
          </Button>
        </div>

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

            {product.measurements && (
              <div className={styles.Root__listWrapper__item}>
                <Text element="p" size="xl">
                  Measurements:
                </Text>

                {textToArray(product.measurements).map((length, i) => (
                  <Text element="p" size="xl" key={i}>
                    {length}
                  </Text>
                ))}
              </div>
            )}
          </div>

          <Divider />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
