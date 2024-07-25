<script setup lang="ts">
import { computed, reactive } from 'vue'

import IconCode from './IconCode.vue'
import IconCopied from './IconCopied.vue'
import IconCopy from './IconCopy.vue'

type Props = {
  /** 组件名 */
  name: string
  /** 源代码 */
  code: string
  /** 格式化后的代码（表现为 HTML） */
  html: string
}

type States = {
  copied: boolean
  visible: boolean
}

const props = defineProps<Props>()
const states = reactive<States>({
  copied: false,
  visible: false,
})
const decodedCode = computed(() => decodeURIComponent(props.code))
const decodedHtml = computed(() => decodeURIComponent(props.html))

function toggleCode() {
  states.visible = !states.visible
}

async function copyCode() {
  if (states.copied) {
    return
  }

  try {
    navigator.clipboard.writeText(decodedCode.value)
    states.copied = true
  }
  finally {
    await sleep()
    states.copied = false
  }
}

function sleep(time = 1000) {
  return new Promise(resolve => setTimeout(resolve, time))
}
</script>

<template>
  <div class="component-doc vp-raw">
    <div class="preview">
      <component :is="props.name" />
    </div>
    <div class="toolbar">
      <div class="toolbar-btn" @click="copyCode">
        <IconCopied v-if="states.copied" />
        <IconCopy v-else />
      </div>
      <div class="toolbar-btn" @click="toggleCode">
        <IconCode />
      </div>
    </div>
    <div v-show="states.visible" class="code" v-html="decodedHtml" />
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

.toolbar {
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid var(--vp-c-divider);
}

.toolbar svg {
  width: 1rem;
  height: 1rem;
}

.toolbar-btn {
  width: 38px;
  height: 100%;
  align-items: center;
  text-align: center;
  margin-left: 4px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}

.toolbar-btn:hover {
  background-color: var(--vp-c-bg-soft);
}

.code pre {
  margin: 0;
}

.code .shiki {
  padding: 1rem;
}
</style>
