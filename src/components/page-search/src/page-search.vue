<template>
  <div class="page-search">
    <CommonForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>

      <template #footer>
        <div class="footer">
          <el-button type="primary" @click="handleResetClick">
            <Refresh
              style="width: 1em; height: 1em; margin-right: 8px"
            ></Refresh>
            重置
          </el-button>
          <el-button @click="handleQueryClick" type="primary">
            <Search style="width: 1em; height: 1em; margin-right: 8px"></Search>
            搜索
          </el-button>
        </div>
      </template>
    </CommonForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CommonForm from '@/common/common-form/src/common-form.vue'
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = []
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    const handleResetClick = () => {
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  },
  components: { CommonForm }
})
</script>

<style scoped lang="less">
.header {
  color: red;
}
.footer {
  text-align: right;
  padding: 0 20px 20px 0;
}
</style>
