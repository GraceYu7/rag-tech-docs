---
sidebar_position: 3
title: 贡献指南
---

# 贡献指南

感谢你对 RAG Tech Docs 的关注！无论是提交 Bug、改进文档，还是贡献代码，我们都非常欢迎。

## 行为准则

参与本项目的所有贡献者，请遵守以下原则：
- 尊重他人，保持友善与专业。
- 接受建设性的批评。
- 关注对社区最有利的事情。

## 如何贡献

### 1. 报告 Bug

如果你发现了 Bug，请在 [GitHub Issues](https://github.com/GraceYu7/rag-tech-docs/issues) 中提交，并包含以下信息：
- **环境信息**：操作系统、Python 版本、Node.js 版本。
- **复现步骤**：详细描述如何触发该 Bug。
- **期望行为**：你期望发生什么。
- **实际行为**：实际发生了什么。
- **日志与截图**：如果有报错日志，请一并附上。

### 2. 提出新功能建议

在 [GitHub Discussions](https://github.com/GraceYu7/rag-tech-docs/discussions) 中发起讨论，说明：
- 该功能解决什么问题？
- 你设想的实现方式是怎样的？
- 是否愿意参与实现？

### 3. 改进文档

文档是本项目的核心。如果你发现文档中有错别字、表述不清或内容缺失，可以直接提交 Pull Request。

## 提交 Pull Request (PR) 流程

### 第一步：Fork 仓库
点击 GitHub 页面右上角的 **Fork** 按钮，将本仓库 Fork 到你的个人账号下。

### 第二步：克隆到本地
```bash
git clone https://github.com/你的用户名/rag-tech-docs.git
cd rag-tech-docs
```

### 第三步：创建分支
请使用有意义的分支名：
```bash
# 修复 Bug
git checkout -b fix/修复登录报错

# 新增功能
git checkout -b feat/支持PDF表格解析

# 改进文档
git checkout -b docs/完善快速开始指南
```

### 第四步：本地开发与验证

**文档站点**：
```bash
npm install
npm run start
```

**后端服务**：
```bash
cd rag-demo
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 第五步：提交更改
请遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 规范：
```bash
git add .
git commit -m "docs: 完善 API 概览页面的认证说明"
```

常用前缀：
- `feat:` 新功能
- `fix:` 修复 Bug
- `docs:` 文档更新
- `style:` 代码格式（不影响功能）
- `refactor:` 重构
- `chore:` 构建/工具链相关

### 第六步：推送并创建 PR
```bash
git push origin docs/完善快速开始指南
```
然后在 GitHub 上点击 **Compare & pull request**，填写 PR 描述，说明你做了什么、为什么这么做，以及如何测试。

## 文档写作规范

- 所有文档遵循 [Diátaxis](https://diataxis.fr/) 框架分类。
- 使用标准 Markdown 语法，Docusaurus 扩展语法请参考官方文档。
- 代码块请标注语言（如 `bash`、`python`、`json`）。
- 中英文之间加空格，例如：“使用 FastAPI 框架”。

## 开发环境要求

| 工具 | 版本 |
| :--- | :--- |
| Node.js | 18+ |
| Python | 3.10+ |
| Git | 最新版 |

## 需要帮助？

如果你在贡献过程中遇到任何问题，欢迎在 [GitHub Discussions](https://github.com/GraceYu7/rag-tech-docs/discussions) 中提问，我们会尽快回复。

再次感谢你的贡献！🎉
