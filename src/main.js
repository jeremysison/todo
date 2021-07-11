import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store/store";
import Vuebar from "vuebar";
import "./plugins/base";
import VueSkycons from "vue-skycons";
import underscore from 'vue-underscore';
import JsonEditor from 'vue-json-edit'
import VueClipboard from 'vue-clipboard2'
import Toasted from 'vue-toasted';
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
import Notifications from 'vue-notification'

Vue.use(VueSkycons, {
  color: "#1e88e5",
});

Vue.config.productionTip = false;
Vue.use(Vuebar);
Vue.use(underscore);
Vue.use(JsonEditor)
Vue.use(VueClipboard);
Vue.use(Toasted)
Vue.use(Notifications)

VueClipboard.config.autoSetContainer = true 

Vue.filter('numFormat', numFormat(numeral));

router.beforeEach((to, from, next) => {
  if (!store.state.Login.isLogin){
    if (to.name=="Dashboard"){
      next()
    }else{
      next({ path: '/dashboard' })
    }
  }else{
    next()
  }
})

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
