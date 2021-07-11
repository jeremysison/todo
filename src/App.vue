<template>
  <v-app id="materialpro" :class="`${!$vuetify.breakpoint.smAndDown ? 'full-sidebar' : 'mini-sidebar'}`">
      <router-view />
      <notifications group="notification" position="bottom right"  />
  </v-app>

</template>

<script>

export default {
  name: 'App',

  components: {
    
  }

};
</script>
