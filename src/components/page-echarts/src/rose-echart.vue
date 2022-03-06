<template>
  <div class="rose-echart">
    <CommonEchart :option="option"></CommonEchart>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import CommonEchart from '@/common/common-echart/src/common-echart.vue'
import { IEchartType } from './types'

const props = defineProps<{
  roseData: IEchartType[]
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
        name: '类别数据',
        type: 'pie',
        radius: [20, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
