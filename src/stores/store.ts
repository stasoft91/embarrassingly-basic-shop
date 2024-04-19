import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product, SearchResult } from 'ecwid-api-client'
import type { CategoriesResponse } from '@/types/categories.types'
import { ApiService } from '@/services/ApiService'

export const useStoreStore = defineStore('store', () => {
  const categories = ref<CategoriesResponse>({ items: [] });
  const products = ref<SearchResult<Product>>([]);
  
  async function loadCategories() {
    categories.value = await ApiService.getCategories();
  }
  
  async function loadProducts(keyword: string = '') {
    products.value = await ApiService.getProducts(keyword);
  }

  return { categories, products, loadCategories, loadProducts }
})
