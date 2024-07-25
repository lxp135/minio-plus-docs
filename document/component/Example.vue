<script lang="ts" setup>
import { UploadFilled } from '@element-plus/icons-vue'
import minioPlusHelper from 'minio-plus-helper'
import { reactive, ref } from 'vue'

import type { UploadProps } from 'element-plus'
import type { FileState, FileType } from 'minio-plus-helper'

type LogItem = {
  time: string
  title: string
  msg?: any
  content?: any
}

type FileItem = {
  name?: string
  url?: string
  key?: string
}

type PartItem = {
  percentage: number
}

type State = {
  loginUser: string
  permision: boolean
  logList: LogItem[]
  fileList: FileItem[]
  partList: PartItem[]
}
const state = reactive<State>({
  loginUser: 'mockUser01',
  permision: false,
  logList: [],
  fileList: [],
  partList: [],
})

const showLog = ref(false)
const logContent = ref()

function beforeInitFile(file: Partial<FileType>) {
  insertLog('文件初始化', file.fileName, file)
}
function afterInitFile(file: Partial<FileType>, fileState: Partial<FileState>) {
  insertLog('文件初始化结果', file.fileName, fileState)
  state.partList = []
  if (fileState.partList) {
    fileState.partList.map(() => {
      state.partList.push({
        percentage: 0,
      })
      return true
    })
  }
}
function beforeUploadPartList(file: Partial<FileType>, fileState: Partial<FileState>, index: number, chunkFile: Blob) {
  insertLog('文件分片', file.fileName, chunkFile)
}
function afterUploadPartList(file: Partial<FileType>, fileState: Partial<FileState>, index: number, chunkFile: Blob) {
  insertLog(`第${index}分片上传完成`, file.fileName, chunkFile)
  if (state.partList[index]) {
    state.partList[index].percentage = 100
  }
}

function beforeCompleteFile(file: Partial<FileType>, fileState: Partial<FileState>, partMd5List: string[]) {
  insertLog('文件合并前', file.fileName, partMd5List)
}
function afterCompleteFile(file: Partial<FileType>, fileState: Partial<FileState>, partMd5List: string[]) {
  insertLog('文件合并完成', file.fileName, partMd5List)
}
function fileUploadFinish(file: Partial<FileType>, fileState: Partial<FileState>) {
  insertLog('文件上传完成', file.fileName, fileState)
  state.fileList.push({
    name: file.fileName,
    url: `https://mpdemo.liuxp.me/storage/preview/${fileState.fileKey}`,
    key: fileState.fileKey,
  })
}

const beforeUploadHandle: UploadProps['beforeUpload'] = async (uploadFile) => {
  minioPlusHelper.uploadFile(uploadFile, {
    authorization: state.loginUser,
    isPrivate: state.permision,
  }, {
    beforeInitFile,
    afterInitFile,
    beforeUploadPartList,
    afterUploadPartList,
    beforeCompleteFile,
    afterCompleteFile,
    fileUploadFinish,
  })
  return false
}

function handleShowLog(log: LogItem) {
  logContent.value = log.content
  showLog.value = true
}

function handlePreview(file) {
  minioPlusHelper.downloadFile(file, {
    authorization: state.loginUser,
    isPrivate: state.permision,
  })
}

function insertLog(title: string, msg: any, content?: any) {
  const date = new Date()

  state.logList.push({
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    title,
    msg,
    content,
  })
}
</script>

<template>
  <div style="display: flex;gap:20px;height: 100%;justify-content: center;min-width: 1000px;margin-top: 64px;">
    <div style="display: flex;gap:20px;width: 400px;min-width: 400px;flex-direction: column;">
      <el-card style="height: 231px;">
        <el-upload class="upload-demo" drag :show-file-list="false" :before-upload="beforeUploadHandle">
          <el-icon class="el-icon--upload">
            <UploadFilled />
          </el-icon>
          <div class="el-upload__text">
            拖拽文件到这里，或者 <em>点击上传文件</em>
          </div>
        </el-upload>
      </el-card>
      <el-card style="height: 203px;">
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
      <el-card style="flex:1;overflow-y: auto;height: 346px;min-height:346px;max-height: 346px;">
        <template #header>
          上传进度
        </template>
        <el-form label-width="auto" style="max-width: 600px">
          <el-form-item v-for="(item, index) in state.partList" :key="index" :label="`part${index + 1}`">
            <el-progress style="flex:1" :percentage="item.percentage" :stroke-width="15" :duration="5" striped
              striped-flow />
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div style="display: flex;gap:20px;flex:1;max-width:576px;flex-direction: column;">
      <el-card style="height: 300px;overflow-y: auto;">
        <template #header>
          已上传文件列表
        </template>
        <el-upload v-model:file-list="state.fileList" :on-preview="handlePreview" list-type="picture" />
      </el-card>
      <el-card style="flex:1;overflow-y: auto;height: 500px;min-height: 500px;max-height: 500px;">
        <template #header>
          上传日志
        </template>
        <el-timeline style="max-width: 600px">
          <el-timeline-item v-for="(item, index) in state.logList" :key="index" style="cursor: pointer"
            :timestamp="item.time" @click="handleShowLog(item)">
            {{ `${item.title}:${item.msg}` }}
          </el-timeline-item>
        </el-timeline>
      </el-card>
    </div>
    <el-dialog v-model="showLog">
      <div>
        {{ logContent }}
      </div>
    </el-dialog>
  </div>
</template>
