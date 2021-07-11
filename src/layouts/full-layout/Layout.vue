<template>
  <v-app id="inspire">
    <Header v-model="expandOnHover"></Header>

    <v-main>
      <v-container fluid class="page-wrapper pa-0 ma-0" style="height: 100%">
        <router-view />
      </v-container>
    </v-main>
    <!-- <Sidebar :expand-on-hover.sync="expandOnHover"></Sidebar> -->

    <Customizer v-model="expandOnHover"></Customizer>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Customizer from "./customizer/Customizer";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Layout",

  components: {
    Header,
    Footer,
    Customizer,
  },

  props: {
    source: String,
  },
  data: () => ({
    expandOnHover: false,
  }),
  computed: {
    ...mapState(["Customizer_drawer"]),
  },

  methods: {
    ...mapMutations({
      setCustomizerDrawer: "SET_CUSTOMIZER_DRAWER",
    }),
  },
};
</script>

<style>
</style>