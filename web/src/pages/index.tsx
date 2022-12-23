import { GetServerSideProps } from 'next'
import { fetchCategories } from 'utils/fetchCategories'

import Headline from '@components/Headline'
import InfoBlock from '@components/InfoBlock'

import styles from '@styles/page-modules/HomePage.module.scss'

export default function Home({ categories }: HomePageProps) {
  console.log('categories', categories)

  return (
    <div className={styles.Root}>
      <main>
        <Headline element="h2" size="lg" className={styles.Root__headline}>
          New Arrivals
        </Headline>
      </main>

      <InfoBlock
        headline="Made for the modern man"
        buttonText="About us"
        text="Lorem ipsum dolor sit amet consectetur. Mi ultricies purus aliquet vel
          vitae at viverra mattis id. Enim nec condimentum auctor facilisis.
          Tempor pellentesque eget ultrices elit nullam purus. Est ornare etiam
          dis lacus cursus cum. Sit ullamcorper elementum vestibulum lacus nisl lectus. Sem ut
          suspendisse eu arcu vitae integer. Vivamus scelerisque id lectus diam
          elit ipsum. Metus posuere diam faucibus sit duis ac quis vitae
          volutpat. Blandit at pellentesque nibh consectetur risus. Mi volutpat
          tempor volutpat dolor quis ornare mattis non commodo."
      ></InfoBlock>
    </div>
  )
}

//* Backend
export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const categories = await fetchCategories()

  return {
    props: {
      categories
    }
  }
}
