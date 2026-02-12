import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload
      const existing = state.items.find((i) => i.id === item.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      state.items = state.items.filter((i) => i.id !== id)
    },
    increaseQuantity(state, action) {
      const id = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) item.quantity += 1
    },
    decreaseQuantity(state, action) {
      const id = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) {
        item.quantity -= 1
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id)
        }
      }
    }
  }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectTotalQuantity = (state) => state.cart.items.reduce((sum, it) => sum + it.quantity, 0)
export const selectCartTotalAmount = (state) => state.cart.items.reduce((sum, it) => sum + it.price * it.quantity, 0)

export default cartSlice.reducer
