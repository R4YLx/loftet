import Headline from '@components/Headline'

import styles from './InfoBlock.module.scss'
import { IInfoBlock } from './InfoBlock.types'

const InfoBlock = ({ headline, children }: IInfoBlock) => {
  return (
    <div className={styles.Root}>
      <div className={styles.Root__wrapper}>
        <div className={styles.Root__headlineWrapper}>
          <Headline element="h3" size="lg" className={styles.Root__headline}>
            {headline}
          </Headline>
        </div>

        <div className={styles.Root__textWrapper}>{children}</div>
      </div>
    </div>
  )
}

export default InfoBlock
