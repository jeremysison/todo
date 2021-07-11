import axios from 'axios'
import constants from './constants'

constants.initialize();

const axiosCli = axios.create({
  baseURL: constants.state.cmsEndpoint,
  withCredentials: true
});

export default {
  post(apiName,param,token){
    let headers = {};
    if (token){
      headers = this.setHeader(token);
    }
    return axiosCli.post(apiName, param,headers)
  },
  get(apiName,token){
    let headers = {};
    if (token){
      headers = this.setHeader(token);
    }
    console.log(token)
    return axiosCli.get(apiName,headers)
  },
  export(apiName,param,token){
    let headers = {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      responseType: 'arraybuffer',
    };
    return axiosCli.post(apiName, param,headers)
  },
  import(apiName,param,token){
    let headers = {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'multipart/form-data'
      }
    }
    return axiosCli.post(apiName, param,headers)
  },
  setHeader(token){
    return {headers: {
      Authorization: 'Bearer ' + token 
    }}
  }
}
