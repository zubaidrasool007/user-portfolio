import { createStore } from 'vuex';
import type { User } from '../models/user.model';
interface State {
    users: Array<User>,
}

export default createStore<State>({
    state: {
        users: [],
    },
    getters: {
        getUsers: (state) => state.users,
    },
    actions: {
        async setUserData({ commit }, user) {
            commit('SET_NEW_USER', user);
        },
    },
    mutations: {
        store(state, user: User) {
            state = {...state, users: [...state.users, user] }
        },
    }
});