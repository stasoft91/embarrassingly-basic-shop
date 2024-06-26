<template>
  <section class="p-8" v-if="product">
    <div class="bg-gray-100 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img class="w-full h-full object-cover" :src="productImage" :alt="product.name" />
            </div>
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div v-for="(image, index) in availablePhotos" :key="index">
                <img
                  :src="image.thumbnailUrl"
                  :alt="`Product Image ${index + 1}`"
                  class="w-full h-32 object-cover cursor-pointer"
                  @click="onImageClick(image.imageUrl)"
                />
              </div>
            </div>
            <div class="flex -mx-2 mb-4">
              <div class="w-full px-2">
                <AddToCartButton :product="product" class="w-full block text-center" />
              </div>
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ product.name }}</h2>
            <p class="text-gray-600 text-sm mb-4">SKU: {{ product.sku }}</p>
            <div class="flex mb-4 flex-wrap">
              <div class="mr-4">
                <span class="font-bold text-gray-700">Price:&nbsp;</span>
                <span class="text-gray-600">{{ formatPrice(product.price) }}</span>
              </div>
              <div>
                <span class="font-bold text-gray-700">Availability:&nbsp;</span>
                <span class="text-gray-600">{{
                  product.inStock ? 'In Stock' : 'Out of Stock'
                }}</span>
              </div>
            </div>
            <div class="mb-4" v-for="option in product.options" :key="option.name">
              <span class="font-bold text-gray-700">{{ option.name }}</span>
              <div class="flex items-center mt-2">
                <span
                  class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2"
                  v-for="value in option.choices"
                  :key="value.text"
                  >{{ value.text }}</span
                >
              </div>
            </div>
            <div>
              <span class="font-bold text-gray-700">Description:</span>
              <p class="text-gray-600 text-sm mt-2" v-html="product.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { ApiService } from '@/services/ApiService'
import { useCartStore } from '@/stores/cart'
import type { RichProduct } from '@/types/types'
import AddToCartButton from '@/components/AddToCartButton.vue'
import { formatPrice } from '../utils/client'

export default defineComponent({
  methods: { formatPrice },
  components: { AddToCartButton },
  setup() {
    const product = ref<RichProduct | null>(null)
    const route = useRoute()
    const productImageSrc = ref('')

    let productId = parseInt(route.params.productId as string)
    const fetchProduct = async () => {
      product.value = await ApiService.getProduct(productId)
    }

    onMounted(fetchProduct)

    const addToCart = (product: RichProduct) => {
      const cart = useCartStore()
      cart.addItem(product)
    }

    const onImageClick = (imageUrl: string | undefined) => {
      productImageSrc.value =
        imageUrl ?? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
    }

    const availablePhotos = computed(() => {
      return [
        {
          thumbnailUrl: product.value?.thumbnailUrl || '',
          imageUrl: product.value?.imageUrl || ''
        },
        ...(product.value?.galleryImages || [])
      ].slice(0, 3)
    })

    const productImage = computed(() => {
      return productImageSrc.value || product.value?.imageUrl
    })

    return {
      product,
      addToCart,
      onImageClick,
      availablePhotos,
      productImage
    }
  }
})
</script>
