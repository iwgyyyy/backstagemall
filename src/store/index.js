import { createStore } from 'vuex'

export default createStore({
  state: {
    account:''
  },
  mutations: {
    loginIn(state,account){
      state.account=account
    }
  },
  actions: {
  },
  modules: {
  }
})
