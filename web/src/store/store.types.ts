export interface CartStore {
  itemsInCart: IProduct[]
  totalAmount: number
  addToCart: (product: IProduct) => void
}
