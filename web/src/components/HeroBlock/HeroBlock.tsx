import clsx from 'clsx'
import { useRouter } from 'next/router'
import Button from '@components/Button'
// import Image from '@components/Image'
import Image from 'next/image'
import Text from '@components/Text'
import { HeroBlockProps } from './HeroBlock.types'
import styles from './HeroBlock.module.scss'
import { urlFor } from '@lib/sanity.config'

const HeroBlock = ({ className, imageSrc, btnText, slug }: HeroBlockProps) => {
  const router = useRouter()
  const builtImg = urlFor(imageSrc).url()

  return (
    <div className={clsx(styles.Root, className)}>
      <div className={styles.Root__imageWrapper}>
        <Image
          layout="fill"
          objectFit="cover"
          priority
          src={builtImg}
          alt="Hero image"
        />

        <div className={styles.Root__buttonWrapper}>
          <Button
            block
            light
            className={styles.Root__button}
            onClick={() => router.push(slug)}
          >
            <Text element="p" size="lg">
              {btnText}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroBlock
