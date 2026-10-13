---
sidebar_position: 1
title: 安装指南
---

# 安装指南

本页提供 RAG Tech Docs 的详细安装步骤，涵盖环境准备、依赖安装和本地启动。如果你只想快速跑通一个示例，请直接查看 [快速开始](quickstart.md)。

## 1. 环境准备

在开始安装之前，请确保你的开发环境满足以下要求：

### 1.1 硬件要求
- **内存**：建议 8GB 及以上（运行向量数据库和本地大模型时需要更多）。
- **硬盘**：至少 2GB 可用空间（用于存放依赖和向量数据）。

### 1.2 软件要求
- **操作系统**：Windows 10/11、macOS 12+、Ubuntu 20.04+
- **Python**：3.10 或以上版本
- **Node.js**：18.0 或以上版本（用于运行文档站点）
- **Git**：最新版本

### 1.3 检查环境

打开终端（Windows 使用 PowerShell，macOS/Linux 使用 Terminal），输入以下命令检查版本：

```bash
python --version
node --version
git --version
```

如果提示“命令未找到”，请先前往对应官网下载并安装。

:::tip 提示
Windows 用户安装 Python 时，请务必勾选 **"Add Python to PATH"**，否则后续无法在终端直接使用 `python` 命令。
:::

## 2. 获取项目代码

### 2.1 克隆仓库

```bash
git clone https://github.com/你的用户名/rag-tech-docs.git
cd rag-tech-docs
```

### 2.2 项目结构说明

```text
rag-tech-docs/
├── docs/          # 技术文档（Docusaurus）
├── website/       # 文档站点配置（如果使用的是子目录结构）
├── rag-demo/      # RAG 后端与 Demo 代码（Python）
├── package.json   # 前端依赖配置
└── README.md
```

## 3. 安装后端依赖 (rag-demo)

### 3.1 进入后端目录

```bash
cd rag-demo
```

### 3.2 创建虚拟环境

强烈建议使用虚拟环境，避免污染全局 Python 环境。

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

激活成功后，终端提示符前会出现 `(venv)`。

### 3.3 安装 Python 包

```bash
pip install -r requirements.txt
```

如果下载速度慢，可以使用国内镜像源：

```bash
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### 3.4 配置环境变量

在 `rag-demo` 目录下新建 `.env` 文件：

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://api.openai.com/v1
MODEL_NAME=gpt-3.5-turbo
VECTOR_DB_PATH=./data/chroma
API_KEY=your_local_api_key
```

:::warning 注意
请复制 rag-demo/.env.example 为 rag-demo/.env，并填入你自己的 API Key。
请务必将 `.env` 加入 `.gitignore`，切勿将真实的 API Key 提交到 GitHub。
:::

## 4. 安装前端依赖 (文档站点)

回到项目根目录：

```bash
cd ..
npm install
```

如果安装缓慢，可以切换为淘宝镜像：

```bash
npm config set registry https://registry.npmmirror.com
npm install
```

## 5. 启动服务

### 5.1 启动后端 API

```bash
cd rag-demo
uvicorn app.main:app --reload --port 8000
```

访问 `http://127.0.0.1:8000/docs` 查看 Swagger API 文档。

### 5.2 启动文档站点

新开一个终端窗口，在项目根目录下运行：

```bash
npm run start
```

访问 `http://localhost:3000` 查看文档站点。

## 6. 常见安装问题

| 问题 | 原因 | 解决方案 |
| :--- | :--- | :--- |
| `python` 命令未找到 | 未添加到 PATH | 重新安装 Python 并勾选 Add to PATH |
| `venv\Scripts\activate` 报错 | PowerShell 安全策略 | 运行 `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` |
| `npm install` 卡住 | 网络问题 | 切换淘宝镜像源 |
| 端口被占用 | 8000 或 3000 已被使用 | 更换端口，如 `--port 8001` |

## 下一步

- 安装完成后，请查看 [Demo 使用指南](demo-guide.md) 体验功能。
- 遇到问题？请查看 [常见问题](../06-资源/faq.md)。

