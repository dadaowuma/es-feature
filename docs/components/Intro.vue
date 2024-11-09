<template>
  <ElTabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <ElTabPane label="英文" name="en">{{ getContent('en') }}</ElTabPane>
    <ElTabPane label="中文" name="zh">{{ getContent('zh') }}</ElTabPane>
  </ElTabs>
</template>
<script setup lang="ts">
  import { ref, defineProps } from 'vue'
  import type { TabsPaneContext } from 'element-plus'
  import { ElTabs, ElTabPane } from 'element-plus'
  const props = defineProps({
    content: Object,
  })
  const activeName = ref('en')
  const getContent = (type) => {
    return (props.content && props.content[type]) || ''
  }
  const handleClick = (tab: TabsPaneContext, event: Event) => {}
</script>
<style>
  .demo-tabs > .el-tabs__content {
    /* padding: 32px; */
    color: #6b778c;
    /* font-size: 32px; */
    /* font-weight: 600; */
  }
</style>
