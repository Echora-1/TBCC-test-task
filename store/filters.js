export const state = () => ({
  filters: []
})

export const mutations  = {
  setFilters(state, filtr) {
    state.filters = filtr;
  }
}

export const actions = {
  setFilters(context, filtr) {
    context.commit('setFilters', filtr)
  }
}

export const getters = {
  getFilters: state => state.filters,
}
