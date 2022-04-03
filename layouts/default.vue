<template>
  <div>
    <default-header />
    <main class='container'>
      <div class='actions'>
        <base-button @click.native='openFilters'>
          Filters
        </base-button>
      </div>
      <div :class="[ 'sidebar', {'filters-open': isOpenFilters} ]">
        <div class='sidebar__header'>
          <p class='sidebar__filters-title'>Filters</p>
          <close-button @close='closeFilters' />
        </div>
        <brand-filter />
      </div>
      <Nuxt />
    </main>
  </div>
</template>
<script>
import DefaultHeader from '../components/DefaultHeader'
import BrandFilter from '../components/BrandFilter'
import CloseButton from '../components/CloseButton'
import BaseButton from '../components/BaseButton'
export default {
  components: { BaseButton, CloseButton, BrandFilter, DefaultHeader },

  data() {
    return {
      isOpenFilters: false
    }
  },

  methods: {
    closeFilters() {
      this.isOpenFilters = false;
    },

    openFilters() {
      this.isOpenFilters = true;
    },
  }
}
</script>

<style lang='scss' scoped>
main {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.actions {
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: none;
  }
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  background: white;
  overflow: auto;
  display: none;

  @media (min-width: 768px) {
    position: static;
    display: block;
    flex: 0 0 240px;
    max-width: 240px;
    padding:0 20px 0 0;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      display: none;
    }
  }

  &__filters-title {
    font-size: 25px;
    margin: 0;
  }
}

.filters-open {
  display: block;
}
</style>
