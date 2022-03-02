import { Module } from 'vuex'

import { IRootState } from '@/store/types'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'

const systemMoudle: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, userList: any) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: any) {
      state.usersCount = userCount
    },
    changeRoleList(state, roleList: any) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: any) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: any) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: any) {
      state.menuCount = menuCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const queryInfo = payload.queryInfo
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      const pageResult = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageResult.data
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    }
  }
}

export default systemMoudle
