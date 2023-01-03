import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

const initialState: ICart = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: ICart, action: PayloadAction<IProduct>) => {
      const itemInCart = state.items.find(
        (item) => item._id === action.payload._id
      )

      if (!itemInCart) {
        state.items = [...state.items, action.payload]
      }
    },
    removeFromCart: (state: ICart, action: PayloadAction<{ id: string }>) => {
      const removeItem = state.items.filter(
        (item) => item._id !== action.payload.id
      )
      state.items = removeItem
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

// Fetching items in state
export const selectCartItems = (state: RootState) => state.cart.items

// Sums up total price of items in cart
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total: number, item: IProduct) => (total += item.price),
    0
  )

export default cartSlice.reducer
