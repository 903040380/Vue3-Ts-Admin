<template>
  <div class="pie-echart">
    <CommonEchart :option="option"></CommonEchart>
  </div>
</template>

<script lang="ts" setup>
import CommonEchart from '@/common/common-echart/src/common-echart.vue'
import { computed, defineProps } from 'vue'
import { IEchartType } from './types'

const props = defineProps<{
  pieData: IEchartType[]
}>()

const option = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
