import { useRouter } from 'next/router'
import ProductsGrid from '@components/ProductsGrid'
import ProductCard from '@components/ProductCard'
import Headline from '@components/Headline'
import styles from './CollectionPage.module.scss'
import { useProductsByCategory } from 'hooks/useProductsByCategory'

const CollectionPage = () => {
  const router = useRouter()
  const slug = String(router.query.slug)

  const { data } = useProductsByCategory(slug)

  return (
    <div className={styles.Root}>
      <aside className={styles.Root__sidebar}></aside>

      <main className={styles.Root__main}>
        <Headline element="h2" size="lg" className={styles.Root__headline}>
          {slug.replace('-', ' ')}
        </Headline>

        <ProductsGrid>
          {data &&
            data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </ProductsGrid>
      </main>
    </div>
  )
}

export default CollectionPage
