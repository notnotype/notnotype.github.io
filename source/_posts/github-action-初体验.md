---
title: github_action_初体验
typora-root-url: github-action-初体验
date: 2023-02-28 14:02:37
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---

# GitHub Actions 初体验

## 起因

笔者最近参加了 [BA Archive Viewer Project](BA Archive Viewer Project) 组织。为其项目 [碧蓝档案剧情播放器](https://github.com/ba-archive/ba-story-player) 和 [momotalk查看器](https://github.com/ba-archive/blue-archive-story-viewer) 编写一个剧情分割器，是 CI 的一部分，用来将原始游戏数据分割成内部格式。因项目成员只关心分割好的数据，不关心原始数据，同时配置项目运行环境也很麻烦。所以笔者决定借助 GitHub 提供的 Github Actions 来自动分割数据然后 release 分割后的数据提供下载。

## 项目介绍

项目地址：https://github.com/ba-archive/ba-razor

项目是使用 Python + Poetry 写的。使用 Poetry 管理环境是一件很舒服的事情。Poetry 和 Anaconda 相比存储环境所消耗的空间小了很多，Anaconda 一个环境动不动就消耗几个GB，而 Poetry 则只需要 100MB 不到

项目依赖我们组织的另一个数据仓库 ba-data（私有），这个是此剧情分割器的数据源

项目是有使用 click 命令行解析库包装的 cli (command line interface) 程序，可以更为精准的控制分割范围。同时还提供了 process_all.sh 来分割全部内容。

## 过程

通过阅读 [GitHub Actions 文档](https://docs.github.com/zh/actions) 大概了解了如何使用 GitHub Actions

GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

GitHub Actions 不仅仅是 DevOps，还允许您在存储库中发生其他事件时运行工作流程。 例如，您可以运行工作流程，以便在有人在您的存储库中创建新问题时自动添加相应的标签。

GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

GitHub Actions 具有一些组件：

- 工作流  （工作流包含一个或多个可按顺序或并行运行的作业）
- 事件  （事件是存储库中触发工作流程运行的特定活动）
- 作业  （作业是工作流中在同一运行器上执行的一组步骤。 每个步骤要么是一个将要执行的 shell 脚本，要么是一个将要运行的动作。）
- 操作  （操作是用于 GitHub Actions 平台的自定义应用程序，它执行复杂但经常重复的任务。 ）
- 运行程序  （运行程序是触发工作流时运行工作流的服务器。）

对于我的需求，主要使用了事件、作业、操作和运行程序这几个部分

**具体流程：**

1. clone 此项目
2. clone ba-data
3. 安装 python
4. 安装 poetry 依赖
5. 设置环境变量并运行 `process_all.sh` 来进行分割
6. 压缩输出文件 `output`
7. release

将以上流程转换为 `.yml` 格式

```yaml
name: Auto release
on:
  push:
    tags:
      - "**"
env: 
  GIT_PATH: "ba-data"
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/checkout@v3
        with:
          repository: electricgoat/ba-data
          path: ba-data
      - name: Install poetry
        run: pipx install poetry==1.3.1
      - name: Set up Python 3.10
        uses: actions/setup-python@v3
        with:
          python-version: "3.10"
          cache: "poetry"
      - name: Install dependencies
        run:  "poetry install"
      - name: Razoring
        run: bash process_all.sh
      - name: Compress output
        run: |
          tar czf output.tar.gz --directory=output .
      - uses: "softprops/action-gh-release@v1"
        with:
          files: output.tar.gz
```

这个一个在任何一个 tags 提交后触发的 action。运行在 ubuntu-latest 操作系统上，首先使用运行程序 `actions/checkout@3` clone 两个仓库。然后使用 pipx 安装 poetry。然后安装 python3.10，安装依赖，运行 `process_all.sh`，调用 `tar` 命令压缩输出文件。使用第三方运行程序 `softprops/action-gh-release@v1` release 文件。

{% note info simple %}
为什么要在安装 python 前使用 pipx 来安装 poetry 而不是在安装 python 后使用 `pip install poetry` 安装呢？因为运行程序 `actions/setup-python@v3` 如果需要缓存 poetry 的话（`cache: "poetry"`），需要依赖 poetry

{% endnote %}

---

把这个上面的文件保存在 `.github/workflows/ci.yml` 下然后 push 就可以了

每一次 tags 提交都能在 GitHub 项目页面下的 Actions 标签下看到执行过程了

![image-20230228150751266](image-20230228150751266.png)

也能看到 release 有输出文件下载

![image-20230228150913675](image-20230228150913675.png)



























