import { useRouter } from 'next/router'
import { useSearchProducts } from 'hooks/useSearchProducts'
import Headline from '@components/Headline'
import ProductsGrid from '@components/ProductsGrid'
import ProductCard from '@components/ProductCard'

import styles from './SearchPage.module.scss'
import Text from '@components/Text'

const SearchPage = () => {
  const router = useRouter()
  const query = String(router.query.result)

  const { data: products } = useSearchProducts(query)

  console.log('router', router)

  return (
    <div className={styles.Root}>
      <div className={styles.Root__header}>
        <Headline element="h2" size="lg" className={styles.Root__headline}>
          Search result
        </Headline>

        <Text element="p" size="lg">
          Found {`${products?.length} results of "${query}"`}
        </Text>
      </div>

      <ProductsGrid>
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </ProductsGrid>
    </div>
  )
}

export default SearchPage
