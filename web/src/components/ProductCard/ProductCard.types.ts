export interface ProductCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  item: string
  price: number
  size: string
  image?: IImage[]
  slug: string
}
