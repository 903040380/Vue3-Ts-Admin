<template>
  <div class="nav-header">
    <component
      style="width: 2em; height: 2em; margin-right: 8px"
      :is="isFold"
      @click="handleFoldClick"
    ></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    let isFold = ref('Fold')
    const handleFoldClick = () => {
      isFold.value === 'Fold'
        ? (isFold.value = 'Expand')
        : (isFold.value = 'Fold')
      console.log('foldclick', isFold.value)

      emit('foldChange', isFold.value)
    }
    return { isFold, handleFoldClick }
  }
})
</script>

<style scoped lang="less"></style>
