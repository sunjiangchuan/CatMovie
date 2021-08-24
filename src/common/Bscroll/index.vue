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
      this.scroll.scrollTo(0, -t);
    },
    handleHot(Hot) {
      this.scroll.scrollTo(0, Hot);
    },
    getBeingMore() {
      this.scroll.on("pullingUp", () => {
        this.$store.dispatch("Movie/getActionsNowMovie");
        this.$store.dispatch("Movie/getActionMoreMovie");
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
<style>
.wrapper {
  height: 100%;
}
</style> 