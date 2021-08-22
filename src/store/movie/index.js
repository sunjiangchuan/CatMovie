import {
    getNowMovie
} from "@/api/api.js";

export default {
    state: {
        NowMovieList: []
    },
    mutations: {
        async getMutationsNowMovie(state) {
            let movieList = await getNowMovie();
            state.NowMovieList = movieList;
            console.log(state.NowMovieList)
        }
    },
    actions: {
        getActionsNowMovie({
            commit
        }) {
            commit("getMutationsNowMovie")
        },
    },
    namespaced: true,
}