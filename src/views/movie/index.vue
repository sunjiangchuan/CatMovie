<template>
  <div class="movie page">
    <Header title="猫眼电影">
      <i class="iconfont movie-send">&#xe62a;</i>
    </Header>
    <section class="container">
      <div class="nav">
        <router-link class="city" tag="div" to="/city">北京</router-link>
        <aside class="movieToggle">
          <router-link tag="div" to="/movie/being">正在热映</router-link>
          <router-link tag="div" to="/movie/soon">即将热映</router-link>
        </aside>
        <router-link class="search" tag="div" to="/search">
          <i class="iconfont">&#xe637;</i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "movie",
  created() {
    this.getNowMovie();
  },
  methods: {
    ...Vuex.mapActions({
      getNowMovie: "Movie/getActionsNowMovie",
    }),
  },
};
</script>
<style lang="scss" scoped>
$color: #e54847;
.container {
  width: 100%;
  height: 100%;
  padding-top: 1.4rem;
  margin-bottom: 10rem;
  position: absolute;
  overflow: auto;
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0.9rem;
    border-bottom: 1px solid #ccc;
    font-size: 0.4rem;
    position: fixed;
    left: 0;
    top: 1.4rem;
    background: white;
    z-index: 5;
    .city {
      position: absolute;
      left: 0.4rem;
    }
    .search {
      position: absolute;
      right: 0.4rem;
      i {
        font-size: 0.5rem;
      }
    }
    .movieToggle {
      display: flex;
      justify-content: space-between;
      width: 4rem;
      .router-link-active {
        color: $color;
        border-bottom: 4px solid $color;
      }
      div {
        width: 100%;
        line-height: 0.84rem;
        text-align: center;
        font-weight: bold;
      }
    }
  }
}
</style>
