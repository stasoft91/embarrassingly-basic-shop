import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { RichProduct } from '@/types/types'

export const useCartStore = defineStore('cart', () => {
  const state = useStorage('cart', {
    items: [] as RichProduct[]
  })

  return {
    state,
    addItem(item: RichProduct) {
      state.value.items.push(item)
    },
    removeItem(item: RichProduct) {
      const index = state.value.items.indexOf(item)
      state.value.items.splice(index, 1)
    },
    clearCart() {
      state.value.items = []
    }
  }
})
