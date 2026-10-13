---
sidebar_position: 2
title: 数据导入与文档解析
---

# 数据导入与文档解析

高质量的 RAG 问答离不开高质量的语料。本指南介绍如何将你的私有文档导入系统，以及系统是如何进行解析和分块的。

## 支持的文档格式

目前系统支持以下格式的文档导入：

| 格式 | 扩展名 | 说明 |
| :--- | :--- | :--- |
| PDF | `.pdf` | 支持文本型 PDF，扫描件需 OCR 支持（规划中） |
| Markdown | `.md` | 原生支持，推荐使用 |
| 纯文本 | `.txt` | 简单文本，无需解析 |

## 通过 API 上传文档

你可以通过调用 `POST /documents` 接口上传文档。使用 `cURL` 示例：

```bash
curl -X POST "http://127.0.0.1:8000/api/v1/documents" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "file=@./your-document.pdf"
```

上传成功后，接口会返回文档 ID：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "document_id": "doc_123456",
    "filename": "your-document.pdf",
    "status": "processing"
  }
}
```

:::info 状态说明
`processing` 表示文档正在后台进行解析和向量化。根据文件大小，可能需要几秒到几分钟。你可以通过 `GET /documents/{id}` 查询处理状态。
:::

## 数据解析流程

系统接收到文档后，会依次执行以下步骤：

1. **文本提取**：从 PDF 或 Markdown 中提取纯文本。
2. **清洗**：去除多余的空白字符、页眉页脚、特殊符号。
3. **分块（Chunking）**：将长文本切割为语义完整的短片段。
4. **向量化（Embedding）**：调用 Embedding 模型将每个片段转化为高维向量。
5. **存储**：将向量及原始文本存入向量数据库。

## 自定义分块策略

默认情况下，系统使用 `CHUNK_SIZE=500` 和 `CHUNK_OVERLAP=50` 进行分块。你可以根据文档类型进行调整：
- **技术文档 / 论文**：建议 `CHUNK_SIZE=800`，`OVERLAP=100`，保留完整段落。
- **FAQ / 短文本**：建议 `CHUNK_SIZE=200`，`OVERLAP=20`。

想要深入了解分块原理，请阅读 [分块策略](../05-原理与最佳实践/chunking.md)。

## 增量更新

当你的文档内容发生变化时，无需重建整个索引：
1. 调用 `DELETE /documents/{id}` 删除旧文档。
2. 重新上传新版本的文档。

系统会自动删除向量库中对应的旧向量，并写入新向量。

## 常见问题

| 问题 | 原因 | 解决方案 |
| :--- | :--- | :--- |
| 解析失败 | 扫描版 PDF 无法提取文字 | 暂不支持 OCR，请转换为文本型 PDF |
| 上传超时 | 文件太大 | 分割为小文件后分批上传 |
| 检索不到内容 | 分块过大或过小 | 调整 `CHUNK_SIZE` 参数 |

## 下一步

- 想优化检索质量？请查看 [检索与重排优化](retrieval-tuning.md)。
