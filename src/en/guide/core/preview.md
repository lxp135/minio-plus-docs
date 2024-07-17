# Thumbnail

![Thumbnail Generation Sequence Diagram](../../../public/image/缩略图.png)

When a user first accesses the image preview interface, a thumbnail is automatically generated. The compression maintains the original aspect ratio of the image, and the thumbnail is stored in the thumbnail bucket with the same MD5 name.

* Thumbnail: By default, the image is compressed to a width of 300 pixels while maintaining the aspect ratio.

> [!TIP]
> If the original image size is smaller than the thumbnail compression size, the original image is stored.