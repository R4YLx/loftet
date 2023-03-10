import Button from '@components/Button'
import Headline from '@components/Headline'
import Text from '@components/Text'
import { InfoBlockProps } from './InfoBlock.types'
import styles from './InfoBlock.module.scss'

const InfoBlock = ({ buttonText, headline, text }: InfoBlockProps) => {
  return (
    <div className={styles.Root}>
      <div className={styles.Root__wrapper}>
        <div className={styles.Root__headlineWrapper}>
          <Headline element="h3" size="lg" className={styles.Root__headline}>
            {headline}
          </Headline>
        </div>

        <div className={styles.Root__textAndButtonWrapper}>
          <Text element="p" size="lg">
            {text[0].children.map((span) => span.text)}
          </Text>

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
