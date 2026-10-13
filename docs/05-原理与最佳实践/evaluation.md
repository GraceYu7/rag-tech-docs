---
sidebar_position: 3
title: 效果评估
---

# 效果评估

“没有度量，就没有优化。” 在 RAG 系统中，你需要一套科学的评估方法来衡量系统的好坏，而不是凭感觉。

## 评估的两个阶段

RAG 系统的评估分为**检索阶段**和**生成阶段**。两者的评估指标和方法完全不同。

### 1. 检索阶段评估
衡量检索到的文档片段是否包含了回答用户问题所需的信息。

### 2. 生成阶段评估
衡量大模型生成的回答是否准确、完整、且忠于检索到的上下文。

## 检索阶段指标

| 指标 | 说明 | 计算方式 |
| :--- | :--- | :--- |
| **Recall@K** | 前 K 个结果中是否包含正确答案 | 命中次数 / 总问题数 |
| **Precision@K** | 前 K 个结果中有多少是相关的 | 相关结果数 / K |
| **MRR** | 第一个相关结果排名的倒数均值 | 1 / 第一个相关结果的排名 |
| **Hit Rate** | 至少命中一个相关结果的问题比例 | 命中问题数 / 总问题数 |

## 生成阶段指标

| 指标 | 说明 |
| :--- | :--- |
| **忠实度（Faithfulness）** | 回答是否完全基于检索到的上下文，没有编造 |
| **答案相关性（Answer Relevance）** | 回答是否直接切题 |
| **上下文相关性（Context Relevance）** | 检索到的上下文是否与问题相关 |
| **完整性（Completeness）** | 回答是否覆盖了问题所需的所有信息点 |

## 如何构建评估数据集？

1. **收集问题**：从真实用户提问、FAQ、业务场景中收集 20~50 个典型问题。
2. **标注答案**：人工为每个问题标注标准答案（Ground Truth）。
3. **标注相关文档**：标明每个问题对应的正确文档片段 ID。
4. **定期回归**：每次调整分块、检索或模型后，重新跑一遍评估集，对比指标变化。

## 使用 Ragas 自动化评估

[Ragas](https://github.com/explodinggradients/ragas) 是一个专门用于评估 RAG 系统的开源框架，它利用 LLM 作为裁判（LLM-as-a-Judge）来自动计算上述指标。

### 安装 Ragas
```bash
pip install ragas
```

### Python 评估示例
```python
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevance, context_precision
from datasets import Dataset

# 准备评估数据
data = {
    "question": ["这份文档提到了哪些技术栈？"],
    "answer": ["它提到了 FastAPI、Chroma 和 OpenAI。"],
    "contexts": [["技术选型：后端使用 FastAPI，向量库采用 Chroma..."]],
    "ground_truth": ["FastAPI、Chroma、OpenAI"]
}
dataset = Dataset.from_dict(data)

# 执行评估
result = evaluate(
    dataset,
    metrics=[faithfulness, answer_relevance, context_precision]
)
print(result)
```

输出示例：
```json
{
  "faithfulness": 0.95,
  "answer_relevance": 0.88,
  "context_precision": 0.92
}
```

## 人工评估（不可或缺）

自动化指标只能作为参考，**人工评估永远是金标准**。建议每周随机抽取 20 条问答记录，由人工打分：
- 回答是否正确？
- 引用来源是否合理？
- 用户体验如何？

## 持续迭代闭环

```text
收集问题 -> 构建评估集 -> 跑自动化指标 -> 人工抽检 -> 定位问题 -> 调整配置 -> 重新评估
```

这个闭环应该成为你日常迭代 RAG 系统的标准流程。

## 下一步

- 想了解常见问题？请查看 [常见问题](../06-资源/faq.md)。
- 想了解贡献指南？请查看 [贡献指南](../06-资源/contributing.md)。
