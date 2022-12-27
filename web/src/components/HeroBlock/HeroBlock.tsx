import Button from '@components/Button'
import Image from '@components/Image'
import Text from '@components/Text'
import styles from './HeroBlock.module.scss'
import { IHeroBlock } from './HeroBlock.types'

const HeroBlock = ({ imageSrc, btnText }: IHeroBlock) => {
  return (
    <div className={styles.Root}>
      <Image src={imageSrc} className={styles.Root__image} />

      <Button className={styles.Root__button}>
        <Text element="p" size="md">
          {btnText}
        </Text>
      </Button>
    </div>
  )
}

export default HeroBlock
