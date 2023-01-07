import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useProductsByCategory } from 'hooks/useProductsByCategory'
import {
  setDefault,
  sortHighToLow,
  sortLowToHigh,
  sortNewToOld
} from '@utils/helpers'
import ProductsGrid from '@components/ProductsGrid'
import ProductCard from '@components/ProductCard'
import Headline from '@components/Headline'
import SelectMenu from '@components/SelectMenu'
import Text from '@components/Text'
import CategoryAccordion from '@components/CategoryAccordion'
import styles from './CollectionPage.module.scss'

const options = [
  { value: '', label: '' },
  { value: 'low', label: 'Lowest to highest price' },
  { value: 'high', label: 'Highest to lowest price' },
  { value: 'new', label: 'Newest arrivals' }
]

const CollectionPage = () => {
  const router = useRouter()
  const slug = String(router.query.slug)
  const option = router.query.filter
  const { data: products } = useProductsByCategory(slug)

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

  const handleOrderBy = (option: string) => {
    router.push(
      { pathname: `/collection/${slug}`, query: { filter: option } },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div className={styles.Root}>
      <Headline element="h2" size="lg" className={styles.Root__headline}>
        {slug.replace('-', ' ')}
      </Headline>

      <div className={styles.Root__wrapper}>
        <aside className={styles.Root__sidebar}>
          <CategoryAccordion />
        </aside>

        <main className={styles.Root__main}>
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
    </div>
  )
}

export default CollectionPage
