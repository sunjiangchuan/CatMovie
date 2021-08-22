<template>
  <div id="footer">
    <ul>
      <router-link tag="li" v-for="(item, index) in tabbar" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{ item.title }}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {
      tabbar: [
        { title: "电影", path: "/movie", icon: "&#xe717;" },
        { title: "影院", path: "/cinema", icon: "&#xe60e;" },
        { title: "我的", path: "/mine", icon: "&#xe678;" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
$color: #f03d37;
#footer {
  width: 100%;
  height: 1.4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #e8e8e8;
  background: white;
  z-index: 5;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 0.3rem;
      color: #777;
      i {
        font-size: 0.6rem;
      }
    }
  }
}

#footer > ul > .router-link-active {
  color: $color;
}
#footer > ul > span {
  display: block;
  text-align: center;
}
</style>