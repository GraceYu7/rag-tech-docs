import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RAG Tech Docs',
  tagline: '技术文档 + API 文档 + RAG Demo',
  favicon: 'img/logo.ico',

 
  // 这里设置为你的 GitHub Pages 地址
  url: 'https://graceyu7.github.io',
  // 仓库名，必须以 / 开头和结尾
  baseUrl: '/rag-tech-docs/',
  
   /** 更改为使用 Vercel 部署文档站点
   // 这里设置为你的 Vercel 地址
  url: 'https://rag-tech-docs.vercel.app',
  // 仓库名，必须以 / 开头和结尾
  baseUrl: '/',
  */

  // GitHub 部署配置
  organizationName: 'GraceYu7', // 你的 GitHub 用户名
  projectName: 'rag-tech-docs', // 仓库名
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn',

  // 国际化配置
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // 启用 Mermaid 图表支持
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // 请将下面的链接替换为你的 GitHub 仓库地址
          editUrl: 'https://github.com/GraceYu7/rag-tech-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/GraceYu7/rag-tech-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      // 顶部导航栏配置
      navbar: {
        title: 'RAG Tech Docs',
        logo: {
          alt: 'RAG Tech Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/概览/intro',
            label: '文档',
            position: 'left',
          },
          {
            to: '/docs/API参考/overview',
            label: 'API 参考',
            position: 'left',
          },
          {
            to: '/docs/快速开始/quickstart',
            label: '快速开始',
            position: 'left',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/GraceYu7/rag-tech-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 页脚配置
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              { label: '概览', to: '/docs/概览/intro' },
              { label: '快速开始', to: '/docs/快速开始/quickstart' },
              { label: 'API 参考', to: '/docs/API参考/overview' },
            ],
          },
          {
            title: '资源',
            items: [
              { label: '常见问题', to: '/docs/资源/faq' },
              { label: '更新日志', to: '/docs/资源/changelog' },
              { label: '贡献指南', to: '/docs/资源/contributing' },
            ],
          },
          {
            title: '更多',
            items: [
              { label: '博客', to: '/blog' },
              {
                label: 'GitHub',
                href: 'https://github.com/GraceYu7/rag-tech-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RAG Tech Docs. Built with Docusaurus.`,
      },

      // 代码块主题
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;