import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios');

const domain = "https://persona.api.ksfmedia.fi/v1/";

export default new Vuex.Store({
    state: {
        loggedIn: false,
        showLoginForm: false,
        userMetaData: {
            uuid: "",
            token: "",
            ssoCode: ""
        },
        userFullInfo: {
            "email": "",
            "firstName": "",
            "lastName": "",
            "address": {
                "countryCode": "",
                "zipCode": "",
                "city": "",
                "streetAddress": "",
                "streetName": "",
                "houseNo": "",
                "staircase": "",
                "apartment": ""
            },
        }
    },
    getters: {},
    mutations: {
        CHANGE_LOGIN_STATUS: (state, payload) => {
            state.loggedIn = payload.status;
        },
        CHANGE_SHOW_LOGIN_FORM: (state, payload) => {
            console.log(payload)
            state.showLoginForm = payload.status;
        },
        UPDATE_USER_META_DATA: (state, payload) => {
            state.userMetaData = payload;
        },
        UPDATE_USER_DATA_INFO: (state, payload) => {
            state.userFullInfo = payload;
        }

    },
    actions: {
        LOGIN(context, {
            username,
            password
        }) {
            console.log(arguments);
            const url = domain + 'login';
            return new Promise(function (resolve, reject) {
                axios.post(url, {
                        "username": username,
                        "password": password,
                        "mergetoken": ""
                    }).then(function (res) {
                        context.commit("UPDATE_USER_META_DATA", res.data)
                        context.commit("CHANGE_LOGIN_STATUS", {
                            status: true
                        })
                        context.commit("CHANGE_SHOW_LOGIN_FORM", {
                            status: false
                        })
                        resolve(res.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                        reject(err)
                    });
            });
        },
        GET_USER_INFO(context) {
            const url = domain + 'users/' + this.state.userMetaData.uuid
            const self = this;
            return new Promise(function (resolve, reject) {
                axios({
                        method: 'GET',
                        headers: {
                            'Authorization': 'OAuth ' + self.state.userMetaData.token
                        },
                        url,
                    }).then(function (res) {
                        console.log(res);
                        res = res.data;
                        let userInfo = {
                            address: res.address,
                            firstName: res.firstName,
                            lastName: res.lastName
                        };
                        context.commit('UPDATE_USER_DATA_INFO', userInfo)
                        resolve(res.data);
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err);
                    });
            });
        },
        UPDATE_USER_INFO(context, payload) {
            const url = domain + 'users/' + this.state.userMetaData.uuid
            const self = this;
            return new Promise(function (resolve, reject) {
                axios({
                        method: 'PATCH',
                        headers: {
                            'Authorization': 'OAuth ' + self.state.userMetaData.token
                        },
                        data: payload,
                        url,
                    }).then(function (res) {
                        console.log(res);
                        res = res.data;
                        let userInfo = {
                            "address": res.address,
                            firstName: res.firstName,
                            lastName: res.lastName
                        };
                        context.commit('UPDATE_USER_DATA_INFO', userInfo)
                        resolve({
                            sucess: true
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    });
            });

        }

    }
})