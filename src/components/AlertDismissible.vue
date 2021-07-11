<template>
    <div>
        <div class="mt-4">
        <v-alert
            v-model="alert"
            border="left"
            close-text="Close Alert"
            dark
            type="error"
            dismissible
            class="font-weight-light">
            {{message}}
        </v-alert>

            <!-- <div class="text-center">
                <v-btn v-if="!alert" color="info" @click="alert = true">Reset</v-btn>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
  props: ['message'],
  name: "AlertDismissible",
  data: () => ({
      alert: true
  }),
  methods: {
      reset(){
        this.alert = true
      }
  }

};
</script>