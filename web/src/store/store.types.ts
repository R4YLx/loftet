export interface CartStore {
  itemsInCart: IProduct[]
  cartTotalSum: number
  addToCart: (product: IProduct) => void
  removeFromCart: (product: IProduct) => void
  cleanCart: () => void
}
