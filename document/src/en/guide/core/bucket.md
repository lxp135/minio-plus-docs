# Bucket

* document：txt、rtf、ofd、doc、docx、xls、xlsx、ppt、pptx、pdf
* package：zip、rar、7z、tar、wim、gz、bz2
* audio：mp3、wav、flac、acc、ogg、aiff、m4a、wma、midi
* video：mp4、avi、mov、wmv、flv、mkv、mpeg、mpg 、rmvb
* image：jpeg、jpg、png、bmp、webp、gif
* image-preview：Default compression to a width of 300 pixels for previews
* other ：Files not included in the above formats

Other rules: When storing files in buckets, the path is divided by `/year/month`. This approach helps to avoid the issue of a maximum of 32,000 directories in a single directory under the Linux ext3 file system, drawing on the handling method of Alibaba Cloud OSS.