---
sidebar_position: 1
title: 配置指南
---

# 配置指南

本指南介绍如何配置 RAG Tech Docs 的核心参数，包括大语言模型（LLM）、向量数据库以及 RAG 运行参数。

## 环境变量配置

项目的所有核心配置都通过 `rag-demo` 目录下的 `.env` 文件管理。在开始之前，请确保你已经复制了 `.env.example` 为 `.env`。

### 基础配置项

```env
# 大模型 API 配置
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://api.openai.com/v1
MODEL_NAME=gpt-3.5-turbo

# 向量数据库配置
VECTOR_DB_TYPE=chroma
VECTOR_DB_PATH=./data/chroma

# 服务端配置
API_KEY=your_local_api_key
HOST=0.0.0.0
PORT=8000
```

## 大语言模型配置

### 使用 OpenAI 官方模型
如果你使用的是 OpenAI 官方 API，只需配置 `OPENAI_API_KEY` 即可：

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxx
OPENAI_BASE_URL=https://api.openai.com/v1
MODEL_NAME=gpt-4o
```

### 使用国产大模型（以通义千问为例）
国内许多大模型都提供了兼容 OpenAI 格式的接口，你只需要修改 `OPENAI_BASE_URL` 和 `MODEL_NAME` 即可无缝切换：

```env
OPENAI_API_KEY=your_dashscope_api_key
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
MODEL_NAME=qwen-turbo
```

:::tip 提示
支持的国产模型包括但不限于：通义千问（DashScope）、智谱 AI（GLM）、月之暗面（Kimi）、DeepSeek 等。
:::

## 向量数据库配置

本项目默认使用轻量级的 **Chroma**，无需额外部署。你也可以切换为 **Milvus** 或 **Qdrant**。

### Chroma（默认）
```env
VECTOR_DB_TYPE=chroma
VECTOR_DB_PATH=./data/chroma
```

### Milvus（可选）
```env
VECTOR_DB_TYPE=milvus
MILVUS_HOST=127.0.0.1
MILVUS_PORT=19530
MILVUS_COLLECTION=rag_docs
```

## RAG 核心参数调优

在 `.env` 文件中，你还可以调整 RAG 的检索和生成参数：

```env
# 文本分块大小（字符数）
CHUNK_SIZE=500
# 分块重叠大小（避免上下文断裂）
CHUNK_OVERLAP=50
# 检索返回的文档片段数量
TOP_K=3
# 相似度阈值（低于此值不返回）
SCORE_THRESHOLD=0.7
# 是否开启流式输出
ENABLE_STREAMING=true
```

## 下一步

- 想了解如何上传和解析文档？请查看 [数据导入](data-ingestion.md)。
- 想优化检索效果？请查看 [检索与重排优化](retrieval-tuning.md)。
