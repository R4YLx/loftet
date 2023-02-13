import { GetServerSideProps } from 'next'
import { fetchBlocks, fetchProducts } from '@utils/sanityAPI'
import Headline from '@components/Headline'
import InfoBlock from '@components/InfoBlock'
import HeroBlock from '@components/HeroBlock'
import ProductCard from '@components/ProductCard'
import ProductsGrid from '@components/ProductsGrid'
import styles from '@styles/modules/HomePage.module.scss'

export default function Home({ products, heroBlocks, infoBlocks }: PageProps) {
  return (
    <div className={styles.Root}>
      <div className={styles.Root__heroBlockContainer}>
        {heroBlocks?.length === 2 &&
          heroBlocks.map((block) => (
            <HeroBlock
              key={block._id}
              btnText={block.buttonText}
              imageSrc={block.bgImage}
              slug={block.link}
              className={styles.Root__heroBlock}
            />
          ))}
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

      {infoBlocks &&
        infoBlocks.map((block) => (
          <InfoBlock
            key={block._id}
            headline={block.title}
            buttonText={block.buttonText}
            text={block.content}
          />
        ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const products = await fetchProducts('latest')
  const heroBlocks = (await fetchBlocks('heroBlock')) as IHeroBlock[]
  const infoBlocks = (await fetchBlocks('infoBlock')) as IInfoBlock[]

  return {
    props: {
      products,
      heroBlocks,
      infoBlocks
    }
  }
}
