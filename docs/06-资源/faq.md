---
sidebar_position: 1
title: 常见问题
---

# 常见问题

本页汇总了用户在使用 RAG Tech Docs 过程中最常见的疑问与解决方案。如果这里没有解决你的问题，欢迎在 [GitHub Issues](https://github.com/GraceYu7/rag-tech-docs/issues) 中提问。

## 安装与环境

### Q1: Windows 下执行 `venv\Scripts\activate` 报错“禁止运行脚本”怎么办？
这是 PowerShell 的安全策略限制。以管理员身份打开 PowerShell，执行以下命令，然后输入 `Y` 确认：
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Q2: `pip install` 速度太慢或超时怎么办？
可以使用国内镜像源加速：
```bash
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### Q3: 端口被占用（8000 或 3000）怎么办？
- **后端**：更换启动端口，例如 `uvicorn app.main:app --port 8001`。
- **前端**：Docusaurus 默认使用 3000，可以在 `package.json` 中修改 `start` 脚本，加上 `--port 3001`。

## 模型与配置

### Q4: 我可以使用国产大模型吗？
可以。任何兼容 OpenAI 接口格式的模型都可以使用。在 `.env` 中修改 `OPENAI_BASE_URL` 和 `MODEL_NAME` 即可，例如通义千问、DeepSeek、智谱 GLM。详见 [配置指南](../03-指南/configuration.md)。

### Q5: API Key 报错 `401 Unauthorized` 怎么排查？
1. 检查 `.env` 文件中的 `OPENAI_API_KEY` 是否正确。
2. 检查请求头中是否携带了 `Authorization: Bearer <API_KEY>`。
3. 确认 API Key 是否有余额或未过期。

### Q6: 如何更换向量数据库？
在 `.env` 中修改 `VECTOR_DB_TYPE` 为 `chroma`、`milvus` 或 `qdrant`，并配置对应的连接参数。详见 [配置指南](../03-指南/configuration.md)。

## 文档与检索

### Q7: 上传 PDF 后解析失败或内容为空？
目前仅支持**文本型 PDF**。如果你的 PDF 是扫描件（图片格式），需要先使用 OCR 工具（如 Adobe Acrobat、PaddleOCR）转换为文本型 PDF 后再上传。

### Q8: 提问后回答“我不知道”或检索不到内容？
可以尝试以下排查：
1. 确认文档已上传并显示“已索引”状态。
2. 尝试换一种更具体的问法。
3. 降低 `SCORE_THRESHOLD`（如从 0.7 降至 0.5）。
4. 增加 `TOP_K` 数量。
5. 查看 [检索与重排优化](../03-指南/retrieval-tuning.md)。

### Q9: 回答包含了错误的引用来源怎么办？
- 检查分块大小是否过大，导致一个块里包含了多个主题。尝试缩小 `CHUNK_SIZE`。
- 开启 Rerank 模型，提升检索精度。
- 在 Prompt 中明确要求模型只依据给定的上下文回答。

## 部署与运维

### Q10: 如何部署到线上？
- **前端**：推荐使用 Vercel 或 GitHub Pages。
- **后端**：推荐使用 Docker 部署到云服务器。
- 详见 [部署指南](../03-指南/deployment.md)。

### Q11: 生产环境如何保护 API Key？
1. 不要将 `.env` 提交到 Git。
2. 在部署平台（如 Vercel、阿里云）的控制台配置环境变量。
3. 设置强密码的 `API_KEY` 并开启限流。详见 [安全与权限控制](../03-指南/security.md)。

## 仍未解决？

如果以上内容都没有解决你的问题，请通过以下方式联系我们：
- 提交 [GitHub Issue](https://github.com/GraceYu7/rag-tech-docs/issues)，并附上报错日志和复现步骤。
- 在 [GitHub Discussions](https://github.com/GraceYu7/rag-tech-docs/discussions) 中发起讨论。
