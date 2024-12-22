<script>
import RolesList from "./RolesList.vue";
import "element-plus/dist/index.css"
import {Avatar, Box} from "@element-plus/icons-vue";
import {useStore} from "vuex";
import router from "../router/index.js";

export default {
  name: "Layout",
  components: {Box, Avatar, RolesList},
  setup() {
    const store = useStore();
    const handleClickExit = () => {
      store.commit("setUserInfo", {userName: "", password: ""});
      localStorage.removeItem("loginData");
      router.push({
        path: "/login"
      });
    }
    return {
      handleClickExit,
    }
  }
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-header">
        <div class="header-wrapper">
          <div class="title-wrapper">
            <img alt="logo" src="../assets/vue.svg"/>
            <h2 class="title">商品后台管理系统</h2>
          </div>
          <el-button type="danger" @click="handleClickExit">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside class="common-aside" width="200px">
          <el-menu
              :router="true"
              background-color="#none"
              text-color="#fff"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Avatar/>
                </el-icon>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user">账号列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <Box/>
                </el-icon>
                <span>角色管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/role">角色列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
el-container {
  height: 100vh;
  overflow: hidden;
}

.common-header {
  background: rgb(50, 55, 64);
}

.common-aside {
  background: rgb(48, 55, 65);
  height: 100vh;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-wrapper {
  display: flex;
  gap: 10px;
}

.title {
  color: white;
  font-size: 20px;
}

</style>