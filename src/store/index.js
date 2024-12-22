import {createStore} from "vuex";
import uInfo from "./state/userinfo.state.js"

export default createStore({
    // 全局状态初始化
    state: {},

    // 计算需要得到的数据
    getters: {},

    // 更新状态的方法
    mutations: {},

    // 可以异步操作，更改数据还是传递到mutations去更改
    actions: {},
    modules: {
        uInfo
    },
})