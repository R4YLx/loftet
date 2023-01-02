import { urlFor } from '@lib/sanity.config'
import { RxTrash } from 'react-icons/rx'
import Headline from '@components/Headline'
import Image from '@components/Image'
import Text from '@components/Text'
import { CheckoutProductCardProps } from './CheckoutProductCard.types'
import styles from './CheckoutProductCard.module.scss'
import Button from '@components/Button'

const CheckoutProductCard = ({ products }: CheckoutProductCardProps) => {
  const product = products[0]

  const builtImg = urlFor(product.image).url()

  console.log('product', products)

  return (
    <div className={styles.Root}>
      <Image src={builtImg} className={styles.Root__image} />

      <div className={styles.Root__detailsContainer}>
        <Headline element="h3" size="sm" className={styles.Root__headline}>
          {product.title}
        </Headline>

        <div className={styles.Root__infoWrapper}>
          <Text element="p" size="lg">
            Size: {product.size}
          </Text>
          <Text element="p" size="lg">
            Price: {product.price} SEK
          </Text>
          <Text element="p" size="lg">
            Quantity: {products.length}
          </Text>
        </div>
      </div>
      <Button className={styles.Root__deleteBtn}>
        <RxTrash size={25} />
      </Button>
    </div>
  )
}

export default CheckoutProductCard
