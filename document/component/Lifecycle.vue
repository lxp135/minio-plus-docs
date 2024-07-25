<script setup lang="ts">
import minioPlusHelper from 'minio-plus-helper'
import { ref } from 'vue'

import type { UploadProps } from 'element-plus'
import type { FileState, FileType } from 'minio-plus-helper'

type fileListType = {
  name: string
  url: string
}
type LogItem = {
  time: string
  title: string
  msg?: any
  content?: any
}
const fileList = ref<fileListType[]>([])
const logList = ref<LogItem[]>([])
const beforeUploadHandle: UploadProps['beforeUpload'] = async (uploadFile) => {
  const file: Partial<FileState> = await minioPlusHelper.uploadFile(uploadFile, {}, {
    beforeInitFile,
    afterInitFile,
    beforeUploadPartList,
    afterUploadPartList,
    beforeCompleteFile,
    afterCompleteFile,
    fileUploadFinish,
  })
  fileList.value.push({
    name: file.fileName,
    url: `/api/storage/download/${file.fileKey}`,
  })
  return false
}

const handleDownload: UploadProps['onPreview'] = (file) => {
  if (file.url) {
    fetch(file.url)
      .then(response => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = file.name
        link.click()
        window.URL.revokeObjectURL(url)
      })
  }
}

function beforeInitFile(file: Partial<FileType>) {
  insertLog('文件初始化', file.fileName, file)
}
function afterInitFile(file: Partial<FileType>, fileState: Partial<FileState>) {
  insertLog('文件初始化结果', file.fileName, fileState)
}
function beforeUploadPartList(file: Partial<FileType>, fileState: Partial<FileState>, index: number, chunkFile: Blob) {
  insertLog('文件分片', file.fileName, chunkFile)
}
function afterUploadPartList(file: Partial<FileType>, fileState: Partial<FileState>, index: number, chunkFile: Blob) {
  insertLog(`第${index}分片上传完成`, file.fileName, chunkFile)
}

function beforeCompleteFile(file: Partial<FileType>, fileState: Partial<FileState>, partMd5List: string[]) {
  insertLog('文件合并前', file.fileName, partMd5List)
}
function afterCompleteFile(file: Partial<FileType>, fileState: Partial<FileState>, partMd5List: string[]) {
  insertLog('文件合并完成', file.fileName, partMd5List)
}
function fileUploadFinish(file: Partial<FileType>, fileState: Partial<FileState>) {
  insertLog('文件上传完成', file.fileName, fileState)
}

function insertLog(title: string, msg: any, content?: any) {
  const date = new Date()

  logList.value.push({
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    title,
    msg,
    content,
  })
}
</script>

<template>
  <el-upload v-model:file-list="fileList" :before-upload="beforeUploadHandle" :on-preview="handleDownload">
    <el-button type="primary">
      Click to upload
    </el-button>
  </el-upload>
  <el-card style="flex:1;overflow-y: auto;">
    <template #header>
      上传日志
    </template>
    <el-collapse>
      <el-collapse-item v-for="(item, index) in logList " :key="index" :name="index">
        <template #title>
          <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; ">
            {{ `${item.time} =>${item.title}:${item.msg}` }}
          </div>
        </template>
        {{ JSON.stringify(item.content) }}
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<style scoped lang="scss"></style>
