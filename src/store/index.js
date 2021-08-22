import Vue from 'vue'
import Vuex from 'vuex'
import Movie from "./movie/index"
import City from "./city/index"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Movie,
    City
  }
})