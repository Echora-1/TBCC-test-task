<template>
  <div class='cart'>
    <h1>Shopping Cart</h1>
    <template v-if='getCartSize > 0'>
      <cart-items-header/>
      <cart-item
        v-for='item in getCart'
        :key='item.id'
        :content='item'
        @deletion-event='removeFromCart(item.id)'
        @increment-quantity='incrementQuantity(item.id)'
        @decrement-quantity='decrementQuantity(item.id)'
      />
      <div class='cart__footer'>
        <p class='cart__subtotal'>Subtotal: $ {{ getSubtotal }}</p>
        <base-button class='cart__checkout'>
          Checkout
        </base-button>
      </div>
    </template>
    <div v-else class='cart__empty-text'>Cart is empty</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CartItem from '../components/CartItem'
import CartItemsHeader from '../components/CartItemsHeader'
import BaseButton from '../components/BaseButton'
export default {
  components: { BaseButton, CartItemsHeader, CartItem },
  layout: 'cart',

  computed: {
    ...mapGetters({
      getSubtotal: 'cart/getSubtotal',
      getCart: 'cart/getCart',
      getCartSize: 'cart/getCartSize'
    })
  },

  methods: {
    ...mapActions({
      removeFromCart: 'cart/removeFromCart',
      incrementQuantity: 'cart/incrementQuantity',
      decrementQuantity: 'cart/decrementQuantity',
    })
  }
}
</script>

<style lang='scss' scoped>
h1 {
  margin-top: 0;
}

.cart {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__subtotal {
    font-size: 25px;
    font-weight: bold;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 20px;
  }

  &__checkout {
    font-size: 20px;
    padding: 8px 16px;
    background-color: #10c44c;

    &:hover {
      background-color: #0ead43;
    }
  }

  &__empty-text {
    text-align: center;
    font-size: 25px;
  }
}
</style>
