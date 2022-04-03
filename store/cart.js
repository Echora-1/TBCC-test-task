export const state = () => ({
  cart: []
})

export const mutations  = {
  addToCart(state, product) {
    const inCart = state.cart.find(item => item.title === product.title);
    if(inCart){
      inCart.quantity += 1;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
  },

  removeFromCart(state, id) {
    state.cart = state.cart.filter(product => product.id !==  id);
  },

  incrementQuantity(state, id) {
    state.cart.find(item => item.id === id).quantity += 1;

  },

  decrementQuantity(state, id) {
    const product = state.cart.find(item => item.id === id);
    if(product.quantity !== 1) {
      product.quantity -= 1;
    }
  }
}

export const actions = {
  addToCart(context, product) {
    context.commit('addToCart', product);
  },

  removeFromCart(context, id) {
    context.commit('removeFromCart', id);
  },

  incrementQuantity(context, id) {
    context.commit('incrementQuantity', id);
  },

  decrementQuantity(context, id) {
    context.commit('decrementQuantity', id);
  }
}

export const getters = {
  getCart: state => state.cart,

  getCartSize: state => state.cart.reduce((previousValue, currentValue) => {
    previousValue += currentValue.quantity;
    return previousValue;
  }, 0),

  getSubtotal: state => state.cart.reduce((previousValue, currentValue) => {
    previousValue += currentValue.quantity * currentValue.regular_price.value;
    return previousValue;
  }, 0).toFixed(2),
}
