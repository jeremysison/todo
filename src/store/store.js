import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import SecureLS from "secure-ls"

import Login from '@/views/login/store/Login.js'
import constants from '@/services/constants.js'

var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        constants:constants,
        Login: Login
    },
    state: {
        Sidebar_drawer: null,
        Customizer_drawer: false,
        SidebarColor: 'white',
        SidebarBg: '',
    },
    mutations: {
        SET_SIDEBAR_DRAWER(state, payload) {
            state.Sidebar_drawer = payload
        },
        // SET_CUSTOMIZER_DRAWER(state, payload) {
        //     state.Customizer_drawer = payload
        // },
        // SET_SIDEBAR_COLOR(state, payload) {
        //     state.SidebarColor = payload
        // },
        
        
    },
    actions: {
    },
    getters: {
    },
    plugins: [
        createPersistedState({
          storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
          },
        }),
      ],
})