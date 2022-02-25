<template>
  <div class="login-phone">
    <el-form label-position="left" :rules="rules" :model="input">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="input.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model="input.code"></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/config'
export default defineComponent({
  setup() {
    const input = reactive({
      phone: '',
      code: ''
    })

    return {
      input,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.code {
  display: flex;
  button {
    margin-left: 8px;
  }
}
</style>
