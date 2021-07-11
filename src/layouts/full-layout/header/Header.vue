<template>
  <v-app-bar app clipped-left clipped-right color="primary" dark>
  <!---/Page Title -->
    <div>
      <h2>ToDo</h2>
    </div>
    <!---/Page Title -->
    <v-spacer />
    <!---Dropdown Menu -->
    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on" class="mr-1">
           <v-icon>icon-options</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in userprofile" :key="i" @click="menuActionClick(item.action)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!---Dropdown Menu -->
  </v-app-bar>
</template>
<script>
// Utilities
// import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    showLogo: true,
    showSearch: false,
    userprofile: [
      { title: "Logout",action: "logout" },
    ],
    menuActionClick(action) {
      if (action=="logout"){
        localStorage.removeItem("vuex")
        this.$router.push({ name: 'Login' });
      }
      return undefined;
    },
    href(){
      return undefined;
    }
  }),
};
</script>

<style lang="scss">
</style>
