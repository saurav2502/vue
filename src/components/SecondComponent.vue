<template>
  <div class="layout">
    <p>second products</p>
    <ul>
      <li v-for="product in salesPrtoduct" :key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice">Reduce Price</button>
  </div>
</template>
<script>
export default {
  name: 'SecondComponent',
  computed: {
    products () {
      return this.$store.state.products
    },
    salesPrtoduct () {
      debugger
      var sales = this.$store.getters.salesProduct
      return sales
    }
  },
  methods: {
    reducePrice () {
      debugger
      this.$store.state.products.forEach(product => {
        product.price -= 10
      })
    }
  }
}
</script>
