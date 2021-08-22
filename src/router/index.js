import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from "./movie"
import cinema from "./cinema"
import mine from "./mine"
import search from "./search"
import city from "./city"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/movie"
  },
  movie,
  cinema,
  mine,
  search,
  city,
  {
    path: "**",
    redirect: "/movie"
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router