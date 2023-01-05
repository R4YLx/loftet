import { useEffect, useState } from 'react'
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

const CollectionPage = () => {
  const router = useRouter()
  const slug = String(router.query.slug)
  const [option, setOption] = useState<string>()
  const { data } = useProductsByCategory(slug)
  const [products, setProducts] = useState<IProduct[]>()

  const options = [
    { value: '', label: '' },
    { value: 'low', label: 'Lowest to highest price' },
    { value: 'high', label: 'Highest to lowest price' },
    { value: 'new', label: 'Newest arrivals' }
  ]

  const handleOrderBy = (option: string) => {
    setOption(option)
  }

  useEffect(() => {
    setProducts(data)

    if (!products) return

    switch (option) {
      case 'low':
        {
          const copy = sortLowToHigh(products)
          setProducts(copy)
        }
        break
      case 'high':
        {
          const copy = sortHighToLow(products)
          setProducts(copy)
        }
        break

      case 'new':
        {
          const copy = sortNewToOld(products)
          setProducts(copy)
        }
        break

      case '':
        {
          const copy = setDefault(products)
          setProducts(copy)
        }
        break
    }
  }, [option, data])

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
              <SelectMenu options={options} handleOptions={handleOrderBy} />
            </div>
          </div>

          <ProductsGrid>
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </ProductsGrid>
        </main>
      </div>
    </div>
  )
}

export default CollectionPage
