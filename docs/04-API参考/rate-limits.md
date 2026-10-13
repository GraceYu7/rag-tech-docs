---
sidebar_position: 4
title: 限流与配额
---

# 限流与配额

为了保护系统稳定性和公平使用，API 对请求频率进行了限制。

## 默认限流策略

| 维度 | 限制 |
| :--- | :--- |
| 单 IP | 60 次请求 / 分钟 |
| 单 API Key | 60 次请求 / 分钟 |

## 响应头说明

每次 API 响应都会携带限流相关的 Header：

| Header | 说明 |
| :--- | :--- |
| `X-RateLimit-Limit` | 当前时间窗口内的总配额 |
| `X-RateLimit-Remaining` | 剩余可用配额 |
| `X-RateLimit-Reset` | 配额重置的 Unix 时间戳 |

## 触发限流

超出限制后，API 将返回 `429 Too Many Requests`：

```json
{
  "code": 42900,
  "message": "Rate limit exceeded. Please retry after 30 seconds.",
  "data": null
}
```

响应 Header 中会包含 `Retry-After: 30`，表示 30 秒后可重试。

## 处理限流（指数退避重试）

在生产环境中，推荐使用**指数退避**策略处理限流：

```python
import time
import requests

def call_api_with_retry(url, headers, max_retries=5):
    for attempt in range(max_retries):
        response = requests.get(url, headers=headers)
        if response.status_code == 429:
            retry_after = int(response.headers.get("Retry-After", 2 ** attempt))
            print(f"限流触发，{retry_after} 秒后重试...")
            time.sleep(retry_after)
        else:
            return response
    raise Exception("超过最大重试次数，请求失败")
```

## 调整配额

如需提高配额，请联系管理员，或在 `.env` 中调整：

```env
RATE_LIMIT_PER_MINUTE=120
```

## 下一步

- 了解具体接口？请查看 [文档管理](documents.md)。
