export interface ProductCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  title: string
  price: number
  size: string
  image?: IImage[]
  slug: string
}
