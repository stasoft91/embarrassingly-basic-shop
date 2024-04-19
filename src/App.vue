<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CartButton from '@/components/CartButton.vue'
</script>

<template>
  <div class="container mx-auto flex justify-between items-center py-4 px-2">
    <RouterLink tag="h1" class="text-3xl font-bold underline" to="/"> Awesome Store </RouterLink>

    <RouterLink to="/cart" class="">
      <CartButton />
    </RouterLink>
  </div>

  <!-- Page Content -->
  <div class="container mx-auto items-center py-4 px-2">
    <RouterView />
  </div>
</template>

<style scoped></style>
