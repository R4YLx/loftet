export interface ProductCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  product: IProduct
}
