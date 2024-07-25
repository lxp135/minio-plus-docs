<script setup lang="ts">
import minioPlusHelper from 'minio-plus-helper'
import { reactive, ref } from 'vue'

import type { UploadProps } from 'element-plus'
import type { FileState } from 'minio-plus-helper'

type fileListType = {
  name: string
  key: string
}
const fileList = ref<fileListType[]>([])

const state = reactive({
  loginUser: 'mockUser01',
  permision: false,
})
const beforeUploadHandle: UploadProps['beforeUpload'] = async (uploadFile) => {
  const file: Partial<FileState> = await minioPlusHelper.uploadFile(uploadFile, {
    authorization: state.loginUser,
    isPrivate: state.permision,
  })
  fileList.value.push({
    name: file.fileName,
    key: file.fileKey,
  })
  return false
}

const handleDownload: UploadProps['onPreview'] = async (file) => {
  await minioPlusHelper.downloadFile({ fileName: file.name, fileKey: file.key }, {
    authorization: state.loginUser,
    isPrivate: state.permision,
  })
}
</script>

<template>
  <el-card style="height: 203px;margin-bottom: 16px;">
    <template #header>
      入参
    </template>
    <el-form :model="state" label-width="auto" style="max-width: 600px">
      <el-form-item label="登录用户">
        <el-input v-model="state.loginUser" />
      </el-form-item>
      <el-form-item label="文件权限">
        <el-radio-group v-model="state.permision">
          <el-radio :value="true">
            私有
          </el-radio>
          <el-radio :value="false">
            公用
          </el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </el-card>
  <el-upload v-model:file-list="fileList" :before-upload="beforeUploadHandle" :on-preview="handleDownload">
    <el-button type="primary">
      Click to upload
    </el-button>
  </el-upload>
</template>

<style scoped lang="scss"></style>
