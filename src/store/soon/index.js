import {
    getNowMovie
} from "@/api/api"

export default {
    state: {
        banners: []
    },
    mutations: {
        getMutationsSonnMovie(state, params) {
            state.banners = params;
            window.sessionStorage.setItem("SoonImg", JSON.stringify(params))
        }
    },
    actions: {
        async getActionsSonnMovie({
            commit
        }) {
            let data = await getNowMovie()
            commit('getMutationsSonnMovie', data)
        }
    },
    namespaced: true
}