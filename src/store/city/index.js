import {
    getCityList
} from "@/api/api.js";

export default {
    state: {
        HotCity: [],
        CityList: []
    },
    mutations: {
        getMutationsCityList(state, params) {
            state.HotCity = params.HotCity;
            state.CityList = params.CityList;
        }
    },
    actions: {
        async getActionsCityList({
            commit
        }) {
            let data = await getCityList();
            var hotCity = []; //热门城市
            var cityList = []; //城市列表

            // 热门城市筛选
            for (var key in data) {
                if (data[key].id <= 52) {
                    hotCity.push(data[key])
                }
            }

            // 城市列表筛选


            for (var key in data) {
                var firstLetter = data[key].py.slice(0, 1).toUpperCase();
                if (toIndex(firstLetter)) {
                    for (var i = 0; i < cityList.length; i++) {
                        if (cityList[i].index == firstLetter) {
                            cityList[i].list.push(data[key]);
                            break;
                        }
                    }
                } else {
                    cityList.push({
                        index: firstLetter,
                        list: [data[key]]
                    })
                }
            }

            // for (var i = 0; i < data.length; i++) {
            //     var firstLetter = data[i].py.slice(0, 1).toUpperCase();
            //     if (toIndex(firstLetter)) {
            //         for (var j = 0; j < cityList.length; j++) {
            //             if (cityList[j].index == firstLetter) {
            //                 cityList[j].list.push(data[i]);
            //                 break;
            //             }
            //         }
            //     } else {
            //         cityList.push({
            //             index: firstLetter,
            //             list: [data[i]]
            //         })
            //     }
            // }

            // 判断当前首字母是否在cityList中存在
            function toIndex(firstLetter) {
                for (var k = 0; k < cityList.length; k++) {
                    if (firstLetter == cityList[k].index) {
                        return true;
                    }
                }
                return false;
            }

            cityList.sort((a, b) => {
                if (a.index > b.index) {
                    return 1
                } else {
                    return -1
                }
            })

            commit("getMutationsCityList", {
                HotCity: hotCity,
                CityList: cityList
            })
        }
    },
    namespaced: true
}