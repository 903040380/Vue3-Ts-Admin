<template>
  <div class="login-account">
    <el-form ref="formRef" label-position="left" :rules="rules" :model="input">
      <el-form-item label="账号" prop="name">
        <el-input v-model="input.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="input.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import { rules } from '../config/config'
import localCache from '@/utils/cache'

import type { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    const store = useStore()
    const input = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isRemember: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isRemember) {
            localCache.setCache('name', input.name)
            localCache.setCache('password', input.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
        }

        store.dispatch('login/accountLoginAction', { ...input })
      })
    }
    return {
      input,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>
