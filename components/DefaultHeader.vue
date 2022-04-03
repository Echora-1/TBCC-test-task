<template>
  <header class='container'>
    <div class='default-header'>
      <img src='https://fakeimg.pl/240x100/0073d2/fff/?text=Logo' alt='logo' width='240' height='100'>
      <cart-button @click.native='$router.push("/cart")'/>
    </div>
  </header>
</template>

<script>
import CartButton from './CartButton'
export default {
  components: { CartButton }
}
</script>

<style lang='scss' scoped>
.default-header {
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  img {
    padding: 10px 0;
    width: 180px;
    height: 80px;
    object-fit: cover;

    @media (min-width: 768px) {
      width: 240px;
      height: 100px;
    }
  }

  button {
    margin-left: auto;
  }
}
</style>
