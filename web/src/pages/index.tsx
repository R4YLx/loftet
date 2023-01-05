import { GetServerSideProps } from 'next'
import { fetchProducts } from '@utils/sanityAPI'

import Headline from '@components/Headline'
import InfoBlock from '@components/InfoBlock'
import HeroBlock from '@components/HeroBlock'
import ProductCard from '@components/ProductCard'
import ProductsGrid from '@components/ProductsGrid'

import styles from '@styles/HomePage.module.scss'

export default function Home({ products }: PageProps) {
  return (
    <div className={styles.Root}>
      <div className={styles.Root__heroBlockContainer}>
        <HeroBlock
          btnText="Shop all jackets"
          imageSrc="/images/jackets-hero.webp"
          slug={'collection/jackets'}
          className={styles.Root__heroBlockOne}
        />

        <HeroBlock
          btnText="Shop all denim"
          imageSrc="/images/denim-hero.webp"
          slug={'collection/denim'}
          className={styles.Root__heroBlockTwo}
        />
      </div>

      <main className={styles.Root__main}>
        <Headline element="h2" size="lg" className={styles.Root__headline}>
          Newest Arrivals
        </Headline>

        <ProductsGrid>
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </ProductsGrid>
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

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const products = await fetchProducts('latest')

  return {
    props: {
      products
    }
  }
}
