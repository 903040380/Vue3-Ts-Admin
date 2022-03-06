<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <CommonCard title="分类商品数量(饼图)">
          <PieEchart :pieData="categoryGoodsCount"></PieEchart>
        </CommonCard>
      </el-col>
      <el-col :span="10">
        <CommonCard title="不同城市商品数量">
          <MapEchart :mapData="addressGoodsSale"></MapEchart>
        </CommonCard>
      </el-col>
      <el-col :span="7">
        <CommonCard title="分类商品数量(玫瑰图)">
          <RoseEchart :roseData="categoryGoodsCount"></RoseEchart>
        </CommonCard>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: 12px">
      <el-col :span="12">
        <CommonCard title="分类商品的销量">
          <LineEchart v-bind="categoryGoodsSale"></LineEchart>
        </CommonCard>
      </el-col>
      <el-col :span="12">
        <CommonCard title="分类商品的收藏">
          <BarEchart v-bind="categoryGoodsFavor"></BarEchart>
        </CommonCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import CommonCard from '../../../../common/common-card/src/common-card.vue'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'
export default defineComponent({
  name: 'dashboard',
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return {
          name: item.name,
          value: item.goodsCount
        }
      })
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }

      return { xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }

      return { xLabels, values }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return {
          name: item.address,
          value: item.count
        }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  },
  components: { CommonCard, PieEchart, RoseEchart, LineEchart, MapEchart }
})
</script>

<style scoped></style>
