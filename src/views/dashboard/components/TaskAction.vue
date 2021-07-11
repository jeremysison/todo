<template>
  <div class="pill text-center">
    <v-chip color="white" class="ma-2 px-5" large>
        <div class="mr-9">3 tasks selected</div>
        <v-icon color="secondary" class="mr-2">mdi-delete</v-icon> 
        <v-icon class="">mdi-close</v-icon> 
    </v-chip>
  </div>
</template>


<script>
  export default {
    data: () => ({
      sheet: true,
    }),
  }
</script>

<style>
.pill{
    width: 100%;
    z-index: 999;
    position: absolute;
    bottom:0;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
}
</style>