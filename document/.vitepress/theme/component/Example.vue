<script setup lang="ts">
type Props = {
  /** 组件名 */
  name: string
  /** 源代码 */
  code: string
  /** 格式化后的代码（表现为 HTML） */
  html: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="component-doc">
    <div class="preview">
      <component :is="props.name" />
    </div>
  </div>
</template>

<style>
.component-doc {
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}

.preview {
  padding: 1rem;
}
</style>
