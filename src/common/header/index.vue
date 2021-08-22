<template>
  <div id="header">
    <slot></slot>
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "猫眼电影",
    },
  },
};
</script>
<style lang="scss" scoped>
$color: #e54847;
#header {
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  color: white;
  font-size: 0.5rem;
  background: #e54847;
  z-index: 5;
  .mine-nav {
    position: absolute;
    width: 1rem;
    left: 0.4rem;
    font-size: 0.6rem;
  }
  .movie-send {
    position: absolute;
    width: 1rem;
    right: 0.2rem;
    font-size: 0.6rem;
  }
}
</style>