<script setup lang="ts">
import minioPlusHelper from 'minio-plus-helper'
import { ref } from 'vue'

import type { UploadProps } from 'element-plus'
import type { FileState } from 'minio-plus-helper'

type fileListType = {
  name: string
  url: string
  key: string
}
const fileList = ref<fileListType[]>([])
const beforeUploadHandle: UploadProps['beforeUpload'] = async (uploadFile) => {
  const file: Partial<FileState> = await minioPlusHelper.uploadFile(uploadFile)
  fileList.value.push({
    name: file.fileName,
    key: file.fileKey,
  })
  return false
}

const handleDownload: UploadProps['onPreview'] = async (file) => {
  await minioPlusHelper.downloadFile({ fileName: file.name, fileKey: file.key })
}
</script>

<template>
  <el-upload v-model:file-list="fileList" :before-upload="beforeUploadHandle" :on-preview="handleDownload">
    <el-button type="primary">
      Click to upload
    </el-button>
  </el-upload>
</template>

<style scoped lang="scss"></style>
