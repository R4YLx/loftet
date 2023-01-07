import Link from 'next/link'
import { urlFor } from '@lib/sanity.config'
import Image from '@components/Image'
import Text from '@components/Text'
import { ProductCardProps } from './ProductCard.types'
import styles from './ProductCard.module.scss'

const ProductCard = ({ product, ...rest }: ProductCardProps) => {
  const builtImg = urlFor(product.image).url()

  return (
    <Link href={`/product/${product.slug.current}`}>
      <a>
        <div className={styles.Root} {...rest}>
          <Image src={builtImg} className={styles.Root__image} />
          <Text element="p" size="lg" className={styles.Root__item}>
            {product.title} ({product.size})
          </Text>

          {product.quantity <= 0 ? (
            <Text element="p" size="lg" className={styles.Root__price}>
              SOLD OUT
            </Text>
          ) : (
            <Text element="p" size="lg" className={styles.Root__price}>
              {product.price} SEK
            </Text>
          )}
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
