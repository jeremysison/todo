<template>
  <v-container fluid class="pa-0" style="height: 100%">
    <div class="pa-0 d-flex" style="height: 100%">
        <TaskList/>
        <TaskDetails/>
    </div>
  </v-container>
</template>

<script>
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";

export default {
  name: "Dashboard",
  components: {TaskList,TaskDetails},
  data: () => ({
    page: {
      title: "Dashboard",
    },
    elementVisible: false,
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: true,
      },
    ],
  }),
  mounted() {
   
  },
};
</script>
