<template>
  <div>
    <cart-header />
    <main class='container'>
      <Nuxt />
    </main>
  </div>
</template>
<script>
import CartHeader from '../components/CartHeader'
export default {
  components: { CartHeader }
}
</script>

<style lang='scss' scoped>
main {
  display: flex;
}
</style>
