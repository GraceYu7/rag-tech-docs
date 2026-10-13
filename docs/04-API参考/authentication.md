---
sidebar_position: 2
title: 认证与鉴权
---

# 认证与鉴权

本页介绍如何获取和使用 API Key 进行身份认证。

## 认证方式

API 采用 **Bearer Token** 认证方式。你需要在每次请求的 HTTP Header 中携带 API Key：

```http
Authorization: Bearer YOUR_API_KEY
```

## 获取 API Key

### 本地开发环境
在 `rag-demo/.env` 文件中配置 `API_KEY`：

```env
API_KEY=your_local_api_key
```

### 生产环境
请通过部署平台的环境变量配置，不要硬编码在代码中。

## 调用示例

### cURL 示例
```bash
curl -X GET "http://127.0.0.1:8000/api/v1/documents" \
  -H "Authorization: Bearer your_local_api_key"
```

### Python 示例
```python
import requests

API_KEY = "your_local_api_key"
BASE_URL = "http://127.0.0.1:8000/api/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}"
}

response = requests.get(f"{BASE_URL}/documents", headers=headers)
print(response.json())
```

## 认证失败

如果未携带 API Key 或 Key 无效，接口将返回 `401 Unauthorized`：

```json
{
  "code": 40100,
  "message": "Invalid API Key",
  "data": null
}
```

## 安全建议

- **不要在前端代码中硬编码 API Key**。
- **定期轮换 API Key**，建议每 3 个月更换一次。
- **为不同调用方分配不同 Key**，便于审计和撤销。
- **务必使用 HTTPS**，避免 Key 在传输过程中被窃取。

## 下一步

- 了解错误处理？请查看 [错误码](errors.md)。
