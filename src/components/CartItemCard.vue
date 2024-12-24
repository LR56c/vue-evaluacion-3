<script setup
  lang="ts">
import type {
  CartItem,
  Product
} from '@/stores/use-cart.ts'
import { Trash2 } from 'lucide-vue-next';
interface CartCardProps {
	item : CartItem
}

defineProps<CartCardProps>()


const emit = defineEmits<{
  removeFromCart: [string]
}>()
</script>

<template>
  <div class="flex flex-col items-start">
    <div class="flex items-center gap-1">
      <img class="object-cover object-center w-16 h-16" :src="item.image" />
      <h3>{{ item.name }}</h3>
      <p>- Cantidad: {{ item.quantity }}</p>
    </div>
    <button class="flex bg-indigo-400 gap-2 py-2 px-4 rounded-lg text-white"
      @click="emit('removeFromCart', item.id)">
      <Trash2 />
      <span>Remover del carrito</span>
    </button>
  </div>
</template>

<style scoped>

</style>
