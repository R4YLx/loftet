import Button from '@components/Button'
import Image from '@components/Image'
import Text from '@components/Text'
import styles from './HeroBlock.module.scss'
import { IHeroBlock } from './HeroBlock.types'

const HeroBlock = ({ imageSrc, btnText }: IHeroBlock) => {
  return (
    <div className={styles.Root}>
      <div className={styles.Root__imageWrapper}>
        <Image src={imageSrc} isFluid />
      </div>

      <div className={styles.Root__buttonWrapper}>
        <Button block light>
          <Text element="p" size="lg">
            {btnText}
          </Text>
        </Button>
      </div>
    </div>
  )
}

export default HeroBlock
