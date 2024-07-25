# Client Direct Connection

When users upload and download file streams, they can directly access the MinIO server (with optional Nginx proxy configuration).

Using the `GetPresignedObjectUrlArgs` method of `minioclient`, the input parameter is a `GetPresignedObjectUrlArgs` object, which includes the following properties:

* `bucketName`: The name of the bucket to access.
* `objectName`: The name of the object to access.
* `expires`: The expiration time of the URL in seconds.

The return value of this method is a string type URL that can be used to access the specified object. Example:

```
http://127.0.0.1:9000/test/test123
?response-content-type=application%2Fmsword%22&response-content-disposition=attachment%3Bfilename%3D%22xxx.doc%22
&X-Amz-Algorithm=AWS4-HMAC-SHA256
&X-Amz-Credential=minioadmin%2F20230620%2Fus-east-1%2Fs3%2Faws4_request
&X-Amz-Date=20230620T071735Z
&X-Amz-Expires=60&X-Amz-SignedHeaders=host
&X-Amz-Signature=5be3535042ffe72fedee8a283e7a5afbc2b068c595c16800cf57f089ed891cc5
```

Each time the frontend requests a file, a pre-signed file URL is generated. 
The file URL contains the date, expiration time, and signature. 
MinIO performs signature verification to ensure security.