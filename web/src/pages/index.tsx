import Headline from '@components/Headline'
import InfoBlock from '@components/InfoBlock'
import Text from '@components/Text'

import styles from '@styles/page-modules/HomePage.module.scss'

export default function Home() {
  return (
    <div className={styles.Root}>
      <main>
        <div>
          <Headline element="h2" size="lg" className={styles.Root__headline}>
            New Arrivals
          </Headline>
        </div>
      </main>

      <InfoBlock headline="Made for the modern man" buttonText="About us">
        <Text element="p" size="lg">
          Lorem ipsum dolor sit amet consectetur. Mi ultricies purus aliquet vel
          vitae at viverra mattis id. Enim nec condimentum auctor facilisis.
          Tempor pellentesque eget ultrices elit nullam purus. Est ornare etiam
          dis lacus cursus cum.
        </Text>

        <Text element="p" size="lg">
          Sit ullamcorper elementum vestibulum lacus nisl lectus. Sem ut
          suspendisse eu arcu vitae integer. Vivamus scelerisque id lectus diam
          elit ipsum. Metus posuere diam faucibus sit duis ac quis vitae
          volutpat. Blandit at pellentesque nibh consectetur risus. Mi volutpat
          tempor volutpat dolor quis ornare mattis non commodo.
        </Text>
      </InfoBlock>
    </div>
  )
}
