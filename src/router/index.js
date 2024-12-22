import {createRouter, createWebHistory} from "vue-router"
import Layout from "../views/Layout.vue";
import RolesList from "../views/RolesList.vue";
import UserList from "../views/UserList.vue";
import Login from "../views/Login.vue";
import store from "../store/index.js";

const routes = [
    {
        path: "/login",
        name: 'login',
        component: Login
    },
    {
        path: "/",
        name: "layout",
        component: Layout,
        redirect: "/index",  // 如果是根目录，直接重定向到index
        // 嵌套路由
        children: [
            {
                path: "/role",
                name: "role",
                component: RolesList
            },
            {
                path: "/user",
                name: "user",
                component: UserList
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
    // 判断用户是否登录
    const uInfo = store.state.uInfo.userInfo;
    if (!uInfo.userName) {
        // 未登录，跳转到login页面
        if (to.path === "/login") {
            next();
            return;
        }
        next("/login")
    } else {
        next()
    }
})

export default router;