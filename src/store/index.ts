import { createStore } from 'vuex';

export default createStore({
    state: {
        users: [],
    },
    getters: {},
    actions: {},
    mutations: {
        saveUsersData(state) {
            return new Promise((res, rej) => {

            });
        },
    }
});