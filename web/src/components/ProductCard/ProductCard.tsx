import Image from '@components/Image'
import Text from '@components/Text'
import styles from './ProductCard.module.scss'
import { IProductCard } from './ProductCard.types'

const ProductCard = ({
  imageSrc,
  title,
  size,
  price,
  ...rest
}: IProductCard) => {
  return (
    <div className={styles.Root} {...rest}>
      <div className={styles.Root__wrapper}>
        <Image src={imageSrc} className={styles.Root__image} />

        <Text element="p" size="xl">
          {title}
        </Text>

        <Text element="p" size="xl">
          Size: {size}
        </Text>

        <Text element="p" size="xl">
          {price} SEK
        </Text>
      </div>
    </div>
  )
}

export default ProductCard
