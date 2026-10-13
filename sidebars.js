/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: '概览',
      link: { type: 'generated-index', title: '概览', description: '了解 RAG Tech Docs 的项目定位与核心架构' },
      collapsed: false,
      items: [
        '概览/intro',
        '概览/architecture',
        '概览/features',
      ],
    },
    {
      type: 'category',
      label: '快速开始',
      link: { type: 'generated-index', title: '快速开始', description: '5 分钟搭建并运行你的第一个 RAG 问答 Demo' },
      collapsed: false,
      items: [
        '快速开始/installation',
        '快速开始/quickstart',
        '快速开始/demo-guide',
      ],
    },
    {
      type: 'category',
      label: '指南',
      link: { type: 'generated-index', title: '指南', description: '配置、部署与优化 RAG 系统的具体操作步骤' },
      collapsed: false,
      items: [
        '指南/configuration',
        '指南/data-ingestion',
        '指南/retrieval-tuning',
        '指南/deployment',
        '指南/security',
      ],
    },
    {
      type: 'category',
      label: 'API 参考',
      link: { type: 'generated-index', title: 'API 参考', description: 'RAG Tech Docs 的完整 API 接口文档' },
      collapsed: false,
      items: [
        'API参考/overview',
        'API参考/authentication',
        'API参考/errors',
        'API参考/rate-limits',
        'API参考/documents',
        'API参考/chat',
        'API参考/system',
      ],
    },
    {
      type: 'category',
      label: '原理与最佳实践',
      link: { type: 'generated-index', title: '原理与最佳实践', description: '深入理解 RAG 底层逻辑与调优策略' },
      collapsed: false,
      items: [
        '原理与最佳实践/rag-pipeline',
        '原理与最佳实践/chunking',
        '原理与最佳实践/evaluation',
      ],
    },
    {
      type: 'category',
      label: '资源',
      link: { type: 'generated-index', title: '资源', description: '常见问题、更新日志与贡献指南' },
      collapsed: false,
      items: [
        '资源/faq',
        '资源/changelog',
        '资源/contributing',
      ],
    },
    {
      type: 'category',
      label: '关于',
      link: { type: 'generated-index', title: '关于', description: '关于项目与作者' },
      collapsed: false,
      items: [
        '关于/about',
      ],
    },
  ],
};

module.exports = sidebars;