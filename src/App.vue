<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CartButton from '@/components/CartButton.vue'
</script>

<template>
  <div class="container mx-auto flex justify-between items-center py-4">
    <RouterLink tag="h1" class="text-3xl font-bold underline px-2" to="/">
      Awesome Store
    </RouterLink>

    <RouterLink to="/cart" class="px-2">
      <CartButton />
    </RouterLink>
  </div>

  <!-- Page Content -->
  <div class="container mx-auto mt-8">
    <RouterView />
  </div>
</template>

<style scoped></style>
