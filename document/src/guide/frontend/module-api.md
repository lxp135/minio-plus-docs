# API

| 方法名       | 说明     | 类型                                                                                     |
| ------------ | -------- | ---------------------------------------------------------------------------------------- |
| uploadFile   | 上传文件 | `(file: File, option?: Partial<Option>, callback?: CallbackOption)=> Promise<FileState>` |
| downloadFile | 下载文件 | `(file: { key: string, name: string }, option?: Partial<Option>)=>void`                  |

# 类型说明

```typescript

export type CallbackOption = {
  beforeInitFile?: (    //文件获取，解析完成后，调用init接口前调用
    file: Partial<FileType> //解析后的文件信息
    ) => void
  afterInitFile?: (     //init接口返回信息后调用
    file: Partial<FileType>,  //文件信息
    fileState: Partial<FileState> //init接口返回的文件信息
    ) => void
  beforeUploadPartList?: (    //上传分片前调用
    file: Partial<FileType>,  //文件信息
    fileState: Partial<FileState>,  //init接口返回的文件信息
    index: number,    //分片序号
    chunkFile: Blob   //分片的数据
    ) => void
  afterUploadPartList?: (     //上传分片后调用
    file: Partial<FileType>,  //文件信息
    fileState: Partial<FileState>,  //init接口返回的文件信息
    index: number,    //分片序号
    chunkFile: Blob   //分片的数据
    ) => void
  beforeCompleteFile?: (     //合并分片前调用
    file: Partial<FileType>, //文件信息
    fileState: Partial<FileState>,  //init接口返回的文件信息
    partMd5List: string[]    //所有分片的MD5值合集
    ) => void
  afterCompleteFile?: (       //合并分片后调用
    file: Partial<FileType>,  //文件信息
    fileState: Partial<FileState>,  //init接口返回的文件信息
    partMd5List: string[]   //所有分片的MD5值合集
    ) => void
  fileUploadFinish?: (      //文件上传完成后调用
    file: Partial<FileType>,  //文件信息
    fileState: Partial<FileState> //init接口返回的文件信息
    ) => void
}

export type Option = {
  authorization: string   //权限信息，用于确定文件的上传和访问者，默认''
  isPrivate: boolean      //是否私有 false:否 true:是,默认false
  concurrentLimit: number //分片网络请求并发数，默认5
  downloadURL: string     //下载文件接口地址，默认'/api/storage/download/'
  initURL: string         //上传任务初始化接口地址，默认'/api/storage/upload/init'
  shardURL: string        //文件预分片接口地址，默认'/api/storage/upload/sharding'
  completeURL: string     //合并分片接口地址，默认'/api/storage/upload/complete/'
}

export type FilePart = {
  startPosition: number   //分片开始位置
  endPosition: number     //分片结束位置
  uploadId: string        //上传ID
  url: string             //上传URL
}

export type FileState = {
  id?: string             //文件ID
  fileKey?: string        //文件Key
  fileMimeType?: string   //文件MIME类型
  fileSuffix?: string     //文件后缀
  partList: FilePart[]    //文件分片信息
  partSize?: number       //分片大小
  partCount?: number      //分片数量
  isDone?: boolean        //是否秒传
  fileName?: string       //文件名称
}

export type FileType = {
  file: File              //文件数据
  fileMd5: string         //文件MD5值
  fileSize: number        //文件大小
  fileName: string        //文件名称
}
```
