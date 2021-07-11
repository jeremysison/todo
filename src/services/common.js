// import api from './api'
// import constants from './constants'
import * as moment from "moment/moment";

export default {
    formatDateField(date) {
        return moment(date, "YYYY-MM-DD").format("YYYY-MM-DD")
    },
    formatDateTimeLocal(date) {
        return moment(date, "YYYY-MM-DD HH:mm:ss").format("yyyy-MM-DDTHH:mm")
    },
    getNowDatetime(){
        return moment().format("YYYY-MM-DD HH:mm:ss")
    },
    getCreatedOn(date){
        return moment(date,"DD/MM/YYYY HH:mm:ss").format("YYYY-MM-DD HH:mm:ss")
    },
    isPermitted(store,key){
        // console.log(store,key)
        // return true; // For debugging, allow all
        
        if (store.state.Login.CurrentUser.permission[key]){
            return true;
        }else{
            return false;
        }
    },
    getDate(days=0){
        return moment().add(days,'days').format("YYYY-MM-DD")
    },
    getPermission(e,permissions){
        if(Object.values(permissions).filter(function (permission) { return permission == e }).length){
            return true
        }else{
            return false
        }
    },
    getFormattedDate(data){
        return moment(data).format("DD/MM/YYYY")
    }

}