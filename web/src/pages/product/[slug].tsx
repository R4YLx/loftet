import { sanityClient } from '@lib/sanity.config'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { groq } from 'next-sanity'
import { fetchProductById } from 'utils/fetchProductById'
import styles from './ProductPage.module.scss'

const ProductPage = ({ product }: PageProps) => {
  console.log('product', product)

  return <div className={styles.Root}>ProductPage</div>
}

export default ProductPage

export async function getStaticPaths() {
  const pathQuery = groq`*[_type == "products"]{
    'slug': slug.current
  }`

  const products: Product[] = await sanityClient.fetch(pathQuery)

  if (!products) {
    return null
  }

  return {
    paths:
      products.map((product) => ({
        params: {
          slug: product.slug
        }
      })) || [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  console.log('params', params) // { slug: '0a4c01ab-a577-481e-bf69-a8e167326736' }
  console.log('params', params?.slug) //  '0a4c01ab-a577-481e-bf69-a8e167326736'

  const product = await fetchProductById(String(params!.slug))

  return {
    props: {
      product
    }
  }
}
