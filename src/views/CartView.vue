<template>
  <div class="container mx-auto mt-8">
    <div class="flex justify-center items-center">
      <!-- Cart Items -->
      <div class="flex flex-col">
        <h2 class="text-2xl font-bold mb-2">Cart</h2>
        <div v-if="cartItems.length === 0" class="text-gray-600 text-sm mt-4">
          No items in the cart
        </div>
        <template v-else>
          <div class="flex flex-col gap-4">
            <RouterLink
              :to="productToLink(item)"
              v-for="item in cartItems"
              :key="item.id"
              class="flex flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div class="flex flex-row items-center gap-4 flex-auto">
                <img :src="item.thumbnailUrl" :alt="item.name" class="w-16 h-16 object-contain" />
                <div class="flex flex-col flex-auto">
                  <span class="text-lg font-semibold">{{ item.name }}</span>
                  <span class="text-gray-600">{{ item.defaultDisplayedPriceFormatted }}</span>
                </div>

                <button
                  @click.capture.stop.prevent="removeFromCart(item)"
                  class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-100 hover:scale-105"
                >
                  Remove
                </button>
              </div>
            </RouterLink>
          </div>

          <div class="flex flex-row justify-between mt-4">
            <span class="text-lg font-semibold">Total:</span>
            <span class="text-lg font-semibold">{{ formatPrice(getTotal()) }}</span>
          </div>

          <a
            role="button"
            class="text-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-100 hover:scale-105"
            @click.capture.stop.prevent="onPlaceOrderClick"
            >Place order</a
          >
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { productToLink } from '@/utils/client'
import type { RichProduct } from '@/types/types'

const cart = useCartStore()
const cartItems: RichProduct[] = storeToRefs(cart).state.value?.items ?? []

const getTotal = () => {
  return cartItems.reduce(
    (acc, item: RichProduct) =>
      item.defaultDisplayedPrice ? acc + item.defaultDisplayedPrice : acc,
    0
  )
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price)
}

const onPlaceOrderClick = () => {
  alert('Order placed! Congratulations! 🎉')
}

const removeFromCart = (item: RichProduct) => {
  cart.removeItem(item)
}
</script>
