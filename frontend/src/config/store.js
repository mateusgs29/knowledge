import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
  state: {
    isMenuVisible: true,
    user: {
      name: 'Usuário Mock',
      email: 'mock@teste.com.br'
    }
  },
  mutations: {
    toggleMenu(state, isVisible) {
      if(isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible
      } else {
        state.isMenuVisible = isVisible
      }
    }
  }
})