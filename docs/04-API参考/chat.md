---
sidebar_position: 6
title: 问答对话接口
---

# 问答对话接口

本页介绍 RAG 问答对话的核心接口，支持流式和非流式输出。

## 发起问答

- **请求方法**：`POST`
- **请求路径**：`/chat`

### 请求参数（Body）

| 参数 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `query` | String | 是 | 用户提问内容 |
| `stream` | Boolean | 否 | 是否流式输出，默认 `true` |
| `history` | Array | 否 | 历史对话列表，格式 `[{"role": "user", "content": "..."}]` |
| `top_k` | Integer | 否 | 检索返回的文档数量，覆盖默认配置 |

### cURL 示例（非流式）

```bash
curl -X POST "http://127.0.0.1:8000/api/v1/chat" \
  -H "Authorization: Bearer your_local_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "这份文档提到了哪些技术栈？",
    "stream": false
  }'
```

### Python 示例（非流式）

```python
import requests

url = "http://127.0.0.1:8000/api/v1/chat"
headers = {
    "Authorization": "Bearer your_local_api_key",
    "Content-Type": "application/json"
}
payload = {
    "query": "这份文档提到了哪些技术栈？",
    "stream": False
}

response = requests.post(url, headers=headers, json=payload)
print(response.json())
```

### 成功响应（非流式）

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "answer": "根据文档内容，它提到了 FastAPI、Chroma 和 OpenAI...",
    "sources": [
      {
        "document_id": "doc_123456",
        "filename": "技术文档.pdf",
        "content": "技术选型：后端使用 FastAPI，向量库采用 Chroma..."
      }
    ]
  }
}
```

---

## 流式输出

当 `stream: true` 时，服务端会以 **Server-Sent Events (SSE)** 格式逐字返回内容。

### Python 流式请求示例

```python
import requests
import json

url = "http://127.0.0.1:8000/api/v1/chat"
headers = {
    "Authorization": "Bearer your_local_api_key",
    "Content-Type": "application/json"
}
payload = {
    "query": "这份文档提到了哪些技术栈？",
    "stream": True
}

response = requests.post(url, headers=headers, json=payload, stream=True)

for line in response.iter_lines():
    if line:
        decoded = line.decode("utf-8")
        if decoded.startswith("data: "):
            data = json.loads(decoded[6:])
            print(data["content"], end="", flush=True)
```

### 流式响应示例

```text
data: {"content": "根"}
data: {"content": "据"}
data: {"content": "文"}
data: {"content": "档"}
data: {"content": "内"}
data: {"content": "容"}
...
data: [DONE]
```

## 多轮对话

将历史对话传入 `history` 字段即可实现多轮问答：

```json
{
  "query": "其中 Chroma 是用来做什么的？",
  "history": [
    {"role": "user", "content": "这份文档提到了哪些技术栈？"},
    {"role": "assistant", "content": "它提到了 FastAPI、Chroma 和 OpenAI。"}
  ]
}
```

## 下一步

- 系统健康检查？请查看 [系统接口](system.md)。
