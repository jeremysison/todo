<template>
  <v-container id="login" class="fill-height justify-center" tag="section">
    <AlertDismissible v-show="isError" v-bind:message="errorMessage" ref="alertDismissible"></AlertDismissible>
    <v-row justify="center">
      <v-col lg="11" sm="8" xl="7">
        <v-card class="elevation-4">
          <v-row>
            <v-col lg="7" class="info d-none d-md-flex align-center justify-center">
              <div class="d-none d-sm-block">
                <div class="d-flex align-center pa-10">
                  <div>
                    <h1 class="display-0 white--text font-weight-medium">ToDo</h1>
                    <h6 class="subtitle-1 mt-4 white--text op-5 font-weight-regular">Plan, track and manage your tasks.</h6>
                    <h6 class="subtitle-1 mt-4 white--text op-5 font-weight-regular">This is programming test.</h6>
                    <!-- <v-btn class="mt-4 text-capitalize" x-large outlined color="white">Learn More</v-btn> -->
                  </div>
                </div>
              </div>
            </v-col>
            <v-col lg="5">
              <div class="pa-7 pa-sm-12">
                <h2 class="font-weight-bold mt-4 blue-grey--text text--darken-2">Sign in</h2>
                <h6 class="subtitle-1">
                  Please sign in with your user credentials 
                </h6>

                <v-form ref="form" v-model="valid" lazy-validation action="/dashboards/analytical">
                  <v-text-field
                    v-model="staffid"
                    :rules="staffidRules"
                    label="Staff ID"
                    class="mt-4"
                    required
                    outlined
                  ></v-text-field>
                  <div>
                     <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    required
                    outlined
                    :type="'password'"
                  ></v-text-field>
                  </div>
                  
                  <v-btn
                    :disabled="!valid"
                    color="info"
                    block
                    class="mr-4"
                    submit
                    @click="submit"
                  >Sign In</v-btn>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
     <loadingContent :active.sync="isLoading" :color="loadingColor" :is-full-page="fullPage"></loadingContent> 
  </v-container>
</template>

<script>
import loadingContent from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import AlertDismissible from '../../components/AlertDismissible'
import api from '../../services/api'
import constants from '../../services/constants'

export default {
  components: {
    loadingContent,
    AlertDismissible
  },
  name: "BoxedLogin",
  data: () => ({
    isLoading: false,
    loadingColor: '#4299E1',
    fullPage: true,
    isError: false,
    valid: true,
    password: "",
    show1: false,
    passwordRules: [
      v => !!v || "Password is required",
      // v => (v && v.length <= 10) || "Password must be less than 10 characters"
    ],
    staffid: "",
    staffidRules: [
      v => !!v || "Staff ID is required",
      // v => /.+@.+\..+/.test(v) || "Staff ID must be valid"
    ],
    checkbox: false,
    errorMessage: ""
  }),
  computed: {},
  methods: {
    async submit() {
      let me = this;
      this.$refs.form.validate();
      if (this.$refs.form.validate(true)) {
        let param = {usr_id:this.staffid, password: this.password}
        this.isLoading = true;
        api.post(constants.state.cmsApi.hachiLogin,param).then((response)=>{
          me.isLoading = false;
          if (response.data.code==0){
            me.isError = true
            me.errorMessage = response.data.message;
            me.$refs.alertDismissible.reset();
          }else{
            //console.log(response.data)
            //localStorage.setItem(constants.storageKeys.userInfo, JSON.stringify(response.data.userInfo));

            // me.$store.state.Login.CurrentUser = response.data.userInfo;
            // me.$store.state.Login.isLogin = true;

            me.$store.dispatch('Login/setUserInfo',response.data.userInfo)
            me.$store.dispatch('Login/setUserLogin')

            me.$router.push({ name: 'Dashboard' });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
};
</script>
