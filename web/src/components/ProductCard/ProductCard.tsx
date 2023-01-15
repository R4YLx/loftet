import Link from 'next/link'
import { urlFor } from '@lib/sanity.config'
import Image from 'next/image'

import Text from '@components/Text'
import { ProductCardProps } from './ProductCard.types'
import styles from './ProductCard.module.scss'
import { useState } from 'react'

const ProductCard = ({ product, ...rest }: ProductCardProps) => {
  const builtImg = urlFor(product.image[0]).url()
  const builtImgHover = urlFor(product.image[1]).url()
  const [hover, setHover] = useState(false)

  return (
    <Link href={`/product/${product.slug.current}`}>
      <a aria-label={`Check out ${product.title}`}>
        <div className={styles.Root} {...rest}>
          <div
            className={styles.Root__imageWrapper}
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
          >
            {hover ? (
              <Image
                layout="fill"
                objectFit="cover"
                src={builtImgHover}
                alt={product.title}
              />
            ) : (
              <Image
                layout="fill"
                objectFit="cover"
                src={builtImg}
                alt={product.title}
              />
            )}
          </div>
          <Text element="p" size="lg" className={styles.Root__item}>
            {product.title} ({product.size})
          </Text>

          {product.quantity <= 0 ? (
            <Text element="p" size="lg" className={styles.Root__sold}>
              Out of stock
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
