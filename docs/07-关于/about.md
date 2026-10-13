---
sidebar_position: 1
title: 关于项目
---

# 关于项目

本页介绍 RAG Tech Docs 的项目背景、技术选型、文档规范以及作者信息。

## 项目背景

**RAG Tech Docs** 是一个面向开发者的技术文档与实战演示项目。它不仅仅是一套简单的 RAG（检索增强生成）代码，更是一个**现代技术文档站点的完整实践**。

本项目的初衷是：
1. **学习 RAG 技术**：从零构建一个可运行的检索增强生成系统。
2. **掌握现代文档规范**：探索如何写出结构清晰、对开发者友好的技术文档。
3. **提供开源模板**：为其他开发者提供一个“技术文档 + API 文档 + Demo”的参考架构。

## 技术选型

本项目的文档站点与后端 Demo 采用前后端分离架构：

### 文档站点 (前端)
- **框架**：[Docusaurus 3.x](https://docusaurus.io/) —— 基于 React 的静态站点生成器。
- **内容**：Markdown / MDX。
- **主题**：默认 Classic 主题，并进行了自定义卡片式首页开发。
- **图表**：Mermaid，用于绘制架构图和流程图。

### RAG Demo (后端)
- **语言**：Python 3.10+
- **框架**：[FastAPI](https://fastapi.tiangolo.com/) —— 高性能异步 Web 框架，自动生成 OpenAPI 文档。
- **核心库**：LangChain（文档解析与链式调用）。
- **向量库**：Chroma（默认，轻量级本地向量数据库）。
- **大模型**：兼容 OpenAI 接口的各类 LLM（如 GPT-4、通义千问、DeepSeek）。

## 文档架构规范

本项目的文档严格遵循 [Diátaxis](https://diataxis.fr/) 框架，将内容分为四大类，以满足不同场景下的读者需求：

- **教程 (Tutorials)**：如《快速开始》，带新手完成一次成功体验。
- **指南 (How-to Guides)**：如《配置指南》、《部署指南》，解决具体问题。
- **参考 (Reference)**：如《API 参考》，提供准确、结构化的信息查询。
- **解释 (Explanation)**：如《RAG 流程解析》，深入讲解原理和设计决策。

## 关于作者

**GraceYu7**
- GitHub: [@GraceYu7](https://github.com/GraceYu7)
- 一名热衷于探索 AI 应用与全栈开发的技术爱好者。
- 致力于将复杂的 AI 技术拆解为清晰、可落地的工程实践，并通过标准化的文档分享给社区。

## 开源协议

本项目采用 [MIT License](https://opensource.org/licenses/MIT) 开源协议。你可以自由地使用、修改和分发本项目，只需保留原作者版权声明即可。

## 联系与反馈

如果你对项目有任何疑问、建议或想法，欢迎通过以下方式联系：
- **提交 Bug**：[GitHub Issues](https://github.com/GraceYu7/rag-tech-docs/issues)
- **发起讨论**：[GitHub Discussions](https://github.com/GraceYu7/rag-tech-docs/discussions)
- **贡献代码**：请查看 [贡献指南](../06-资源/contributing.md)

## 致谢

感谢所有开源社区的先驱者，以及 Docusaurus、FastAPI、LangChain 等优秀开源项目的开发者们。没有你们的贡献，就没有这个项目。

如果你觉得本项目对你有帮助，欢迎在 GitHub 上点一个 ⭐️ Star！