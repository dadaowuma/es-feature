<script setup>
  import { ref, reactive } from 'vue'
  import {
    ElButton,
    ElTimeline,
    ElTimelineItem,
    ElAvatar,
    ElText,
    ElTag,
    ElBadge,
  } from 'element-plus'
  import features from './features.js'
</script>

<template>
  <ElTimeline style="max-width: 600px">
    <ElTimelineItem
      v-for="(activity, index) in features"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
      placement="top"
    >
      <div class="timeline-item-feature-content">
        <div class="timeline-item-feature-label">{{ activity.content }}</div>
        <div v-for="item of activity.list" :key="item.label">
          <ElBadge
            value=""
            :is-dot="true"
            :offset="[0, 0]"
            :badge-style="{ left: '-14px', top: '6px' }"
            v-if="item.badge === 'new'"
          >
            <ElText>{{ item.label }}</ElText>
          </ElBadge>
          <ElText v-else>{{ item.label }}</ElText>
          <ElTag v-for="tag of item.tag" :key="tag" size="small">{{
            tag
          }}</ElTag>
        </div>
      </div>
    </ElTimelineItem>
  </ElTimeline>
</template>

<style module>
  div {
  }
</style>

<style>
  .el-timeline li {
    list-style: none;
  }

  .timeline-item-feature-content {
  }

  .timeline-item-feature-label {
    font-weight: bold;
  }
</style>
