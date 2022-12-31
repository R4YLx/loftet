import Link from 'next/link'
import { urlFor } from '@lib/sanity.config'
import Image from '@components/Image'
import Text from '@components/Text'
import { ProductCardProps } from './ProductCard.types'
import styles from './ProductCard.module.scss'

const ProductCard = ({
  slug,
  image,
  title,
  size,
  price,
  ...rest
}: ProductCardProps) => {
  const builtImg = urlFor(image).url()

  return (
    <Link href={`/product/${slug}`}>
      <a>
        <div className={styles.Root} {...rest}>
          <Image src={builtImg} className={styles.Root__image} />
          <Text element="p" size="lg" className={styles.Root__item}>
            {title} - ({size})
          </Text>

          <Text element="p" size="lg" className={styles.Root__price}>
            {price} SEK
          </Text>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
