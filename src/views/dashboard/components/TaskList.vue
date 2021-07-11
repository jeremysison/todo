<template>
  <v-container fluid class="pa-0 align-start">
    <v-row class="px-8 py-2">
      <v-col>
        <v-btn color="primary" class="mb-2 text-capitalize btnSave" outlined @click="showModal">
          <v-icon class="mr-2">mdi-plus</v-icon> Add Task
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <DxDataGrid
            :show-borders="true"
            :data-source="dataSource"
            :remote-operations="true"
            :height="300"
            :selection="{ mode: 'single' }"
            :hover-state-enabled="true"
            :show-column-lines="false"
            :show-row-lines="false"
            :row-alternation-enabled="false"
            @selection-changed="onSelectionChanged2"
            @initialized="initializedDataGrid2"
            >

            <DxSelection select-all-mode="allPages" show-check-boxes-mode="always" mode="multiple" />
            <DxScrolling mode="infinite"/>
            <DxLoadPanel :enabled="true"/>
            
            <DxColumn data-field="inv_dim" caption="Task Name"/>
            <DxColumn data-field="inv_dim" caption="Asignee"/>
            <DxColumn data-field="inv_dim" caption="Due Date"/>
            <DxColumn data-field="inv_dim" caption="Tags"/>
            <DxColumn data-field="inv_dim" caption="Status"/>
            <DxColumn data-field="inv_dim" caption="Action"/>
            <DxSummary>
                <DxGroupItem summary-type="count"/>
            </DxSummary>
        </DxDataGrid>
      </v-col>
    </v-row>
    <TaskAction/>
    <TaskModal ref="TaskModal"></TaskModal>
  </v-container>
</template>

<script>
import TaskModal from './TaskModal'; 
import TaskAction from './TaskAction'; 
import "../../../../node_modules/devextreme/dist/css/dx.common.css";             
import "../../../../node_modules/devextreme/dist/css/dx.light.css";  
import { DxDataGrid,DxSelection,DxLoadPanel,DxColumn,DxSummary,DxGroupItem,DxScrolling } from "devextreme-vue/data-grid";

export default {
  name: "TaskList",
  components: {
      DxDataGrid,DxSelection,DxLoadPanel,DxColumn,DxSummary,DxGroupItem,DxScrolling,TaskModal,TaskAction
  },
  data: () => ({
  }),
  methods:{
    showModal(){

      this.$refs.TaskModal.showDialog();
    }
  },
  mounted() {
   
  },
};
</script>
