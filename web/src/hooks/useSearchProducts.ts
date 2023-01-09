import { useQuery } from '@tanstack/react-query'
import { fetchSearchedProducts } from '@utils/sanityAPI'

export const useSearchProducts = (query: string) => {
  return useQuery<IProduct[]>(['products', query], () =>
    fetchSearchedProducts(query)
  )
}
