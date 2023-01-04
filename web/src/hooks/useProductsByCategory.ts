import { useQuery } from '@tanstack/react-query'
import { fetchProductsByCategory } from '@utils/sanityAPI'

export const useProductsByCategory = (slug: string) => {
  return useQuery<IProduct[]>(['products', slug], () =>
    fetchProductsByCategory(slug)
  )
}
