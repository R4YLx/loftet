import { urlFor } from '@lib/sanity.config'
import { IProductCard } from './ProductCard.types'

import Image from '@components/Image'
import Text from '@components/Text'
import styles from './ProductCard.module.scss'
import Link from 'next/link'

const ProductCard = ({
  slug,
  image,
  item,
  size,
  price,
  ...rest
}: IProductCard) => {
  const builtImg = urlFor(image).url()

  return (
    <div className={styles.Root} {...rest}>
      <Link href={`/product/${slug}`}>
        <a>
          <Image src={builtImg} className={styles.Root__image} />

          <header className={styles.Root__header}>
            <Text element="p" size="lg" className={styles.Root__item}>
              {item} - ({size})
            </Text>
          </header>

          <footer className={styles.Root__footer}>
            <Text element="p" size="lg" className={styles.Root__price}>
              {price} SEK
            </Text>
          </footer>
        </a>
      </Link>
    </div>
  )
}

export default ProductCard
