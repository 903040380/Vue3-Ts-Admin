<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside class="aside" :width="isCollapse ? '60px' : '210px'">
        <NavMenu :collapse="isCollapse"></NavMenu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @fold-change="handleFoldChange"></NavHeader>
        </el-header>
        <el-main class="page-content">
          <div class="content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
export default defineComponent({
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: string) => {
      isFold === 'Expand'
        ? (isCollapse.value = true)
        : (isCollapse.value = false)
    }
    return { handleFoldChange, isCollapse }
  },
  components: {
    NavMenu,
    NavHeader
  }
})
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  .main-content {
    width: 100%;
    height: 100%;
    .aside {
      background-color: #001529;
    }
    .page {
      height: 100%;
      .page-header {
        height: 48px;
      }
      .page-content {
        background-color: #f0f2f5;
        text-align: center;
        color: #333;
        .content {
          background-color: #fff;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
