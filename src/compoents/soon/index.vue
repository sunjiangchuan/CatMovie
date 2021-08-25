<template>
  <div class="movieTab">
    <div class="swiper-container banner_container" ref="banner_container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in Banners">
          <img :src="item.img" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination banner-pagination"></div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
export default {
  name: "soon",
  created() {
    this.getSonnMovie();
  },
  computed: {
    ...Vuex.mapState({
      Banners: (state) => state.Soon.banners,
    }),
  },
  methods: {
    ...Vuex.mapActions({
      getSonnMovie: "Soon/getActionsSonnMovie",
    }),
  },
  // watch: {
  //   Banners() {
  //     this.$nextTick(() => {
  //       new Swiper(this.$refs.banner_container, {
  //         loop: true,
  //         autoplay: {
  //           disableOnInteraction: false,
  //         },
  //         pagination: {
  //           el: ".banner-pagination",
  //         },
  //       });
  //     });
  //   },
  // },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.banner_container, {
        loop: true,
        autoplay: {
          disableOnInteraction: false,
        },
        pagination: {
          el: ".banner-pagination",
        },
      });
    }
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 10rem;
  border: none;
  vertical-align: middle;
}
.banner-pagination {
  position: fixed;
  top: 67%;
  height: 0.4rem;
}
.swiper-container {
  // --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33; /* 两种都可以 */
}
</style>