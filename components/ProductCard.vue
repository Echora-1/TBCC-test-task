<template>
  <div class='wrap'>
    <div class='content'>
      <img :src='`https://fakeimg.pl/300/80b9e9/0073d2/?text=${content.title.split(" ")[1]}`' :alt='content.title'>
      <p class='content__title'>{{ content.title }}</p>
      <p class='content__brand'>Brand {{ content.brand }}</p>
      <div class='content__footer'>
        <p class='content__price'>$ {{ content.regular_price.value }}</p>
        <base-button @click.native='addToCart'>
          Add to cart
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton'
export default {
  components: { BaseButton },
  props: {
    content: {
      type: Object,
      default() {
        return {
          title: '',
          brand: '',
          regular_price: {
            currency: '',
            value: ''
          }
        }
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.content);
    }
  }
}
</script>

<style scoped lang='scss'>
.wrap {
  background: transparent;
}

.content {
  img {
    overflow: hidden;
    object-fit: cover;
    max-width: 100%;
    width: 100%;
    height: 240px;
    border-radius: 5px;

    @media(min-width: 350px) and (max-width: 480px) {
      height: 160px;
    }
  }

  p {
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__title {
    font-size: 22px;
    margin-top: 10px;
  }

  &__brand {
    margin-top: 5px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;

    @media(min-width: 350px) and (max-width: 480px) {
      flex-direction: column;
    }

    button {
      margin-top: 0;

      @media(min-width: 350px) and (max-width: 480px) {
        margin-top: 10px;
      }
    }
  }

  &__price {
    margin-top: 5px;
    font-weight: bold;
    max-width: 80px;
    align-self: center;

    @media(min-width: 350px) and (max-width: 480px) {
      align-self: start;
    }
  }
}
</style>
