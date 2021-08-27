import Button from "./button";
import {
    messageBox
} from "./MessageBox"
let components = [Button];

let install = function (Vue) {
    components.map(component => Vue.component(component.name, component));
    Vue.prototype.$messageBox = messageBox;
}

if (typeof window != "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install
}