<template>
    <div class="mt-4 text-center">
        <v-dialog v-model="dialog" transition="dialog-bottom-transition" content-class="custom-dialog">
            <v-card>
                <v-toolbar dark color="primary">
                <v-toolbar-title>{{type}}</v-toolbar-title>
                <v-spacer></v-spacer>
                 <v-btn icon dark @click="btnCloseClick">
                    <v-icon>mdi-close</v-icon>
                </v-btn> 
                </v-toolbar>
                <v-divider></v-divider>
                <div class="pa-5">
                        <v-row class="pa-3">
                        </v-row> 
                      
                        <v-btn color="primary" class="mb-2 mr-2 mt-2 text-capitalize btnAddDescription" @click="btnDownloadFile" :disabled="isDisabled">
                            Download Template
                        </v-btn>
                        <v-btn color="primary" class="mb-2 mt-2 text-capitalize btnAddDescription" @click="btnUploadFile" :disabled="isDisabled">
                            {{type}}
                        </v-btn>
                </div>
            </v-card>

            <v-progress-linear v-if="isDisabled" indeterminate color="info" ></v-progress-linear>
        </v-dialog>

    </div>
    
</template>

<script>
// import common from "../../../../services/common";      
// import api from "../../../../../../services/api";
// import constants from "../../../../../../services/constants";

export default {
    props: [],
    components: {
    },
    data() {
        return {
            isDisabled: false,
            dialog: false,
            isMultiline: true,
            dataItem: {},
            files: {},
            showMsg: false,
            message: "",
            popupVisible: false,
            promoID:"",
            type:"",
            multiple: true,
        }
    },
    mounted(){
       
    },
    methods: {
       
        notify(title,msg,type){
            this.$notify({
                group: 'notification',
                title: title,
                text: msg,
                type: type
            });
        },
       
        showDialog(type,data){
            this.type = type;
            this.dialog = true;
            this.dataItem = JSON.parse(JSON.stringify(data));
        },
        btnCloseClick(){
            this.isDisabled = false
            this.dialog = false;
            this.files = [];
        },
    }
}
</script>

<style>
.value-content {
    padding-top: 20px;
    white-space: pre-wrap;
}
  .show-border{
    border: 1px solid lightgrey;
  }
</style>