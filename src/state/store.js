import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movie: [],
    },
    getters: {
        gettterMovie(state) {
            return state.movie;
        }
    },
    mutations: {
        mutationMovie(state, data) {
            state.movie = data;
        }
    },
    actions: {
        actionsMovie({ commit }, data) {
            commit("mutationMovie", data)
        }
    }
})
export default store