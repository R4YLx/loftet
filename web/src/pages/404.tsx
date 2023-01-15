import Button from '@components/Button'
import Headline from '@components/Headline'
import Image from 'next/image'
import Text from '@components/Text'
import styles from '@styles/modules/ErrorPage.module.scss'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <div className={styles.Root}>
      <div className={styles.Root__wrapper}>
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

          <Link href={'/'}>
            <a>
              <Button block bgDark>
                <Text element="p" size="xl">
                  Return to LOFTET
                </Text>
              </Button>
            </a>
          </Link>
        </div>

        <div className={styles.Root__imageWrapper}>
          <Image
            layout="fill"
            objectFit="contain"
            priority
            src="/images/404.png"
          />
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
