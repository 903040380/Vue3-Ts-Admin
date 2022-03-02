<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">Vue3+Ts</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 一级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单展开标题 -->
          <el-sub-menu class="el-sub-menu" :index="item.id + ''">
            <template #title>
              <component
                v-if="item.icon"
                :is="iconCut(item.icon)"
                style="width: 1em; height: 1em; margin-right: 8px"
              ></component>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                @click="handleItemClick(subitem)"
                class="el-menu-item"
                :index="subitem.id + ''"
              >
                <template #title>
                  <component
                    v-if="subitem.icon"
                    :is="iconCut(subitem.icon)"
                  ></component>
                  <span>{{ subitem.name }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <template v-else-if="item.type === 2">
          <el-menu-item class="el-menu-item" :index="item.id + ''">
            <template #title>
              <component v-if="item.icon" :is="iconCut(item.icon)"></component>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import { pathMapMenu } from '@/utils/map-menus'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const userMenus = computed(() => store.state.login.userMenus)
    const currentPath = route.path
    const menu = pathMapMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + '')
    const iconCut = (name: string) => {
      let stack: any = []
      let result: any = []
      let count = -1
      while (name.at(count) != '-' && name.at(count)) {
        stack.push(name.at(count))
        count--
      }
      while (stack.length > 0) {
        result.push(stack.pop())
      }
      result[0] = result[0].toUpperCase()
      if (name === 'el-icon-chat-line-round') {
        return 'ChatLineRound'
      }
      return result.join('')
    }
    const handleItemClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return { userMenus, iconCut, handleItemClick, defaultValue }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  width: 100%;
  .logo {
    height: 28px;
    padding: 12px 10px 8px 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 22px 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }
}
</style>
