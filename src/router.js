import Vue from "vue";
import Router from "vue-router";
import goTo from "vuetify/es5/services/goto";
import common from "../src/services/common";
import store from "./store/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // This is for the scroll top when click on any router link
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  // This is for the scroll top when click on any router link
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/",
      // redirect: "dashboard",
      component: () => import("@/layouts/full-layout/Layout"),
      children: [
        {
          name: "Dashboard",
          path: "dashboard",
          component: () => import("@/views/dashboard/Dashboard"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("@/layouts/blank-layout/Blanklayout"),
      children: [
        {
          name: "Login",
          path: "login",
          component: () => import("@/views/login/Login"),
        }
      ],
    },
  ],
});

import NProgress from "nprogress";

router.beforeResolve((to, from, next) => {
  // security/permission
  if (to.matched.length>1){
    if (to.matched[1].props.default){
      console.log("KEY",to.matched[1].props.default.key)
      console.log(common,store)
      let key = to.matched[1].props.default.key;
      if (!common.isPermitted(store,key)){
        next('/hachi/403-error')
        return;
      }
    }
  }
  
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start(800);
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
