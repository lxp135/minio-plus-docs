# 常见问题

## MetadataRepository that could not be found

项目启动后报找不到`MetadataRepository`实现类

![MetadataRepositoryNotBeFound](../../public/image/MetadataRepositoryNotBeFound.jpg)

这个类是文件元数据的读写接口，开源组件中仅定义了接口，需要项目上自行编写实现类，具体参考 *快速开始* 中 *文件元数据读写实现* 章节。