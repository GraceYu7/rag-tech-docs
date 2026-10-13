---
sidebar_position: 1
title: API 概览
---

# API 概览

本页介绍 RAG Tech Docs API 的通用规范，包括基础 URL、请求结构、响应格式和版本策略。在调用具体接口前，请先阅读本页。

## 基础 URL

所有 API 请求均基于以下基础 URL：

| 环境 | Base URL |
| :--- | :--- |
| 本地开发 | `http://127.0.0.1:8000/api/v1` |
| 生产环境 | `https://api.yourdomain.com/api/v1` |

## 在线调试 (Swagger UI)

本项目后端基于 FastAPI 构建，**自动生成了交互式 API 文档（Swagger UI）**。你可以直接在浏览器中测试所有接口，无需编写代码。

启动后端服务后，访问：

```
http://127.0.0.1:8000/docs
```

在 Swagger UI 页面中：
1. 点击右上角的 **Authorize** 按钮，输入你的 API Key。
2. 选择任意接口，点击 **Try it out**。
3. 填写参数，点击 **Execute**，即可实时查看返回结果。

## 请求规范

### 请求方法
- `GET`：获取资源
- `POST`：创建资源或执行操作
- `DELETE`：删除资源

### 请求头
所有请求必须包含以下 Header：

| Header | 值 | 说明 |
| :--- | :--- | :--- |
| `Content-Type` | `application/json` | 除文件上传外 |
| `Authorization` | `Bearer <API_KEY>` | 认证凭证 |

文件上传接口需使用 `multipart/form-data`。

### 请求体
除 `GET` 请求外，其余接口的请求体均为 JSON 格式。

## 响应规范

所有 API 均返回统一的 JSON 结构：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    // 业务数据
  }
}
```

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | Integer | 业务状态码，`200` 表示成功 |
| `message` | String | 状态描述，失败时包含错误原因 |
| `data` | Object/Array | 业务数据，失败时可能为 `null` |

## 版本策略

API 版本通过 URL 路径管理，当前版本为 `v1`。后续如有破坏性变更，将发布 `v2` 版本，并保证 `v1` 至少 6 个月的兼容期。

## 下一步

- 了解如何认证？请查看 [认证与鉴权](authentication.md)。
- 了解错误处理？请查看 [错误码](errors.md)。
- 开始调用接口？请查看 [文档管理](documents.md) 和 [问答对话](chat.md)。

