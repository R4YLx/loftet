import { GetStaticProps } from 'next'
import { fetchCategories } from 'utils/fetchCategories'
import { fetchProducts } from 'utils/fetchProducts'

import Headline from '@components/Headline'
import InfoBlock from '@components/InfoBlock'

import styles from '@styles/page-modules/HomePage.module.scss'
import HeroBlock from '@components/HeroBlock'
import ProductCard from '@components/ProductCard'
import ProductsGrid from '@components/ProductsGrid'

export default function Home({ categories, products }: HomePageProps) {
  console.log('categories', categories)

  console.log('products', products)

  return (
    <div className={styles.Root}>
      <div className={styles.Root__heroBlockContainer}>
        <HeroBlock
          imageSrc="/images/jackets-hero.webp"
          btnText="Shop all jackets"
          className={styles.Root__heroBlockOne}
        />

        <HeroBlock
          imageSrc="/images/denim-hero.webp"
          btnText="Shop all denim"
          className={styles.Root__heroBlockTwo}
        />
      </div>

      <main>
        <Headline element="h2" size="lg" className={styles.Root__headline}>
          New Arrivals
        </Headline>

        <ProductsGrid>
          {products.map((product) => (
            <ProductCard
              key={product._id}
              image={product.image}
              item={product.item}
              size={product.size}
              price={product.price}
              onClick={() => null} //* Click event for product page
            />
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

//* Backend
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const products = await fetchProducts()
  const categories = await fetchCategories()

  return {
    props: {
      products,
      categories
    }
  }
}
