import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movie: [],
        genreList: []
    },
    getters: {
        gettterMovie(state) {
            return state.movie;
        },
        gettterGenreList(state) {
            return state.genreList;
        }
    },
    mutations: {
        mutationMovie(state, data) {
            state.movie = data;
        },
        mutationGenreList(state, data) {
            state.genreList = data;
        }
    },
    actions: {
        actionsMovie({ commit }, data) {
            commit("mutationMovie", data)
        },
        actionsGenreList({ commit }, data) {
            commit("mutationGenreList", data)
        }
    }
})
export default store