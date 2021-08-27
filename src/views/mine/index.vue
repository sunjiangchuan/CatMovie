<template>
  <div class="mine">
    <Header>
      <i class="iconfont mine-nav" @touchstart="handleBack">&#xe663;</i>
    </Header>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "mine",
  methods: {
    // ...Vuex.mapMutations({
    //   handleBack: "Mine/handleMutaBack",
    // }),
    handleBack() {
      this.$router.back();
    },
  },
};
</script>
