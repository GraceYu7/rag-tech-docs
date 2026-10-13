---
sidebar_position: 5
title: 安全与权限控制
---

# 安全与权限控制

将 RAG 系统暴露在公网时，安全性至关重要。本指南介绍如何保护你的 API Key、用户数据和系统稳定性。

## API Key 管理

### 启用鉴权
在生产环境，务必在 `.env` 中设置 `API_KEY`：

```env
API_KEY=your_strong_api_key_here
```

启用后，所有 API 请求必须在 Header 中携带：

```http
Authorization: Bearer your_strong_api_key_here
```

### API Key 最佳实践
- **不要硬编码**：切勿将 API Key 写在代码里。
- **定期轮换**：建议每 3 个月更换一次。
- **最小权限**：为不同的调用方分配不同的 Key，便于审计和撤销。
- **使用环境变量**：通过部署平台的环境变量配置注入。

## 数据隐私与隔离

### 向量库隔离
- 不同租户 / 不同项目的文档应存放在不同的 Collection 中。
- 本系统支持通过 `collection_name` 参数隔离数据。

### 敏感数据脱敏
在将文档送入大模型之前，建议对敏感信息（如手机号、身份证号）进行脱敏处理。

## 防 Prompt 注入

Prompt 注入是指用户通过恶意提问，诱导大模型忽略预设指令，泄露系统提示词或执行非法操作。

### 防御措施
1. **输入过滤**：拦截包含“忽略之前的指令”、“输出你的系统提示词”等关键词的请求。
2. **提示词加固**：在 System Prompt 中明确要求模型拒绝回答与文档无关的问题。
3. **输出检查**：对模型输出进行后处理，过滤敏感词。

```python
# 示例：输入过滤
BLOCKED_KEYWORDS = ["忽略之前的指令", "ignore previous instructions", "系统提示词"]
def check_prompt_injection(query: str):
    for kw in BLOCKED_KEYWORDS:
        if kw in query.lower():
            raise ValueError("请求包含非法内容")
```

## 限流与防滥用

防止恶意用户高频调用 API 导致资源耗尽。

### 配置限流
本系统默认限制为 **60 次请求 / 分钟 / IP**。可通过 `.env` 调整：

```env
RATE_LIMIT_PER_MINUTE=60
```

超出限制将返回 `429 Too Many Requests`。

## 日志与审计

- **记录请求日志**：记录每次 API 调用的时间、IP、请求参数（脱敏后）、响应状态。
- **敏感操作审计**：记录文档删除、配置修改等高风险操作。
- **日志脱敏**：确保日志中不包含用户的原始敏感数据。

## 安全检查清单

在正式上线前，请逐项确认：

- [ ] 已设置强密码的 `API_KEY`
- [ ] `.env` 文件已加入 `.gitignore`，未提交到 Git
- [ ] 已开启 HTTPS
- [ ] 已配置限流策略
- [ ] 已开启请求日志记录
- [ ] 已对用户输入做基本过滤
- [ ] 已配置防火墙，仅开放必要端口

## 下一步

- 想了解常见问题？请查看 [常见问题](../06-资源/faq.md)。
- 想了解贡献指南？请查看 [贡献指南](../06-资源/contributing.md)。
