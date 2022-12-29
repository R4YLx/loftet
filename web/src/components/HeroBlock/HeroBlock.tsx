import { useRouter } from 'next/router'
import Button from '@components/Button'
import Image from '@components/Image'
import Text from '@components/Text'
import { IHeroBlock } from './HeroBlock.types'
import styles from './HeroBlock.module.scss'

const HeroBlock = ({ imageSrc, btnText, slug, ...rest }: IHeroBlock) => {
  const router = useRouter()

  return (
    <div className={styles.Root} {...rest}>
      <div className={styles.Root__imageWrapper}>
        <Image src={imageSrc} className={styles.Root__image} />

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
