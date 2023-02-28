---
title: hexo + typora调教指南
typora-root-url: hexo-typora的博客体验
date: 2023-02-28 13:22:52
updated:
tags: [博客, hexo]
categories:
keywords: [博客, hexo]
description: hexo + typora调教指南
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

# hexo + typora调教指南

## 起因

Typora 是一款知名的 Markdown 编辑器，简单好用，体验良好。使用 hexo 搭建好博客后，主要是用 Markdown 来编写博客，typora 便是我的首选编辑器。但直接使用 typora 编写的 Markdown 文件，图片路径可能存在问题，就导致页面上图片无法显示。自己去改路径的话那就很麻烦了，好在 Typora 支持拖拽或复制来插入图片，并且可以复制到指定路径，或直接上传到图床，这就非常方便了。

## 分析

然而 hexo 并不支持图片相对路径的导入。比如说有一个博文名字叫做 `post1.md`，typora 默认设置自动存储位置为 `post1.assets/` 如果我想在文档里面引用图片 `img.jpg` 需要这么写：`![img](post1.assets/img.jpg)`，这样 typora 能够正确读取图片文件。但是 hexo 不能。hexo 会把路径解析成 `<year>/<month>/<day>/post1/post1.assets/img.jpg`，也不会把文件夹 `post1.assets/` 复制到 `public` 目录下。这样就很难受。

在 hexo `_config.yml` 配置文件里配置 `post_asset_folder: true` 后，Hexo 将会在你每一次通过 `hexo new [layout] <title>` 命令创建新文章时自动创建一个文件夹。这个资源文件夹将会有与这个文章文件一样的名字。将所有与你的文章有关的资源放在这个关联文件夹中之后，你可以通过相对路径来引用它们，这样你就得到了一个更简单而且方便得多的工作流。hexo 下会形成这样的目录：

public 目录

![public 目录](image-20230228134032210.png)

source 目录：

![source 目录](image-20230228134148922.png)

可以看到原来与资源文件夹 `mc-server-local-ip-network-accelerate` 分开的 Markdown 文件 被 hexo 放在同一个目录下了

所以我们在 Markdown 文件里面写的相对图片路径 Hexo 无法读取到。比如：`![img](./mc-server-local-ip-network-accelerate/2.png)`

## 解决方法

如果你知道 typora-root-url 这一个 typora 特有的 Markdown Front-matter 的话你就知道怎么解决了。

**什么是 Front-matter？**

Front-matter 是 markdown 文件最上方以 `---` 分隔的区域，用于指定个别档案的变数。

typora-root-url 指定了 typora 把哪里当做图片搜索的根目录，就像程序的 workspace 一样。

我们只需要设定 typora-root-url 为资源文件夹，然后在 typora 里面导入图片资源时写相对路径，typora 就会自动以 typora-root-url 为起始目录开始搜索。

举个例子：设置 typora-root-url 为 `resource`，在 typora 里面导入图片 `img1.jpg`，这个时候 typora 就会去找 `resource/img1.jpg`。

因为使用的是相对路径，hexo 也能很好识别。如果在 hexo 的 scaffolds 下修改 Markdown 模板就可以让 hexo 自动为你填写 typora-root-url 了

举个例子（post.md）：

```markdown
---
title: {{ title }}
typora-root-url: {{ title }}
date: {{ date }}
updated:
tags: {{ tags }}
categories: {{ categories }}
keywords: {{ keywords }}
description: {{ description }}
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
```

hexo 会使用文件名来替换 {{ title }} 字段。







































