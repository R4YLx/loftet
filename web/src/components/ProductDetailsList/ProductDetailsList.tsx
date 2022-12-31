import { textToArray } from 'helpers/textToArray'
import Divider from '@components/Divider'
import Headline from '@components/Headline'
import Text from '@components/Text'
import { ProductDetailsListProps } from './ProductDetailsList.types'
import styles from './ProductDetailsList.module.scss'

const ProductDetailsList = ({ product }: ProductDetailsListProps) => {
  return (
    <div className={styles.Root}>
      <Divider className={styles.Root__mobileDivider} />

      <Headline element="h4" size="sm" className={styles.Root__detailsHeadline}>
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
  )
}

export default ProductDetailsList
