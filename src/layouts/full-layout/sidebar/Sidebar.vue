<template>
  <v-navigation-drawer
    v-model="Sidebar_drawer"
    :dark="SidebarColor !== 'white'"
    :color="SidebarColor"
    mobile-breakpoint="960"
    clipped
    :right="$vuetify.rtl"
    mini-variant-width="70"
    :expand-on-hover="expandOnHover"
    app
    id="main-sidebar"
    v-bar
  >
    <!---USer Area -->
    <v-list-item two-line class="profile-bg">
      <v-list-item-avatar v-if="currentUser.profile_photo">
         <img v-bind:src="currentUser.profile_photo"/>
      </v-list-item-avatar>
      <v-list-item-content class="white--text">
        <v-list-item-title>{{currentUser.name}}</v-list-item-title>
        <v-list-item-subtitle class="caption white--text">{{currentUser.job}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <!---USer Area -->

    <v-list expand nav class="mt-1">
      <template v-for="(item, i) in items">
        <!---If Sidebar Caption -->
        <v-row v-if="item.header" :key="item.header" align="center">
          <v-col cols="12">
            <v-subheader v-if="item.header" class="d-block text-truncate">{{ item.header }}</v-subheader>
          </v-col>
        </v-row>
        <!---If Sidebar Caption -->
        <BaseItemGroup v-else-if="item.children" :key="`group-${i}`" :item="item"></BaseItemGroup>

        <BaseItem v-else :key="`item-${i}`" :item="item" />
      </template>
      <!---Sidebar Items -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
//{{constants.currentUser.name}}
// import constants from '../../../services/constants'
import { mapState } from "vuex";
import SidebarItems from "./SidebarItems";
import common from '../../../services/common';

export default {
  name: "Sidebar",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [],
    currentUser: {name:"",job:"",profile_photo:""}
  }),
  mounted() {
    if (this.$store.state.Login.CurrentUser.user){
      this.currentUser = this.$store.state.Login.CurrentUser.user; 
     
      // Menu Permission check
      //this.items = SidebarItems // debug show all rows
     let items = []
     let _sideBarItems = this.$_.clone(SidebarItems);
      for (let i in _sideBarItems){
        if (_sideBarItems[i].header){
          items.push(_sideBarItems[i])
        } else if (_sideBarItems[i].group){
          items.push(this.$_.clone(_sideBarItems[i]))
          items[items.length-1].children = [];
          for (let j in _sideBarItems[i].children){
            let child = _sideBarItems[i].children[j];
            if (child.key){
              if (common.isPermitted(this.$store,child.key)){
                items[items.length-1].children.push(child)
              }
            }else{
              // undefined key on menu
              items[items.length-1].children.push(child)
            }
          }
        }
      }
      // console.log(this.items)
      let items2 = []
      for (let i=0;i<items.length;i++){
        if (items[i].group){
          if (items[i].children.length>0){
            items2.push(items[i])
          }
        }else{
          items2.push(items[i])
        }
      }
      this.items = items2;
      // eof Menu Permission check

    }
  },
  computed: {
    ...mapState(["SidebarColor", "SidebarBg"]),
    Sidebar_drawer: {
      get() {
        return this.$store.state.Sidebar_drawer;
      },
      set(val) {
        this.$store.commit("SET_SIDEBAR_DRAWER", val);
      }
    }
  },
  watch: {
    "$vuetify.breakpoint.smAndDown"(val) {
      this.$emit("update:expandOnHover", !val);
    }
  },

  methods: {}
};
</script>
<style lang="scss">
#main-sidebar{
  box-shadow:1px 0 20px rgba(0,0,0,.08);
  -webkit-box-shadow:1px 0 20px rgba(0,0,0,.08);
  .v-navigation-drawer__border{
    display: none;
  }
  .v-list {
    padding: 8px 15px;
  }
  .v-list-item{
      &__icon--text,
      &__icon:first-child{
        justify-content: center;
        text-align: center;
        width: 20px;
        
      }
  }
  .profile-bg{
    background:url('../../../assets/images/user-info.jpg') no-repeat;
    .v-avatar{
      padding:45px 0;
    }
  }
  

}
</style>