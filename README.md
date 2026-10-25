# Weijian LI · 个人网站

Astro 静态网站，发布目标为 https://cdsee045.github.io/ 。包含博客、项目、工具导航和 Profile 文稿。

完整的日常使用、内容修改和发布步骤请查看 [`使用说明.md`](./使用说明.md)。

## 本地使用

需要 Node.js 24。

```bash
npm ci
npm run dev
npm run build
npm run check:links
```

受限环境可设置 ASTRO_TELEMETRY_DISABLED=1 后运行。构建结果在 dist/。

## 修改内容

- 网站与工具数据：`src/data/site.js`。
- 首页自我介绍、个人经历、代表项目：`src/data/profile.js`，按注释补充即可。
- 关于页：`src/pages/about.astro`。
- 所有文章（包括从 Hexo 迁入的 18 篇）都在 `src/content/posts/`，每篇一个 Markdown 文件。修改旧文章时直接编辑对应文件。
- 新文章：复制 `templates/new-post.md` 到 `src/content/posts/`，填写标题、英文 slug、日期、分类、摘要，将 draft 改为 false。正文支持 Markdown。
- 新文章地址：`/blog/英文-slug/`；自动进入博客列表、博客搜索、RSS 和 sitemap。首页不展示最近文章。
- 图片：放入 `public/images/`，正文用 `/images/文件名`。
- Profile：`profile/README.md`，需放到独立的 `cdsee045/cdsee045` 仓库根目录。

## 旧站迁移情况

从公开的 `cdsee045/cdsee045.github.io` 仓库恢复 18 篇文章的已渲染 HTML，转换为 `src/content/posts/*.md`，保留发布日期。旧文章路径会跳转到新的 `/blog/英文-slug/` 路径。原 `blogs` 仓库仅有默认 Hello World，不能据此恢复原始 Markdown。

原始 HTML 数据备份在 `archive/hexo-posts.json`，逐篇清单和已知缺失图片记录在 `migration-report.json`。旧分类、标签、归档分页入口跳转至新博客列表。头像与已有文章资源保留在 public/；三张原站未提供的相对路径图片在正文标明缺失。

`scripts/import-hexo.mjs` 仅用于从旧站重新提取 HTML 备份，不会更新当前 Markdown 文章；日常写作无需运行。若找到原始文章 Markdown，可用原稿核对并替换转换内容，同时保留现有 `slug` 和 `legacySlug`。

## 发布到 GitHub Pages

1. 在旧 `cdsee045.github.io` 仓库创建备份分支，保留已有历史。
2. 将本项目源码提交到该仓库的新分支（不要上传 node_modules、dist、.astro），确认预览后合并到 main。
3. 仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
4. `.github/workflows/pages.yml` 会构建、检查内部链接并发布。也可以在 Actions 中手动运行。
5. 发布后检查首页、博客、工具过滤以及任意一个旧文章网址。
6. 创建公开的同名 Profile 仓库 `cdsee045`，将 `profile/README.md` 放在其根目录。Profile 中的链接应在网站上线后再发布。

回退：将 main 的网站改动 revert 后重新运行部署；旧代码保留在备份分支。不要强制覆盖旧仓库历史。

网站源码已发布到 `cdsee045/cdsee045.github.io`，推送到 `main` 后由 GitHub Actions 自动部署。

## 内容与版权

旧文章、头像和资源保持原作者权益。代码中的新布局可由账号所有者修改使用。引用第三方资源时保留其许可证；public/libs 中保留了旧站库及其随附许可文件。
