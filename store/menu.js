const state = {
  headerMenuActive: '',
  headerMenu: [
    {
      title: 'Входящие',
      link: 'incoming'
    },
    {
      title: 'Дела',
      link: 'cases'
    },
    {
      title: 'Информация',
      link: 'information'
    },
    {
      title: 'Отчеты',
      link: 'report'
    }
  ]
}

const getters = {
  headerMenu: state => state.headerMenu,
  headerMenuActive: state => state.headerMenuActive
}

const actions = {
  headerMenuActive ({ commit }, payload) {
    commit('setHeaderMenuActive', payload)
  }
}

const mutations = {
  setHeaderMenuActive (state, payload) {
    state.headerMenuActive = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}