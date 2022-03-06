<template>
  <div class="line-echart">
    <CommonEchart :option="option"></CommonEchart>
  </div>
</template>

<script lang="ts" setup>
import CommonEchart from '@/common/common-echart/src/common-echart.vue'
import { computed, defineProps } from 'vue'

const props = defineProps<{
  xLabels: string[]
  values: any[]
}>()

const option = computed(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '分类销量',
        type: 'line',
        stack: 'zongl',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.values
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
