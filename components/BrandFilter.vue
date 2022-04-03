<template>
  <div class='brand-filter'>
    <span class='brand-filter__title'>All Brands</span>
    <base-checkbox v-for='(brand) in brands' :key='brand.id' v-model='selectedBrands' name='brands' :value='brand.id' :label="brand.title"/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import FakeBrands from  '../static/fake-data/brands.json'
import BaseCheckbox from './BaseCheckbox'
export default {
  components: { BaseCheckbox },
  data() {
    return {
      brands: [],
      selectedBrands: [],
    }
  },

  watch: {
    selectedBrands() {
      this.setFilters(this.selectedBrands);
    }
  },

  created() {
    this.brands = FakeBrands;
    this.selectedBrands = [];
  },

  methods: {
    ...mapActions({
      setFilters: 'filters/setFilters'
    })
  },
}
</script>
<style lang='scss' scoped>
.brand-filter {
  max-height: 320px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 15px;

  @media (min-width: 768px) {
    position: sticky;
    top: 10px;
  }

  &__title {
    display: inline-block;
    margin-bottom: 10px;
    font-weight: bold;
  }
}
</style>
