import Vue from 'vue'
import Vuex from 'vuex'
import Movie from "./movie/index"
import City from "./city/index"
import Soon from "@/store/soon"
import Mine from "./mine/index"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Movie,
    City,
    Soon,
    Mine
  }
})