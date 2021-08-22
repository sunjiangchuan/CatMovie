<template>
  <div class="city">
    <div class="Hotcity">
      <h2 class="HotCity">热门城市</h2>
      <div class="HotcityList">
        <div class="HotcityItem">上海</div>
        <div class="HotcityItem">上海</div>
        <div class="HotcityItem">上海</div>
        <div class="HotcityItem">上海</div>
        <div class="HotcityItem">上海</div>
        <div class="HotcityItem">上海</div>
        <div class="HotcityItem">上海</div>
        <div class="HotcityItem">上海</div>
        <div class="HotcityItem">上海</div>
        <div class="HotcityItem">上海</div>
      </div>
    </div>

    <div class="cityList">
      <div class="cityListItem">
        <h2 class="cityItemTitle">A</h2>
        <div class="cityItemList">
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
          <div class="cityItemIndex">上海</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "city",
};
</script>
<style lang="scss" scoped>
.city {
  height: 100%;
  background: #ebebeb;
  .HotCity,
  .cityItemTitle {
    padding-left: 0.4rem;
    font-size: 0.4rem;
    line-height: 0.8rem;
  }
  .HotcityList {
    width: 9.5rem;
    background: #f5f5f5;
    padding: 0 0.8rem 0.2rem 0;
    display: flex;
    flex-wrap: wrap;
    .HotcityItem {
      width: 2.6rem;
      height: 0.8rem;
      margin: 0.4rem 0 0 0.3rem;
      background: white;
      text-align: center;
      line-height: 0.9rem;
      font-size: 0.4rem;
    }
  }
  .cityListItem {
    background: #ebebeb;
  }
  .cityItemList {
    width: 9.5rem;
    background: #f5f5f5;
    padding: 0 0.8rem 0 0.4rem;
    .cityItemIndex {
      width: 100%;
      height: 1.3rem;
      border-bottom: 2px solid #c8c7cc;
      background: #f5f5f5;
      line-height: 1.3rem;
      font-size: 0.4rem;
      color: #333;
    }
  }
}
</style>