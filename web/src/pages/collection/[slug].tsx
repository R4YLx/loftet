import { useRouter } from 'next/router'
import styles from './CollectionPage.module.scss'
import { useEffect, useState } from 'react'
import { fetchProducts } from '@utils/fetchProducts'
import { GetServerSideProps } from 'next'
import ProductsGrid from '@components/ProductsGrid'
import ProductCard from '@components/ProductCard'
import Headline from '@components/Headline'

const CollectionPage = ({ products }: PageProps) => {
  const router = useRouter()
  const pageSlug = String(router.query.slug)
  const [data, setData] = useState<IProduct[]>()

  useEffect(() => {
    const filteredProducts = products?.filter(
      (product) => product.subcategory.slug.current === pageSlug
    )

    setData(filteredProducts)
  }, [products, router])

  return (
    <div className={styles.Root}>
      <aside className={styles.Root__sidebar}></aside>

      <main className={styles.Root__main}>
        <Headline element="h2" size="lg" className={styles.Root__headline}>
          {pageSlug.replace('-', ' ')}
        </Headline>

        <ProductsGrid>
          {data?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ProductsGrid>
      </main>
    </div>
  )
}

export default CollectionPage

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const products = await fetchProducts()

  return {
    props: {
      products
    }
  }
}
