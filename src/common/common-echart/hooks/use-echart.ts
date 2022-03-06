import * as echarts from 'echarts'
import ChinaMapData from '../data/china.json'
echarts.registerMap('china', ChinaMapData)

export default function useEchart(el: HTMLElement) {
  const echartsInstance = echarts.init(el)
  const setOption = (option: echarts.EChartsOption) => {
    echartsInstance.setOption(option)
  }
  const updateResize = () => {
    echartsInstance.resize()
  }
  window.addEventListener('resize', () => {
    updateResize()
  })
  return {
    echartsInstance,
    setOption,
    updateResize
  }
}
