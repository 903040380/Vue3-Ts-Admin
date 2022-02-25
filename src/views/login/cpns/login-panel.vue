<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="currentTab" type="border-card" class="tabs" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon class="icon">
              <Avatar></Avatar>
            </el-icon>
            账号登录
          </span>
        </template>
        <LoginAccount ref="accountRef"></LoginAccount>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon class="icon">
              <Cellphone></Cellphone>
            </el-icon>
            手机登录
          </span>
        </template>
        <LoginPhone ref="phoneRef"></LoginPhone>
      </el-tab-pane>
    </el-tabs>
    <div class="check-box">
      <el-checkbox
        type="primary"
        v-model="isRemember"
        label="记住密码"
      ></el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-button" @click="loginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  setup() {
    const isRemember = ref<boolean>(false)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')

    const loginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isRemember.value)
      } else {
        console.log('phoneAction')
      }
    }

    return {
      isRemember,
      loginClick,
      accountRef,
      phoneRef,
      currentTab
    }
  },
  components: {
    LoginAccount,
    LoginPhone
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 110px;
  .title {
    text-align: center;
  }
  .tabs {
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
  .check-box {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .login-button {
    width: 100%;
    margin-top: 5px;
  }
}
</style>
