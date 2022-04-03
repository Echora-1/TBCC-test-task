<template>
  <div class='content'>
    <div class='content__item'>
      <img :src='`https://fakeimg.pl/300/80b9e9/0073d2/?text=${content.title.split(" ")[1]}`' width='80' height='80'/>
      <p>Brand {{ content.brand }} / {{ content.title }}</p>
    </div>
    <div class='content__price'>
      <p class='content__title'>Price</p>
      <p>$ {{ content.regular_price.value }}</p>
    </div>
    <div class='content__qty'>
      <p class='content__title'>Qty</p>
      <div class='content__qty-actions'>
        <button @click='decrementQuantity'>
          -
        </button>
        <p>{{ content.quantity }}</p>
        <button @click='incrementQuantity'>
          +
        </button>
      </div>
    </div>
    <div class='content__total'>
      <p class='content__title'>Total</p>
      <p>$ {{ total.toFixed(2) }}</p>
    </div>
    <div class='content__delete'>
      <delete-button @click.native='deletionEvent' />
    </div>
  </div>
</template>

<script>
import DeleteButton from './DeleteButton'
export default {
  components: { DeleteButton },
  props: {
    content: {
      type: Object,
      default() {
        return {
          title: '',
          brand: '',
          regular_price: {
            currency: '',
            value: 0
          },
          quantity: 0
        }
      }
    }
  },

  computed: {
    total() {
      return this.content.quantity * this.content.regular_price.value;
    }
  },

  methods: {
    deletionEvent() {
      this.$emit('deletion-event');
    },

    incrementQuantity() {
      this.$emit('increment-quantity');
    },

    decrementQuantity() {
      this.$emit('decrement-quantity');
    }
  }
}
</script>

<style lang='scss' scoped>
.content {
  display: flex;
  border-bottom: 2px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  div {
    font-size: 20px;
    font-weight: bold;

    @media (min-width: 768px) {
      text-align: center;
    }

    p {
      margin: 5px 0;
    }
  }

  &__item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      width: calc(100% - 450px);
      justify-content: flex-start;
    }

    p {
      padding-left: 10px;
    }
  }

  &__title {
    @media (min-width: 768px) {
      display: none;
    }
  }

  &__price,
  &__qty,
  &__total {
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
      flex: 0 0 125px;
      max-width: 125px;
      padding: 0 5px;
      justify-content: center;
    }
  }

  &__qty-actions {
    display: flex;

    button {
      padding: 0 10px;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }

  &__delete {
    padding: 10px 5px;

    @media (min-width: 768px) {
      flex: 0 0 75px;
      max-width: 75px;
      padding: 0 5px;
    }
  }
}
</style>
