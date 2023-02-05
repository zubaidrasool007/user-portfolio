import { createStore } from 'vuex';
import type { User } from '../models/user.model';
interface State {
    user: User | null,
}

const store =  createStore<State>({
    state: {
        user: null,
    },

    mutations: {
        updateUserInformation(state, user: User){
            state = {...state, user: user }
        },
    }
});

export type RootState =  typeof store;

export default store;