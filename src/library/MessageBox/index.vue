<template>
  <div class="messageBox">
    <h2>{{ text }}</h2>
    <p>{{ content }}</p>
    <div class="messageBoxBtn" v-if="flag">
      <div @click="handleMessageOK">{{ OK }}</div>
      <div @click="handleMessageNO">{{ NO }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "messageBox",
};
</script>
<style lang="scss" scoped>
.messageBox {
  width: 80%;
  height: 3rem;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -40%;
  margin-top: -1.5rem;
  background: pink;
  box-shadow: 3px 3px 3px #ccc;
  border: 1px solid #ccc;
  z-index: 8;
  h2 {
    line-height: 0.6rem;
    text-align: center;
    border-bottom: 2px solid #333;
    font-size: 0.5rem;
  }
  p {
    line-height: 1.6rem;
    text-align: center;
    font-size: 1rem;
  }
  .messageBoxBtn {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.7rem;
    line-height: 0.7rem;
    border-top: 2px solid #333;
    font-size: 0.4rem;
    div {
      width: 100%;
      text-align: center;
    }
    div:nth-child(1) {
      border-right: 2px solid #333;
    }
  }
}
</style>