<template>
    <div class="mt-4 text-center">
        <div class="mt-4 text-center">
            <v-dialog v-model="dialog" persistent max-width="350">
                <v-card>
                    <v-card-title class="headline" v-text="HeaderMessage"></v-card-title>
                    <v-card-text v-text="BodyMessage"></v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" text @click="onCancelClick_0">{{CancelText}}</v-btn>
                    <v-btn color="success" text @click="onOKClick_0">{{OKText}}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>

export default {
    props: ['onOKClick','onCancelClick'],
    data() {
        return {
            dialog: false,
            HeaderMessage: "",
            BodyMessage: "",
            OKText: "",
            CancelText: "",
            payload: {}
        }
    },
    methods:{
        show(headerMessage,bodyMessage,okText,cancelText,payload){
            this.HeaderMessage = headerMessage;
            this.BodyMessage = bodyMessage;
            this.OKText = okText;
            this.CancelText = cancelText; 
            this.dialog = true;
            this.payload = payload;
        },
        onOKClick_0(){
            this.dialog = false;
            if(typeof this.onOKClick == "function"){
                this.onOKClick(this.payload);
            }
        },
        onCancelClick_0(){
            this.dialog = false;
            if(typeof this.onCancelClick == "function"){
                this.onCancelClick();
            }
        }
    }
}

</script>

<style>

</style>