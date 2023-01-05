import create from 'zustand'
import { persist } from 'zustand/middleware'
import { CartStore } from './store.types'

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      itemsInCart: [],
      cartTotalSum: 0,
      addToCart: (product) => {
        set((state) => {
          const alreadyAdded = state.itemsInCart.some(
            (entry) => entry._id === product._id
          )

          if (alreadyAdded) {
            return state
          }

          return {
            ...state,
            itemsInCart: [...state.itemsInCart, product],
            cartTotalSum: state.cartTotalSum + product.price
          }
        })
      },
      removeFromCart: (product) => {
        set({
          itemsInCart: get().itemsInCart.filter(
            (state) => state._id !== product._id
          )
        })
      },
      cleanCart: () =>
        set((state) => ({ ...state, itemsInCart: [], cartTotalSum: 0 }))
    }),
    {
      name: 'cart-items'
    }
  )
)
