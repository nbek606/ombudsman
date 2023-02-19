const state = {
  user: null,
  token: ''
}

const getters = {
  token: state => state.token
}

const actions = {
  async login({ commit, dispatch }, payload) {
    await this.$api.$get('/sanctum/csrf-cookie')
    return this.$api.$post('/login', payload).then((response) => {
      commit('setToken', 'true')
    }).catch(() => dispatch('notification/error', 'authRequest', { root: true }))
  },

  async register ({ commit, dispatch }, payload) {
    return this.$api.$post('/register', payload).then((response) => {
      commit('setToken', 'true')
    }).catch(() => {})
  },

  async logout ({ commit }) {
    
  }
}

const mutations = {
  setUser: (state, payload) => state.user = payload,
  setToken: (state, payload) => state.token = payload
 }

 export default {
  state,
  getters,
  actions,
  mutations
 }
 