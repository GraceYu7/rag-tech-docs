---
sidebar_position: 4
title: 部署指南
---

# 部署指南

本指南介绍如何将 RAG Tech Docs 部署到生产环境，包括后端 API 和前端文档站点。

## 部署架构概览

生产环境推荐将前后端分离部署：
- **前端文档站点**：部署到 Vercel / GitHub Pages。
- **后端 API 服务**：部署到云服务器 / Docker 容器。

## 后端 API 部署

### 方式一：Docker 部署（推荐）

项目根目录 `rag-demo` 下提供了 `Dockerfile`。构建并运行：

```bash
cd rag-demo
docker build -t rag-demo-api .
docker run -d -p 8000:8000 --env-file .env --name rag-api rag-demo-api
```

如果使用 `docker-compose`：

```bash
docker-compose up -d
```

### 方式二：直接部署到云服务器

```bash
# 安装依赖
pip install -r requirements.txt

# 使用 Gunicorn 启动（生产环境推荐）
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8000
```

:::warning 生产环境提醒
请务必在 `.env` 中设置强密码的 `API_KEY`，并配置好服务器的防火墙规则，仅开放必要端口。
:::

## 前端文档站点部署

### 方式一：Vercel 部署（推荐）

1. 登录 [Vercel](https://vercel.com/)，导入你的 GitHub 仓库 `rag-tech-docs`。
2. Framework Preset 选择 `Docusaurus v2`（Vercel 会自动识别）。
3. 点击 Deploy。每次 `git push` 到 `main` 分支，Vercel 都会自动重新部署。
4. 在 Vercel 控制台绑定你的自定义域名。

### 方式二：GitHub Pages 部署

详见 [快速开始](../02-快速开始/quickstart.md) 中的部署部分，或者查看项目根目录下的 `.github/workflows/deploy.yml`。

## 环境变量注入

生产环境**不要**将 `.env` 文件提交到 Git。推荐在部署平台（如 Vercel、阿里云、AWS）的控制台直接配置环境变量：
- `OPENAI_API_KEY`
- `OPENAI_BASE_URL`
- `MODEL_NAME`
- `API_KEY`

## 健康检查与监控

部署完成后，访问 `GET /health` 检查服务状态：

```bash
curl http://your-domain.com/api/v1/health
```

正常返回：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "status": "healthy",
    "version": "1.0.0"
  }
}
```

建议配置 Uptime 监控（如 UptimeRobot）定时探测此接口。

## 下一步

- 部署完成后，请务必阅读 [安全与权限控制](security.md)，保护你的 API 和数据。
