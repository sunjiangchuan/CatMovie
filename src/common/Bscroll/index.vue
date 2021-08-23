<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "wrapper",
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      pullUpLoad: true,
      // disableTouch: true,
      // disableMouse: true,
    });
  },
  methods: {
    handleTo(t) {
      this.scroll.scrollTo(0, -t, 0);
    },
    handleHot(Hot) {
      this.scroll.scrollTo(0, Hot, 0);
    },
    getBeingMore() {
      this.scroll.on("pullingUp", () => {
        this.$store.dispatch("Movie/getActionsNowMovie");
      });
    },
    updata() {
      this.scroll.finishPullUp();
    },
    getih() {
      this.scroll.refresh();
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
}
</style> 