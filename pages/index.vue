<template>
  <div class='catalog'>
    <h1>Catalog</h1>
    <div class='product-items'>
      <p v-if='filteredProducts.length === 0' class='product-items__empty-text'>No result</p>
      <product-card
        v-for='(product, index) in filteredProducts'
        :key='index'
        :content='product'
        @add-to-cart='val => addToCart(val)'
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCard from '../components/ProductCard'
import FakeProducts from '../static/fake-data/products.json'
export default {
  components: { ProductCard },
  data() {
    return {
      products: []
    }
  },

  computed: {
    ...mapGetters({
      getFilters: 'filters/getFilters',
      getCart: 'cart/getCart',
    }),

    filteredProducts() {
      return this.getFilters.length !== 0
        ? this.products.filter(product => this.getFilters.includes(product.brand))
        : this.products;
    }
  },

  created() {
    this.products = FakeProducts
  },

  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart'
    }),
  }
}
</script>

<style lang='scss' scoped>
h1 {
  margin-top: 0;
  padding: 0 8px;
}

.catalog {
  width: 100%;
}

.product-items {
  display: flex;
  flex-wrap: wrap;

  & > div {
    width: 100%;
    padding: 0.5em;

    @media(min-width: 350px) {
      width: 50%;
    }

    @media (min-width: 1024px) {
      width: 33%;
    }
    @media (min-width: 1280px) {
      width: 25%;
    }
  }

  &__empty-text {
    display: inline-flex;
    margin: 0 auto;
    font-size: 25px;
  }
}
</style>
