<template>
    <v-container class="details">
        <v-row class="pa-4">

            <v-col cols=12> 

                <v-icon color="primary" class="mr-2">mdi-pencil</v-icon>
                <h1>Title</h1>
                <div>Assignee</div>
                <div>Due Date</div>
                <div>
                    <v-chip color="warning" class="ma-2">
                        mid
                    </v-chip>
                </div>
                <div>
                    <v-chip color="warning" class="ma-2">
                        Inprogress
                    </v-chip>
                </div>
                <div>Status</div>
                <div>Description</div>
            </v-col>

        </v-row>
        <v-row class="pa-4 d-flex flex-row-reverse">
            <v-btn color="primary" class="mb-2 text-capitalize" outlined @click="showModal">
                Save
            </v-btn>
            <v-btn color="gray" class="mb-2 text-capitalize mr-4" outlined @click="showModal">
                Cancel
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>

export default {
  name: "TaskList",
  components: {
  },
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    },
    mounted() {
   
  },
};
</script>

<style>
.details{
    width: 30vw;
    background: #fff;
    height: 100%;
}
</style>