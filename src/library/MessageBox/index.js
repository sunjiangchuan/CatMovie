import MessageBox from "./index.vue"
import Vue from "vue"

export const messageBox = (function () {
    let defaultInfo = {
        text: "",
        content: "",
        flag: false,
        OK: "",
        NO: "",
        handleOK: function () {},
        handleNO: function () {}
    }
    //通过继承 生成一个新的vue组件
    let MyComponent = Vue.extend(MessageBox);


    return function (options) {
        for (var key in options) {
            defaultInfo[key] = options[key];
        }

        let vm = new MyComponent({
            el: document.createElement("div"),
            data: defaultInfo,
            methods: {
                handleMessageOK() {
                    defaultInfo.handleOK && defaultInfo.handleOK();
                    document.body.removeChild(vm.$el);
                },
                handleMessageNO() {
                    defaultInfo.handleNO && defaultInfo.handleNO();
                    document.body.removeChild(vm.$el)
                },
            }
        })
        document.body.appendChild(vm.$el)
    }
})()