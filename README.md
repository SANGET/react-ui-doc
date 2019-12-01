# react-ui-doc

使用 Gatsby、React 和 Mdx 快速编写 UI 文档用例，或者制作网站。

[English](./README_en.md)

## 动机

已经有很多成熟好用的 UI 文档生成工具，例如 StoryBook、Docz 等，为什么我还要造轮子？

先看看成熟的工具的对比：

- `StoryBook` 支持全语言，但是交互界面已经被固定了，可定制程度不高，并且自有一套 UI 测试编写逻辑，入门门槛比较高。
- `Docz` 是最早集成了 React、Mdx 编写文档的工具，0 配置门槛，容易上手。但是随着项目的扩展，编译速度极慢，开发体验不好，并且对开发者的 UI 强加 css，过分入侵。
- `react-styleguidist` 本人最早开始使用的文档生成工具，但问题太多，例如把所有页面写到一页，可扩展性差，所以后续没有关注。
- `其他` 也有很多优秀工具，不一一列举。

## 快速开始

> 通过 gatsby-cli

先安装 gatsby cli

```shell
npm i gatsby -g
gatsby new yourProjectName https://github.com/SANGET/gatsby-react-ui-doc
cd yourProjectName
yarn start
```

然后愉快的开始编写 UI 文档，详情查看[这里](/docs/slow-start.md)
