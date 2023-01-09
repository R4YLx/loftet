import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { useSearchProducts } from 'hooks/useSearchProducts'
import {
  setDefault,
  sortHighToLow,
  sortLowToHigh,
  sortNewToOld
} from '@utils/helpers'
import Headline from '@components/Headline'
import ProductsGrid from '@components/ProductsGrid'
import ProductCard from '@components/ProductCard'
import Text from '@components/Text'
import SelectMenu from '@components/SelectMenu'
import styles from './SearchPage.module.scss'

const options = [
  { value: '', label: '' },
  { value: 'low', label: 'Lowest to highest price' },
  { value: 'high', label: 'Highest to lowest price' },
  { value: 'new', label: 'Newest arrivals' }
]

const SearchPage = () => {
  const router = useRouter()
  const query = String(router.query.result)
  const option = router.query.sort

  const { data: products } = useSearchProducts(query)

  // Handler for sorting
  const handleOrderBy = (option: string) => {
    router.push({ pathname: '/search', query: { result: query, sort: option } })
  }

  // Sorting collection
  const sortedProducts = useMemo(() => {
    if (!products) return

    switch (option) {
      default: {
        const copy = setDefault(products)
        return copy
      }
      case 'low': {
        const copy = sortLowToHigh(products)
        return copy
      }
      case 'high': {
        const copy = sortHighToLow(products)
        return copy
      }

      case 'new': {
        const copy = sortNewToOld(products)
        return copy
      }
    }
  }, [option, products, router.query.slug])

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

      <main>
        <div className={styles.Root__selectContainer}>
          <Text element="p" size="md" className={styles.Root__selectLabel}>
            Sort by:
          </Text>

          <div className={styles.Root__selectWrapper}>
            <SelectMenu
              options={options}
              option={String(option)}
              handleOptions={handleOrderBy}
            />
          </div>
        </div>

        <ProductsGrid>
          {sortedProducts &&
            sortedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </ProductsGrid>
      </main>
    </div>
  )
}

export default SearchPage
