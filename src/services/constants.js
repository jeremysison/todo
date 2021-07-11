export default {
    namespaced: true,
    cmsVersion: "1.0.0",
    state: {
        cmsEndpoint: "",
        cmsApi: {
            todoLogin:'/todo/login',
        },
    },
    initialize() {
        this.state.cmsEndpoint = this.cmsEndpoint;
    },
    actions: {
    }
}