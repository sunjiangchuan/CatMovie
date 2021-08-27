import {
    getNowMovie
} from "@/api/api.js";
import utils from "@/utils/common.js"
export default {
    state: {
        NowMovieList: JSON.parse(window.sessionStorage.getItem("MovieList")) || []
    },
    mutations: {
        getMutationsNowMovie(state, params) {
            state.NowMovieList = params;
        },
        getMutationMoreMovie(state, params) {
            state.NowMovieList = [...state.NowMovieList, ...params];
        }
    },
    actions: {
        async getActionsNowMovie({
            commit
        }, params) {
            let movieList = await getNowMovie(params);
            commit("getMutationsNowMovie", utils.toImg(movieList));
            window.sessionStorage.setItem("MovieList", JSON.stringify(utils.toImg(movieList)));
        },
        async getActionMoreMovie({
            commit
        }) {
            let data = await getNowMovie();
            commit("getMutationMoreMovie", utils.toImg(data))
        }

    },
    namespaced: true,
}