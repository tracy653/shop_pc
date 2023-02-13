import { createStore } from "vuex";



export default createStore({
    state:{
        currentPath:'/'
    },

    mutations: {
        ['SET_DATA'](state, { key, value }) {
            state[key] = value;
        },
    },
    actions: {

    }
})