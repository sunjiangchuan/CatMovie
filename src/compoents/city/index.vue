<template>
  <div class="city">
    <BScroll ref="bscroll">
      <div class="citywrap">
        <div class="Hotcity">
          <h2 class="HotCityTitle" ref="HotCityTitle">热门城市</h2>
          <div class="HotcityList">
            <div class="HotcityItem" v-for="(item, index) in HotCity">
              {{ item.nm }}
            </div>
          </div>
        </div>
        <div class="cityList" ref="cityList">
          <div class="cityListItem" v-for="(item, index) in CityList">
            <h2 class="cityItemTitle">{{ item.index }}</h2>
            <div class="cityItemList">
              <div
                class="cityItemIndex"
                v-for="(cityItem, cityIndex) in item.list"
              >
                {{ cityItem.nm }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BScroll>
    <div class="CityIndex">
      <ul>
        <span @touchstart="handleHot">热门</span>
        <li v-for="(item, index) in CityList" @touchstart="handleToCity(index)">
          {{ item.index }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "city",
  created() {
    this.getCityList();
  },
  computed: {
    ...Vuex.mapState({
      HotCity: (state) => state.City.HotCity,
      CityList: (state) => state.City.CityList,
    }),
  },
  methods: {
    ...Vuex.mapActions({
      getCityList: "City/getActionsCityList",
    }),
    handleToCity(index) {
      var to = this.$refs.cityList.getElementsByTagName("h2")[index].offsetTop;
      this.$refs.bscroll.handleTo(to);
    },
    handleHot() {
      var Hot = this.$refs.HotCityTitle.offsetTop;
      this.$refs.bscroll.handleHot(Hot);
    },
  },
};
</script>
<style lang="scss" scoped>
.city {
  height: 100%;
  background: #ebebeb;
  .HotCityTitle,
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
  .CityIndex {
    position: fixed;
    right: 0.05rem;
    top: 3rem;
    text-align: center;
    z-index: 6;
    li {
      width: 1rem;
      padding: 5px;
      padding-left: 0.6rem;
    }
    span {
      padding: 5px;
      padding-left: 0.25rem;
    }
  }
}
</style>