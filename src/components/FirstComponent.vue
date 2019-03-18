<template>
  <div id="firstComponent" class="layout">
    <ul>
      <li v-for="product in products" :key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price">$ {{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FirstComponent',
  computed: {
    products () {
      debugger
      return this.$store.state.products
    }
  }
}
</script>
