<template>
  <button>
    <span v-if='cartSize !== 0'>
      {{ cartSize }}
    </span>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getCartSize: 'cart/getCartSize',
    }),

    cartSize() {
      return this.getCartSize > 9 ? '9+' : this.getCartSize;
    }
  }
}
</script>

<style lang='scss' scoped>
button {
  width: 50px;
  height: 50px;
  background-image: url("../assets/img/shopping-cart.png");
  background-position: center top 10px;
  background-repeat: no-repeat;
  background-size: 40px;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

span {
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  background-color: #0073d2 ;
  height: 19px;
  width: 19px;
  border-radius: 50%;
  color: white;
  font-size: 15px;
  line-height: 125%;
  text-align: center;
}
</style>
