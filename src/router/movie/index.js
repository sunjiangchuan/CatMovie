export default {
    name: "movie",
    path: "/movie",
    component: () => import("@/views/movie"),
    children: [{
            name: "being",
            path: "being",
            component: () => import("../../compoents/being"),
            meta: {
                tabBarFlag: true
            }
        },
        {
            name: "soon",
            path: "soon",
            component: () => import("../../compoents/soon"),
            meta: {
                tabBarFlag: true
            }
        },
        {
            path: "/movie",
            redirect: "being"
        }
    ]
}