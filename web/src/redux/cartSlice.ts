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
      state.items = [...state.items, action.payload]
    }
  }
})

export const { addToCart } = cartSlice.actions

// Fetching items in state
export const selectCartItems = (state: RootState) => state.cart.items

export default cartSlice.reducer
