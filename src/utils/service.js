import axios from 'axios';
import {ElLoading, ElMessage} from "element-plus";

let loading = null;

// 使用create创建axios实例
const Service = axios.create({
    timeout: 8000,
    baseURL: 'http://XXX',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    }
})

// 请求拦截
Service.interceptors.request.use(config => {
    loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    return config;
})
// 响应拦截
Service.interceptors.response.use(response => {
    loading.close();
    return response.data;
}, error => {
    loading.close();
    ElMessage.error({
        message: "服务器错误",
        type: "error",
        duration: 2000,
    })
})