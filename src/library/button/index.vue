<template>
  <div
    class="soonButton"
    :style="{
      background: type,
      transform: size,
      color,
    }"
  >
    <slot></slot>
    {{ text }}
  </div>
</template>
<script>
export default {
  name: "soonButton",
  props: {
    text: {
      default: "按钮",
      type: String,
    },
    size: {
      default: "small",
      type: String,
    },
    type: {
      default: "#c33",
      type: String,
    },
    color: {
      default: "#3c5",
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.soonButton {
  width: 1.5rem;
  height: 0.7rem;
  color: #333;
  background: #ccc;
  text-align: center;
  line-height: 0.7rem;
  border-radius: 8px;
  margin: 0.1rem;
}
</style>

