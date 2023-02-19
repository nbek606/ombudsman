const state = {
  notification: {
    text: '',
    type: ''
  },
  errors: {
    authRequest: 'Неправильный логин и пароль',
  },
  success: {

  }
}

const getters = {
  list: state => state.notification
}

const actions = {
  error({ commit, state }, payload) {
    commit('set', { text: state.errors[payload], type: 'error' })
  },

  success({ commit, state}, payload) {
    commit('set', { text: state.success[payload], type: 'error' })
  },
  
  remove({ commit, state }, payload) {
    commit('set', { text: '', type: '' })
  },
}

const mutations = {
  set: (state, payload) => { state.notification = payload }
}

export default {
  state,
  getters,
  actions,
  mutations
}