<template>
  <a
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    role="button"
    @click.capture.stop.prevent="addToCart(product)"
  >
    Add to cart
  </a>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/stores/cart'
import type { RichProduct } from '@/types/types'
import { ref } from 'vue'

const cart = useCartStore()

const props = defineProps<{ product: RichProduct }>()

const addToCart = (item: RichProduct) => {
  cart.addItem(item)
}
</script>
