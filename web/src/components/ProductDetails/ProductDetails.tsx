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
              value={product.size.toUpperCase()}
              className={styles.Root__selectMenu}
            />
          </div>

          <Button block bgDark isFluid>
            <Text element="p" size="xl" className={styles.Root__addText}>
              Add to cart
            </Text>
          </Button>
        </div>

        <div className={styles.Root__detailsWrapper}>
          <Divider className={styles.Root__mobileDivider} />

          <Headline
            element="h4"
            size="sm"
            className={styles.Root__detailsHeadline}
          >
            Product details
          </Headline>

          <Divider className={styles.Root__mdScreenDivider} />

          <div className={styles.Root__listWrapper}>
            <div className={styles.Root__listWrapper__item}>
              <Text element="p" size="lg">
                Item:
              </Text>
              <Text element="p" size="lg">
                {product.item}
              </Text>
            </div>

            <div className={styles.Root__listWrapper__item}>
              <Text element="p" size="lg">
                Material:
              </Text>
              <Text element="p" size="lg">
                {product.material}
              </Text>
            </div>

            <div className={styles.Root__listWrapper__item}>
              <Text element="p" size="lg">
                Color:
              </Text>
              <Text element="p" size="lg">
                {product.color}
              </Text>
            </div>

            <div className={styles.Root__listWrapper__item}>
              <Text element="p" size="lg">
                Condition:
              </Text>
              <Text element="p" size="lg">
                {product.condition}
              </Text>
            </div>

            {product.measurements && (
              <div className={styles.Root__listWrapper__item}>
                <Text element="p" size="lg">
                  Measurements:
                </Text>

                {textToArray(product.measurements).map((length, i) => (
                  <Text element="p" size="lg" key={i}>
                    {length}
                  </Text>
                ))}
              </div>
            )}
          </div>

          <Divider className={styles.Root__mobileDivider} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
