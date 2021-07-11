export default {
    namespaced: true,
    state: {
      CurrentUser: {},
      isLogin: false
    },
    actions: {
      setUserLogin: function({commit}){
        commit('setLogin');
      },
      setUserInfo: function({commit},param){
        commit('setUserInfo',param);
      },
    },
    mutations: {
      setLogin: function(state){
        state.isLogin = true;
      },
      setUserInfo: function(state,param){
        state.CurrentUser = param;
      },
    }
  }