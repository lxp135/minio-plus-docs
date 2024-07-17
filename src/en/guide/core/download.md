# Download

![File Download Logic Sequence Diagram](../../../public/image/文件下载时序图.png)

The browser initiates a file read request to the server. The server retrieves the file metadata based on the `fileKey` parameter. 

After obtaining the file metadata, it determines whether the user has file read permissions based on the "private" field and "owner" field in the metadata.

* If the user has read permissions, the server requests the MinIO server for a pre-signed file access URL and returns it to the browser.
* If the user does not have read permissions, the server returns an access denied message to the browser.

Once the browser receives the real file URL, it reads the file and either displays or downloads it.