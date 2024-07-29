import SparkMD5 from 'spark-md5'

export type CallbackOption = {
  beforeInitFile?: (file: Partial<FileType>) => void
  afterInitFile?: (file: Partial<FileType>, fileState: Partial<FileState>) => void
  beforeUploadPartList?: (file: Partial<FileType>, fileState: Partial<FileState>, index: number, chunkFile: Blob) => void
  afterUploadPartList?: (file: Partial<FileType>, fileState: Partial<FileState>, index: number, chunkFile: Blob) => void
  beforeCompleteFile?: (file: Partial<FileType>, fileState: Partial<FileState>, partMd5List: string[]) => void
  afterCompleteFile?: (file: Partial<FileType>, fileState: Partial<FileState>, partMd5List: string[]) => void
  fileUploadFinish?: (file: Partial<FileType>, fileState: Partial<FileState>) => void
}

export type Option = {
  authorization: string
  isPrivate: boolean
  concurrentLimit: number
  downloadURL: string
  initURL: string
  shardURL: string
  completeURL: string
}

export type FilePart = {
  startPosition: number
  endPosition: number
  uploadId: string
  url: string
}

export type FileState = {
  id?: string
  fileKey?: string
  fileMimeType?: string
  fileSuffix?: string
  partList: FilePart[]
  partSize?: number
  partCount?: number
  isDone?: boolean
  fileName?: string
}

export type FileType = {
  file: File
  fileMd5: string
  fileSize: number
  fileName: string
}

let _state: FileState = {
  partList: [],
}

let _defaultCallbackOption: CallbackOption | undefined

let _defaultOption: Option = {
  authorization: '',
  isPrivate: false,
  concurrentLimit: 5,
  downloadURL: 'https://mpdemo.liuxp.me/storage/download/',
  initURL: 'https://mpdemo.liuxp.me/storage/upload/init',
  shardURL: 'https://mpdemo.liuxp.me/storage/upload/sharding',
  completeURL: 'https://mpdemo.liuxp.me/storage/upload/complete/',
}

let _file: Partial<FileType> = {}

async function uploadFile(file: File, option?: Partial<Option>, callback?: CallbackOption): Promise<FileState> {
  _initData()
  _defaultOption = { ..._defaultOption, ...option }
  _defaultCallbackOption = callback
  await _initFile(file)
  return Promise.resolve(_state)
}

async function downloadFile(file: { key: string, name: string }, option?: Partial<Option>) {
  _initData()
  _defaultOption = { ..._defaultOption, ...option }
  fetch(`${_defaultOption.downloadURL}${file.key}`, {
    method: 'GET',
    headers: {
      Authorization: _defaultOption.authorization,
    },
    redirect: 'follow',
  }).then((response) => {
    const url = response.url
    const link = document.createElement('a')
    link.href = url
    link.download = file.name
    link.click()
  }).catch((err) => {
    throw new Error(err)
  })
}

async function _initData() {
  _defaultOption = {
    authorization: '',
    isPrivate: false,
    concurrentLimit: 5,
    downloadURL: 'https://mpdemo.liuxp.me/storage/download/',
    initURL: 'https://mpdemo.liuxp.me/storage/upload/init',
    shardURL: 'https://mpdemo.liuxp.me/storage/upload/sharding',
    completeURL: 'https://mpdemo.liuxp.me/storage/upload/complete/',
  }
  _defaultCallbackOption = undefined
  _state = {
    partList: [],
  }
  _file = {}
}

async function _initFile(file: File) {
  _file.file = file
  _file.fileMd5 = await _getFileMd5(file) as string
  _file.fileSize = file.size
  _file.fileName = file.name

  if (_defaultCallbackOption?.beforeInitFile) {
    _defaultCallbackOption.beforeInitFile(_file)
  }
  try {
    const initResponse = await fetch(_defaultOption.initURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': _defaultOption.authorization,
      },
      body: JSON.stringify({
        fileMd5: _file.fileMd5,
        fullFileName: _file.fileName,
        fileSize: _file.fileSize,
        isPrivate: _defaultOption.isPrivate,
      }),
    })

    const initData = await initResponse.json()
    _state = { ..._state, ...initData.data }
    if (_defaultCallbackOption?.afterInitFile) {
      _defaultCallbackOption.afterInitFile(_file, _state)
    }
    if (initData.data.isDone) {
      if (_defaultCallbackOption?.fileUploadFinish) {
        _defaultCallbackOption?.fileUploadFinish(_file, _state)
      }
      return
    }
    await _controlConcurrentRequests()
    await _completeUpload()
  }
  catch (err) {
    throw new Error(err)
  }
}

async function _controlConcurrentRequests() {
  const concurrentLimit = 5 // 并发请求数量限制
  const results: any[] = [] // 保存请求结果的数组
  let index = 0

  while (index < _state.partList?.length) {
    const currentBatch = _state.partList.slice(index, index + _defaultOption.concurrentLimit) // 从数据数组中取出当前并发数量的请求
    const requests = currentBatch.map((item, idx) => new Promise((res, rej) => {
      const _chunkFile = _file.file?.slice(item.startPosition, item.endPosition)
      if (_defaultCallbackOption?.beforeUploadPartList) {
        _defaultCallbackOption.beforeUploadPartList(_file, _state, index + idx, _chunkFile!)
      }
      fetch(item.url, {
        method: 'PUT',
        body: _chunkFile,
      }).then(() => {
        if (_defaultCallbackOption?.afterUploadPartList) {
          _defaultCallbackOption.afterUploadPartList(_file, _state, index + idx, _chunkFile!)
        }
        res(_state)
      }).catch((err) => {
        rej(err)
      })
    }))
    const responses = await Promise.allSettled(requests)
    const groupResults = responses.map((response) => {
      if (response.status === 'fulfilled') {
        return response.value
      }
      else {
        return response.reason
      }
    })
    results.push(groupResults)
    index += concurrentLimit
  }
  return results
}

async function _completeUpload() {
  const shardResponse = await fetch(_defaultOption.shardURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': _defaultOption.authorization,
    },
    body: JSON.stringify({
      fileSize: _file.fileSize,
    }),
  })
  const shardData = await shardResponse.json()
  const partMd5List: string[] = []
  for (let i = 0; i < _state.partCount!; i++) {
    const item = shardData.data.partList[i]
    const _chunkFile = _file.file?.slice(item.startPosition, item.endPosition)
    const partMd5 = await _getFileMd5(_chunkFile!)
    partMd5List.push(partMd5)
  }
  if (_defaultCallbackOption?.beforeCompleteFile) {
    _defaultCallbackOption?.beforeCompleteFile(_file, _state, partMd5List)
  }
  await fetch(`${_defaultOption.completeURL}${_state.fileKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': _defaultOption.authorization,
    },
    body: JSON.stringify({
      partMd5List,
    }),
  })
  if (_defaultCallbackOption?.afterCompleteFile) {
    _defaultCallbackOption?.afterCompleteFile(_file, _state, partMd5List)
  }
  if (_defaultCallbackOption?.fileUploadFinish) {
    _defaultCallbackOption?.fileUploadFinish(_file, _state)
  }
}

/**
 * 获取文件MD5
 * @param file
 * @returns {Promise<string>}
 */
function _getFileMd5(file: Blob | File): Promise<string> {
  const fileReader = new FileReader()
  fileReader.readAsBinaryString(file as Blob)
  const spark = new SparkMD5()
  return new Promise((resolve) => {
    fileReader.onload = (e) => {
      spark.appendBinary(e.target?.result as string)
      resolve(spark.end(false))
    }
  })
}

export default {
  uploadFile,
  downloadFile,
}
