export default {
    state: {
        userInfo: {
            userName: localStorage.getItem('loginData') && JSON.parse(localStorage.getItem('loginData')).userName,
            password: localStorage.getItem('loginData') && JSON.parse(localStorage.getItem('loginData')).password,
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    }
}