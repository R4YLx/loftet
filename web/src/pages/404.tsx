import { useRouter } from 'next/router'
import Button from '@components/Button'
import Headline from '@components/Headline'
import Image from '@components/Image'
import Text from '@components/Text'
import styles from '@styles/modules/ErrorPage.module.scss'

const ErrorPage = () => {
  const router = useRouter()

  return (
    <div className={styles.Root}>
      <div className={styles.Root__textContainer}>
        <Headline element="h1" size="xl" className={styles.Root__headlineXL}>
          Whoops,
        </Headline>

        <Headline element="h2" size="xl" className={styles.Root__headlineXL}>
          something broke.
        </Headline>

        <Headline element="h3" size="lg">
          Error 404 - page not found
        </Headline>

        <Button
          block
          bgDark
          onClick={() => router.push('/', undefined, { shallow: true })}
        >
          <Text element="p" size="xl">
            Return to LOFTET
          </Text>
        </Button>
      </div>

      <div className={styles.Root__imageWrapper}>
        <Image src="/images/404.png" className={styles.Root__image} />
      </div>
    </div>
  )
}

export default ErrorPage
