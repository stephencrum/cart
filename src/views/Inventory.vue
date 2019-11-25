<template>
  <div class="about">
    <h1>This is the Inventory</h1>
    <table>
      <tr>
        <th>Product</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{product.title}}</td>
        <td>{{product.description}}</td>
        <td>{{product.price}}</td>
        <td>{{product.quantity}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { db } from '@/db'
export default {
  data () {
    return {
      products: []
    }
  },
  firestore: {
    products: db.collection('products')
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 50%;
  margin-left: 25%;
}

#table td, #table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #4CAF50;
  color: white;
}
</style>
