---
sidebar_position: 5
title: 文档管理接口
---

# 文档管理接口

本页介绍文档上传、查询和删除的相关接口。

## 上传文档

将本地文档上传至知识库，系统会自动进行解析、分块和向量化。

- **请求方法**：`POST`
- **请求路径**：`/documents`
- **Content-Type**：`multipart/form-data`

### 请求参数

| 参数 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `file` | File | 是 | 待上传的文档（PDF/MD/TXT） |

### cURL 示例

```bash
curl -X POST "http://127.0.0.1:8000/api/v1/documents" \
  -H "Authorization: Bearer your_local_api_key" \
  -F "file=@./技术文档.pdf"
```

### Python 示例

```python
import requests

url = "http://127.0.0.1:8000/api/v1/documents"
headers = {"Authorization": "Bearer your_local_api_key"}
files = {"file": open("技术文档.pdf", "rb")}

response = requests.post(url, headers=headers, files=files)
print(response.json())
```

### 成功响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "document_id": "doc_123456",
    "filename": "技术文档.pdf",
    "status": "processing"
  }
}
```

---

## 查询文档列表

获取已上传的所有文档。

- **请求方法**：`GET`
- **请求路径**：`/documents`

### 请求参数（Query）

| 参数 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `page` | Integer | 否 | 页码，默认 1 |
| `page_size` | Integer | 否 | 每页数量，默认 10 |

### cURL 示例

```bash
curl -X GET "http://127.0.0.1:8000/api/v1/documents?page=1&page_size=10" \
  -H "Authorization: Bearer your_local_api_key"
```

### 成功响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 25,
    "page": 1,
    "page_size": 10,
    "items": [
      {
        "document_id": "doc_123456",
        "filename": "技术文档.pdf",
        "status": "indexed",
        "created_at": "2026-10-13T10:00:00Z"
      }
    ]
  }
}
```

---

## 查询文档详情

- **请求方法**：`GET`
- **请求路径**：`/documents/{document_id}`

### 成功响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "document_id": "doc_123456",
    "filename": "技术文档.pdf",
    "status": "indexed",
    "chunks": 42,
    "created_at": "2026-10-13T10:00:00Z"
  }
}
```

---

## 删除文档

删除文档及其在向量库中的所有片段。

- **请求方法**：`DELETE`
- **请求路径**：`/documents/{document_id}`

### cURL 示例

```bash
curl -X DELETE "http://127.0.0.1:8000/api/v1/documents/doc_123456" \
  -H "Authorization: Bearer your_local_api_key"
```

### 成功响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "document_id": "doc_123456",
    "deleted": true
  }
}
```

## 下一步

- 上传文档后，开始问答？请查看 [问答对话接口](chat.md)。
