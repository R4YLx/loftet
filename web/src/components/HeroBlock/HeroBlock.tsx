import Button from '@components/Button'
import Image from '@components/Image'
import Text from '@components/Text'
import styles from './HeroBlock.module.scss'
import { IHeroBlock } from './HeroBlock.types'

const HeroBlock = ({ imageSrc, btnText, ...rest }: IHeroBlock) => {
  return (
    <div className={styles.Root} {...rest}>
      <div className={styles.Root__imageWrapper}>
        <Image src={imageSrc} className={styles.Root__image} />

        <div className={styles.Root__buttonWrapper}>
          <Button block light className={styles.Root__button}>
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
