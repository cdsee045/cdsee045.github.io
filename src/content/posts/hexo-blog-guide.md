---
title: "博客教程"
slug: "hexo-blog-guide"
date: "2026-06-02"
category: "博客搭建"
description: "Hexo 新建博客、布局和常用命令记录。"
draft: false
legacySlug: "项目/博客搭建/项目/博客搭建/博客教程"
---

### 新建一篇博客

`hexo new [layout] <title>`<br>参数说明：layout 可选post page draft 默认是post 分别存放在source/_posts source source/_drafts下

### 编写markdown文档

#### Front-matter

以YAML格式书写<br>

```
---
title: 教程                  #标题名称
date:  2023/5/20 5:20:00    #建立日期
update:                     #更新日期
categories: 
    -apple
    -banana                 #分类  同级分类 不区分顺序
    -[apple.banana]         #嵌套分类
tags:
mathjax: true               #打开latex渲染  需要先修改主题配置文件中mathjax选项


---   # 必须和最后一行隔开
```

#### 预览并同步到github

hexo server -o<br>hexo generate<br>hexo deploy
