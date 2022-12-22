import Button from '@components/Button'
import Headline from '@components/Headline'
import Text from '@components/Text'

import styles from './InfoBlock.module.scss'
import { IInfoBlock } from './InfoBlock.types'

const InfoBlock = ({ buttonText, headline, children }: IInfoBlock) => {
  return (
    <div className={styles.Root}>
      <div className={styles.Root__wrapper}>
        <div className={styles.Root__headlineWrapper}>
          <Headline element="h3" size="lg" className={styles.Root__headline}>
            {headline}
          </Headline>
        </div>

        <div className={styles.Root__textWrapper}>{children}</div>

        <div className={styles.Root__buttonWrapper}>
          <Button dark block>
            <Text element="p" size="lg">
              {buttonText}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InfoBlock
