import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movie: [],
        genreList: [],
        headerTitle: []
    },
    getters: {
        gettterMovie(state) {
            return state.movie;
        },
        gettterGenreList(state) {
            return state.genreList;
        },
        getterHeaderTitle(state) {
            return state.headerTitle;
        }
    },
    mutations: {
        mutationMovie(state, data) {
            state.movie = data;
        },
        mutationGenreList(state, data) {
            state.genreList = data;
        },
        mutationHeaderTitle(state, data) {
            state.headerTitle = data;
        }
    },
    actions: {
        actionsMovie({ commit }, data) {
            commit("mutationMovie", data)
        },
        actionsGenreList({ commit }, data) {
            commit("mutationGenreList", data)
        },
        actionsHeaderTitle({ commit }, data) {
            commit("mutationHeaderTitle", data)
        }
    }
})
export default store