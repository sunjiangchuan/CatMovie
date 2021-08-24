<template>
  <BScroll ref="BeingWrapper">
    <Loading v-if="isLoading" />
    <div class="movieList movieTab">
      <div class="movieItem" v-for="(item, index) in MovieList">
        <div class="moviePic"><img :src="item.img" /></div>
        <div class="movieDes">
          <div class="movieInfo">
            <h2>{{ item.nm }}</h2>
            <p>
              观众评:<span class="movieSc">{{ item.sc }}</span>
            </p>
            <p class="star">
              主演:<span>{{ item.star }}</span>
            </p>
            <p>{{ item.showInfo }}</p>
          </div>
          <div :class="item.globalReleased ? 'movieBtn' : 'movieBtnTo'">
            {{ item.globalReleased ? "购票" : "预售" }}
          </div>
        </div>
      </div>
    </div>
  </BScroll>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "search",
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...Vuex.mapState({
      MovieList: (state) => state.Movie.NowMovieList,
    }),
  },
  watch: {
    MovieList() {
      this.isLoading = false;
      this.$refs.BeingWrapper.updata();
    },
  },
  mounted() {
    this.$refs.BeingWrapper.getBeingMore();
  },
  updated() {
    this.$refs.BeingWrapper.getih();
  },
};
</script>
<style lang="scss" scoped>
.movieList {
  margin-top: 0.9rem;
}
.movieItem {
  padding-left: 0.3rem;
  height: 3rem;
  width: 10rem;
  display: flex;
  align-items: center;
  background: white;
  .movieDes {
    margin-left: 0.2rem;
    width: 100%;
    height: 100%;
    padding: 0.2rem 0.5rem 0;
    border-bottom: 2px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      margin-bottom: 0.16rem;
      font-size: 0.45rem;
      font-weight: bold;
      color: black;
    }
    .movieSc {
      color: #faaf00;
      font-weight: 900;
      font-size: 0.45rem;
    }
    p {
      font-size: 0.3rem;
      line-height: 0.5rem;
      font-size: 0.35rem;
      display: block;
      margin: 0.05rem 0;
    }
    .star {
      width: 5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .movieBtn {
      width: 1.3rem;
      height: 0.7rem;
      background: #e54847;
      line-height: 0.7rem;
      text-align: center;
      color: white;
      font-size: 0.32rem;
      border-radius: 0.12rem;
    }
    .movieBtnTo {
      width: 1.3rem;
      height: 0.7rem;
      background: #3c9fe6;
      line-height: 0.7rem;
      text-align: center;
      color: white;
      font-size: 0.32rem;
      border-radius: 0.12rem;
    }
  }
}

img {
  width: 140px;
  height: 192px;
  border: none;
  vertical-align: middle;
}
</style>