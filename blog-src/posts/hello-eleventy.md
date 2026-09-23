---
title: Eleventy でブログを始めました
description: Markdown から自動ビルドするブログを /blog に追加しました。
date: 2026-09-23
---

このサイトの `/blog` は [Eleventy](https://www.11ty.dev/) でビルドしています。

## 記事の書き方

1. `blog-src/posts/` に Markdown ファイルを追加する
2. front matter に `title` / `date` / `description` を書く
3. `npm run build`（または `npm start`）で HTML が生成される

```markdown
---
title: 記事タイトル
description: 一覧に出す短い説明
date: 2026-09-23
---

本文を Markdown で書く。
```

デプロイはこれまでどおり `main` への push で GitHub Actions が担当します。
