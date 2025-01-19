import { defineStore } from 'pinia'
import { ulid } from 'ulidx'
import { computed, ref } from 'vue'

type ItemBase = {
  id: string
  name: string
  image: string
  price: number
}

export type CartItem = ItemBase & {
  quantity: number
}

export type Product = ItemBase & {
  stock: number
}
export const useCart = defineStore('cart', () => {
  const databaseProducts = ref<Product[]>([
    {
      id: ulid(),
      image: '/audifonos.jpg',
      name: 'Audifono',
      price: 30_000,
      stock: 3,
    },
    {
      id: ulid(),
      image: '/mouse.jpg',
      name: 'Mouse',
      price: 20_000,
      stock: 5,
    },
    {
      id: ulid(),
      image: '/teclado.png',
      name: 'Teclado',
      price: 15_000,
      stock: 10,
    },
    {
      id: ulid(),
      image: '/gabinete.webp',
      name: 'Gabinete',
      price: 35_000,
      stock: 4,
    },
    {
      id: ulid(),
      image: '/monitor.jpg',
      name: 'Pantalla',
      price: 175_000,
      stock: 3,
    },
    {
      id: ulid(),
      image: '/silla.jpg',
      name: 'Silla',
      price: 150_000,
      stock: 2,
    },
  ])
  const cart = ref<CartItem[]>([])
  const addToCart = (item: Product) => {
    const existingItem = cart.value.find((i) => i.id === item.id)
    if (!existingItem) {
      cart.value.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: 1
      })
      return
    }
    if (existingItem.quantity + 1 > item.stock) {
      alert('No hay mas unidades disponibles en stock')
      return
    }

    existingItem.quantity += 1
  }
  const removeFromCart = (id: string) => {
    const index = cart.value.findIndex((i) => i.id === id)
    if (index !== -1) {
      cart.value.splice(index, 1)
    }
  }
  const totalToPay = computed(() => {
    return cart.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })
  return {
    cart: computed(() => cart.value),
    databaseProducts: computed(() => databaseProducts.value),
    totalToPay,
    addToCart,
    removeFromCart,
  }
})
