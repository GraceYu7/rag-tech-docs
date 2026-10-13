---
sidebar_position: 2
title: 快速开始
---

# 快速开始

本教程将带你从零开始，在 **5 分钟**内搭建并运行一个本地的 RAG 问答 Demo。

## 前置条件

在开始之前，请确保你的开发环境满足以下要求：

- **Python 3.10+**
- **Node.js 18+**（仅用于运行文档站点）
- **Git**
- 一个可用的 LLM API Key（如 OpenAI API Key，或兼容 OpenAI 接口的国内大模型 API Key）

## 步骤 1：克隆仓库

打开终端，克隆本项目到本地：

```bash
git clone https://github.com/GraceYu7/rag-tech-docs.git
cd rag-tech-docs/rag-demo
```

## 步骤 2：安装 Python 依赖

强烈建议使用虚拟环境：

```bash
# 创建虚拟环境
python -m venv venv

# Windows 激活
venv\Scripts\activate

# macOS / Linux 激活
source venv/bin/activate

# 安装依赖
pip install -r requirements.txt
```

## 步骤 3：配置环境变量

在 `rag-demo` 目录下新建一个 `.env` 文件，填入你的 API Key 和模型配置：

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://api.openai.com/v1
MODEL_NAME=gpt-3.5-turbo
VECTOR_DB_PATH=./data/chroma
```

:::warning 注意
请确保 `.env` 文件已加入 `.gitignore`，切勿将 API Key 上传到 GitHub。
:::

## 步骤 4：启动后端服务

运行 FastAPI 后端：

```bash
uvicorn app.main:app --reload --port 8000
```

服务启动后，访问 `http://127.0.0.1:8000/docs`，你应该能看到自动生成的 Swagger API 文档。

## 步骤 5：上传文档并提问

在浏览器中打开 `http://127.0.0.1:8000/docs`，找到 `POST /documents` 接口，上传一个 PDF 或 Markdown 文件。

上传成功后，使用 `POST /chat` 接口进行提问：

```json
{
  "query": "这个文档主要讲了什么？"
}
```

如果一切正常，你将收到类似如下的回复：

```json
{
  "answer": "根据文档内容，它主要介绍了 RAG 技术的基本原理和实现步骤...",
  "sources": ["doc_1.pdf"]
}
```

## 下一步

恭喜你！你已经成功跑通了第一个 RAG 问答。

- 想了解如何配置不同的模型？请查看 [配置指南](../03-指南/configuration.md)。
- 想了解 API 的详细参数？请查看 [API 参考](../04-API参考/overview.md)。
- 想了解 RAG 的底层原理？请查看 [RAG 流程解析](../05-原理与最佳实践/rag-pipeline.md)。
