import AuthServices from '../../api/modules/auth'

const state = {
    token: null,
    isLogin: false,
    //number: 0
}
const getters = {}
const mutations = {
    DO_SOMETHING() {
        console.log('function from mutation...');
    },
    LOGIN_SUCCESS(state, response) {
        state.token = response;
        //state.isLogin = true;
        //console.log('Login from store: ' + state.token);
    },
    LOGOUT_SUCCESS(state) {
        state.token = null;
        //console.log('Login from store: ' + state.token);
    }
}
const actions = {
    async login({commit},crenditials) {
            await AuthServices.login(crenditials)
            .then(response => {
                //console.log(response.data.access_token);
                //localStorage.setItem('token', response.data.access_token);
                commit('LOGIN_SUCCESS', response.data.access_token);
                //console.log(crenditials.username + ' ' + crenditials.password);
               // console.log(state.token);
            })
            .catch(error => {
                console.log(error);
                state.token = null
            });
            //commit('DO_SOMETHING');
    },
    async logout({commit},crenditials) {
        await AuthServices.logout(crenditials)
        .then(response => {
            console.log(response.data);
            commit('LOGOUT_SUCCESS');
        })
        .catch(error => {
            console.log(error);
        });
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}