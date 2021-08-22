export default {
    name: "cinema",
    path: "/cinema",
    component: () => import("@/views/cinema"),
    meta: {
        tabBarFlag: true
    }
}