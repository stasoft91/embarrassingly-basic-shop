import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', () => {
  const state = useStorage('cart', { items: [] })
  
  return {
    state,
    addItem(item) {
      state.value.items.push(item)
    },
    removeItem(item) {
      const index = state.value.items.indexOf(item)
      state.value.items.splice(index, 1)
    },
    clearCart() {
      state.value.items = []
    }
  }
})
