import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SearchResult } from 'ecwid-api-client'
import type { CategoriesResponse } from '@/types/types'
import { ApiService } from '@/services/ApiService'
import type { RichProduct } from '@/types/types'

export const useStoreStore = defineStore('store', () => {
  const categories = ref<CategoriesResponse>({
    items: [],
    total: 0,
    count: 0,
    offset: 0,
    limit: 0
  })
  const products = ref<SearchResult<RichProduct>>({
    items: [],
    total: 0,
    count: 0,
    offset: 0,
    limit: 0
  })

  async function loadCategories() {
    categories.value = await ApiService.getCategories()
  }

  async function loadProducts(keyword: string = '') {
    products.value = await ApiService.getProducts(keyword)
  }

  return { categories, products, loadCategories, loadProducts }
})
