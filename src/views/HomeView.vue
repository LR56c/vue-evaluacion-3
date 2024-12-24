<script setup lang="ts">
import CartItemCard from '@/components/CartItemCard.vue'
import ProductCard from '@/components/ProductCard.vue'
import {
  type Product,
  useCart
} from '@/stores/use-cart.ts'
import { storeToRefs } from 'pinia'

const store = useCart()
const { totalToPay, cart, databaseProducts } = storeToRefs(store)

const addCart = (product : Product) => {
  store.addToCart(product)
}

const removeCart = (id : string) => {
  store.removeFromCart(id)
}
</script>

<template>
  <div class="grid grid-cols-2 grid-rows-2 gap-4 p-4">
    <div class="flex flex-col gap-4">
      <h2 class="self-center text-xl font-semibold">Productos disponibles</h2>
      <hr />
      <product-card v-for="product in databaseProducts" :key="product.id" :product
        @add-to-cart="addCart"></product-card>
    </div>
    <div class="flex flex-col gap-4">
      <h2 class="self-center text-xl font-semibold">Productos en el carrito</h2>
      <hr />
      <cart-item-card v-for="item in cart" :key="item.id" :item
        @remove-from-cart="removeCart"
      ></cart-item-card>
    </div>
    <h2 class="w-full px-[10%] text-4xl font-semibold">Total a pagar: ${{ totalToPay }}</h2>
  </div>
</template>

<style lang="css"></style>
