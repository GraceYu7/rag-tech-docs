import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// 首页顶部的快捷入口
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/02-快速开始/quickstart">
            🚀 5 分钟快速开始
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{marginLeft: '1rem'}}
            to="/docs/01-概览/intro">
            📖 阅读项目介绍
          </Link>
        </div>
      </div>
    </header>
  );
}

// 定义导航卡片数据
const modules = [
  {
    title: '📋 概览',
    description: '了解 RAG Tech Docs 的项目定位、系统架构与核心功能特性。',
    link: '/docs/概览/intro', // 去掉了 01-
  },
  {
    title: '🚀 快速开始',
    description: '环境准备、安装指南与 5 分钟跑通 RAG 问答 Demo。',
    link: '/docs/快速开始/quickstart', // 去掉了 02-
  },
  {
    title: '📘 指南',
    description: '配置模型、数据导入、检索优化、部署与安全控制。',
    link: '/docs/指南/configuration', // 去掉了 03-
  },
  {
    title: '🔌 API 参考',
    description: '认证鉴权、错误码、限流策略与完整的 API 接口文档。',
    link: '/docs/API参考/overview', // 去掉了 04-
  },
  {
    title: '🧠 原理与最佳实践',
    description: '深入理解 RAG 流程、分块策略与效果评估方法。',
    link: '/docs/原理与最佳实践/rag-pipeline', // 去掉了 05-
  },
  {
    title: '📂 资源',
    description: '常见问题解答、更新日志与贡献指南。',
    link: '/docs/资源/faq', // 去掉了 06-
  },
  {
    title: '👤 关于',
    description: '关于本项目、作者以及背后的技术故事。',
    link: '/docs/关于/about', // 去掉了 07-
  },
];

// 导航卡片渲染组件
function ModuleCard({title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.cardContainer)}>
      <Link to={link} className={styles.cardLink}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 技术文档`}
      description="RAG 技术文档、API 文档与 Demo 演示">
      <HomepageHeader />
      <main className={styles.mainContainer}>
        <div className="container">
          <div className="row">
            {modules.map((module, idx) => (
              <ModuleCard key={idx} {...module} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}