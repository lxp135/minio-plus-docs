# File Metadata

The data structure design of file metadata can be customized and expanded as needed for the project.

## Table Design

| Name           | Type     | Length | Not Null | Virtual | Key  | Comment                     |
|----------------|----------|--------|----------|---------|------|-----------------------------|
| id             | bigint   | 20     | True     | False   | True | Auto-increment ID           |
| file_key       | varchar  | 50     | True     | False   |      | File Key                    |
| file_md5       | varchar  | 50     | False    | False   |      | File MD5 Value              |
| file_name      | varchar  | 255    | True     | False   |      | File Name                   |
| file_mime_type | varchar  | 128    | False    | False   |      | MIME Type                   |
| file_suffix    | varchar  | 20     | False    | False   |      | File Suffix                 |
| file_size      | bigint   | 20     | False    | False   |      | File Size                   |
| is_preview     | tinyint  | 1      | False    | False   |      | Preview Available 0: No 1: Yes |
| is_private     | tinyint  | 1      | False    | False   |      | Is Private 0: No 1: Yes     |
| bucket         | varchar  | 20     | True     | False   |      | Bucket                      |
| bucket_path    | varchar  | 20     | True     | False   |      | Bucket Path                 |
| upload_id      | varchar  | 255    | False    | False   |      | Upload ID                   |
| is_finished    | tinyint  | 1      | True     | False   |      | Status 0: Incomplete 1: Complete |
| is_part        | tinyint  | 1      | False    | False   |      | Is Part 0: No 1: Yes        |
| part_number    | int      | 4      | False    | False   |      | Number of Parts             |
| create_time    | datetime |        | True     | False   |      | Creation Time               |
| create_user    | varchar  | 255    | True     | False   |      | Created By                  |
| update_time    | datetime |        | True     | False   |      | Update Time                 |
| update_user    | varchar  | 255    | True     | False   |      | Updated By                  |

## MySQL Script
```
CREATE TABLE `file_metadata_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `file_key` varchar(50) NOT NULL COMMENT 'File Key',
  `file_md5` varchar(50) DEFAULT NULL COMMENT 'File MD5',
  `file_name` varchar(255) NOT NULL COMMENT 'File Name',
  `file_mime_type` varchar(128) DEFAULT NULL COMMENT 'MIME Type',
  `file_suffix` varchar(20) DEFAULT NULL COMMENT 'File Suffix',
  `file_size` bigint(20) DEFAULT NULL COMMENT 'File Size',
  `is_preview` tinyint(1) DEFAULT '0' COMMENT 'Preview Available 0: No 1: Yes',
  `is_private` tinyint(1) DEFAULT '0' COMMENT 'Is Private 0: No 1: Yes',
  `bucket` varchar(20) NOT NULL COMMENT 'Bucket',
  `bucket_path` varchar(20) NOT NULL COMMENT 'Bucket Path',
  `upload_id` varchar(255) DEFAULT NULL COMMENT 'Upload ID',
  `is_finished` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Status 0: Incomplete 1: Complete',
  `is_part` tinyint(1) DEFAULT NULL COMMENT 'Is Part 0: No 1: Yes',
  `part_number` int(4) DEFAULT NULL COMMENT 'Number of Parts',
  `create_time` datetime NOT NULL COMMENT 'Creation Time',
  `create_user` varchar(255) NOT NULL COMMENT 'Created By',
  `update_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'Update Time',
  `update_user` varchar(255) NOT NULL COMMENT 'Updated By',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `INDEX_KEY` (`file_key`),
  KEY `INDEX_MD5` (`file_md5`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='File Metadata Information Table';
```