<script>
import {reactive} from "vue";
import {useStore} from "vuex";
import router from "../router/index.js";

export default {
  name: "Login",
  setup() {
    const store = useStore();
    const data = reactive({
      userInfo: {
        userName: "",
        password: "",
      }
    })

    /**
     * 点击登录处理函数
     */
    const handleClickLogin = () => {
      store.commit("setUserInfo", data.userInfo);
      localStorage.setItem("loginData", JSON.stringify(data.userInfo));
      router.push(
          {
            path: "user"
          }
      )
    }

    /**
     * 点击重置处理函数
     */
    const handleClickReset = () => {
      data.userInfo.userName = "";
      data.userInfo.password = "";
    }

    return {
      data, handleClickLogin, handleClickReset,
    }
  }
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-form__wrapper">
      <el-form
          ref="ruleFormRef"
          :rules="rules"
          class="demo-ruleForm"
          label-width="100px"
          status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="data.userInfo.userName" type="text"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
              v-model="data.userInfo.password" type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleClickLogin">登录
          </el-button
          >
          <el-button @click="handleClickReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  background: rgb(56, 86, 139);
  width: 100%;
  height: 100vh;
  position: relative;
}

.login-form__wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  background: #ffffff;
  transform: translate(-50%, -50%);
  padding: 30px 50px;
  border-radius: 5px;
}
</style>