<template>
  <div class="common-tab">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="header-handler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      v-bind="childrenProps"
      @selection-change="handleSelectChange"
      :data="listData"
      style="width: 100%"
      border
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="45"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.property">
        <el-table-column
          :show-overflow-tooltip="true"
          v-bind="propItem"
          align="center"
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">{{
              scope.row[propItem.property]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          class="el-pagination"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          size="small"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    showFooter: {
      type: Boolean,
      default: true
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    listCount: {
      type: Number,
      default: 0
    },
    listData: {
      type: Array as PropType<any[]>,
      default: () => [],
      required: true
    },
    propList: {
      type: Array as PropType<any[]>,
      default: () => [],
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  emit: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      emit('selectionChange', value)
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    return { handleSelectChange, handleSizeChange, handleCurrentChange }
  }
})
</script>

<style scoped lang="less">
.header {
  height: 45px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
}
.footer {
  margin-top: 15px;
  display: flex;
  flex-direction: row-reverse;
}
</style>
