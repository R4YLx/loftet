import { useRouter } from 'next/router'
import { useSearchProducts } from 'hooks/useSearchProducts'

import styles from './SearchPage.module.scss'

const SearchPage = () => {
  const router = useRouter()
  const query = String(router.query.result)

  const { data } = useSearchProducts(query)

  console.log('data', data)

  return <div className={styles.Root}></div>
}

export default SearchPage
