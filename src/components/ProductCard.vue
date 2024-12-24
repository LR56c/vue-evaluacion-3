<script setup lang="ts">
import type { Product } from '@/stores/use-cart.ts'
import { ShoppingCart } from 'lucide-vue-next';
interface ProductCardProps {
  product: Product
}

defineProps<ProductCardProps>()

const emit = defineEmits<{
  addToCart: [Product]
}>()
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <div class="flex items-center gap-1">
      <img class="object-cover object-center w-16 h-16" :src="product.image" />
      <h3>{{ product.name }}</h3>
      <p>- Precio $:{{ product.price }}</p>
    </div>
    <button class="flex gap-2 bg-indigo-400 py-2 px-4 rounded-lg text-white focus-within:outline focus-within:outline-black"
      @click="emit('addToCart', product)">
      <ShoppingCart />
      <span>Agregar al carrito</span>
    </button>
  </div>
</template>

<style scoped lang="css"></style>
