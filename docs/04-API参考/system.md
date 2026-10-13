---
sidebar_position: 7
title: 系统接口
---

# 系统接口

本页介绍系统健康检查和服务信息相关的接口。

## 健康检查

用于监控后端服务是否正常运行。

- **请求方法**：`GET`
- **请求路径**：`/health`
- **是否需要认证**：否

### cURL 示例

```bash
curl -X GET "http://127.0.0.1:8000/api/v1/health"
```

### 成功响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "status": "healthy",
    "version": "1.0.0",
    "uptime": 3600
  }
}
```

### 异常响应

如果服务异常（如向量库连接失败），返回 `503 Service Unavailable`：

```json
{
  "code": 50300,
  "message": "Vector database connection failed",
  "data": null
}
```

## 获取版本信息

- **请求方法**：`GET`
- **请求路径**：`/version`

### 成功响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "version": "1.0.0",
    "build_date": "2026-10-13",
    "commit_hash": "abc1234"
  }
}
```

## 监控建议

推荐使用 **UptimeRobot** 或 **Better Stack** 定时探测 `/health` 接口：
- 探测频率：每 5 分钟一次。
- 连续 2 次失败触发告警。
- 告警渠道：邮件、钉钉、飞书。

## 下一步

- 想了解 RAG 底层原理？请查看 [原理与最佳实践](../05-原理与最佳实践/rag-pipeline.md)。
