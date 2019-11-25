<template>
  <div class="home">
    <ul>
      <li v-for="product in products" :key="product.id">
        Name: {{ product.title }} - Qty: {{ product.quantity }}
          <button :disabled="loading" @click="addOne(product)">+</button>
          <button :disabled="loading" @click="removeOne(product)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '@/db'
export default {
  name: 'admin',
  data () {
    return {
      products: [],
      loading: false
    }
  },
  firestore: {
    products: db.collection('products')
  },
  methods: {
    async addOne (p) {
      this.loading = true
      const changedProduct = { ...p }
      changedProduct.quantity++
      await db.collection('products')
        .doc(p.id)
        .update(changedProduct)
      this.loading = false
    },
    async removeOne (p) {
      this.loading = true
      const changedProduct = { ...p }
      changedProduct.quantity--
      await db.collection('products')
        .doc(p.id)
        .update(changedProduct)
      this.loading = false
    }
  }
}
</script>
