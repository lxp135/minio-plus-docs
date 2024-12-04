# 文件元数据

文件元数据的数据结构设计，项目使用时，可自行扩展和设计。

## 表设计

| Name           | Type     | Length | Not Null | Virtual | Key  | Comment        |
|----------------|----------|--------|----------|---------|------|----------------|
| id             | bigint   | 20     | True     | False   | True | 自增ID           |
| file_key       | varchar  | 50     | True     | False   |      | 文件KEY          |
| file_md5       | varchar  | 50     | False    | False   |      | 文件MD5值         |
| file_name      | varchar  | 255    | True     | False   |      | 文件名            |
| file_mime_type | varchar  | 128    | False    | False   |      | MIME类型         |
| file_suffix    | varchar  | 20     | False    | False   |      | 文件后缀           |
| file_size      | bigint   | 20     | False    | False   |      | 文件大小           |
| is_preview     | tinyint  | 1      | False    | False   |      | 预览图 0:无 1:有    |
| is_private     | tinyint  | 1      | False    | False   |      | 是否私有 0:否 1:是   |
| bucket         | varchar  | 20     | True     | False   |      | 存储桶            |
| bucket_path    | varchar  | 20     | True     | False   |      | 存储桶路径          |
| upload_id      | varchar  | 255    | False    | False   |      | 上传任务id         |
| is_finished    | tinyint  | 1      | True     | False   |      | 状态 0:未完成 1:已完成 |
| is_part        | tinyint  | 1      | False    | False   |      | 是否分块 0:否 1:是   |
| part_number    | int      | 4      | False    | False   |      | 分块数量           |
| create_time    | datetime |        | True     | False   |      | 创建时间           |
| create_user    | varchar  | 255    | True     | False   |      | 创建用户           |
| update_time    | datetime |        | True     | False   |      | 更新时间           |
| update_user    | varchar  | 255    | True     | False   |      | 更新用户           |

## 部分字段解析

* file_key 文件KEY，该字段全表唯一，为自动生成的32位UUID。每次上传文件均生成新的文件KEY，即便是秒传的相同MD5文件也会生成新的文件KEY。
* file_md5 文件MD5值，该字段是文件的HASH值，用于对应实际在 minio 桶中存储的文件。
* file_name 文件名，文件上传时本地原始文件名称，含扩展名。
* file_mime_type 内容类型，根据文件名中的扩展名进行识别，对应 minio 桶中文件的 Content-Type 属性。
* file_suffix 文件后缀，即扩展名。
* bucket 和 bucket_path 存储桶和路径，用于保存文件在 minio 中存储的桶和路径，bucket + bucket_path + file_md5 即为文件在 minio 中的物理位置。
* upload_id 上传任务id，对应 minio 官方 SDK 中 uploadTaskId 字段。在进行分片上传时生成该字段，断点续传时判断是否能续传也会用到该字段。
* is_finished 状态，文件是否上传完成。

## MySQL脚本
```
CREATE TABLE `file_metadata_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `file_key` varchar(50) NOT NULL COMMENT '文件KEY',
  `file_md5` varchar(50) DEFAULT NULL COMMENT '文件md5',
  `file_name` varchar(255) NOT NULL COMMENT '文件名',
  `file_mime_type` varchar(128) DEFAULT NULL COMMENT 'MIME类型',
  `file_suffix` varchar(20) DEFAULT NULL COMMENT '文件后缀',
  `file_size` bigint(20) DEFAULT NULL COMMENT '文件大小',
  `is_preview` tinyint(1) DEFAULT '0' COMMENT '预览图 0:无 1:有',
  `is_private` tinyint(1) DEFAULT '0' COMMENT '是否私有 0:否 1:是',
  `bucket` varchar(20) NOT NULL COMMENT '存储桶',
  `bucket_path` varchar(20) NOT NULL COMMENT '存储桶路径',
  `upload_id` varchar(255) DEFAULT NULL COMMENT '上传任务id',
  `is_finished` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态 0:未完成 1:已完成',
  `is_part` tinyint(1) DEFAULT NULL COMMENT '是否分块 0:否 1:是',
  `part_number` int(4) DEFAULT NULL COMMENT '分块数量',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `create_user` varchar(255) NOT NULL COMMENT '创建用户',
  `update_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `update_user` varchar(255) NOT NULL COMMENT '更新用户',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `INDEX_KEY` (`file_key`),
  KEY `INDEX_MD5` (`file_md5`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文件元数据信息表';
```