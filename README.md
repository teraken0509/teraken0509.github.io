# teraken0509.github.io

[teraken.dev](https://teraken.dev) 向けの個人レジュメサイトです。  
[Start Bootstrap - Resume](https://startbootstrap.com/theme/resume) をベースにしています。

ブログ（`/blog`）は [Eleventy](https://www.11ty.dev/) で Markdown からビルドします。

## 必要環境

- Node.js（`.node-version` を参照）
- npm

## セットアップ

```bash
npm install
npm start
```

`npm start` でビルドとローカルプレビュー（BrowserSync / ポート 3000）が起動します。  
ブログは http://localhost:3000/blog/ です。

## スクリプト

| コマンド | 内容 |
|----------|------|
| `npm start` | vendor 同期 + CSS/JS + ブログビルド + 監視・ライブリロード |
| `npm run build` | vendor / CSS / JS / ブログをビルド |
| `npm run blog` | Eleventy のみ実行（`blog-src` → `blog/`） |
| `npm run vendor` | `node_modules` から `vendor/` を再生成 |

`vendor/` / `css/` / `js/*.min.js` / `blog/` はビルド成果物のため Git 管理外です。

## ブログ記事の追加

1. `blog-src/posts/` に Markdown を追加する（例: `my-post.md`）
2. front matter を書く:

```markdown
---
title: 記事タイトル
description: 一覧用の短い説明
date: 2026-09-23
---

本文
```

3. `npm run build`（または `npm start` 中なら保存で自動ビルド）

テンプレートは `blog-src/_includes/`、サイト共通データは `blog-src/_data/site.json` です。

## デプロイ

`main` への push で GitHub Actions がビルドし、GitHub Pages へデプロイします。  
リポジトリの Settings → Pages → Source は **GitHub Actions** にしてください。

## ライセンス

元テンプレートは MIT License（Start Bootstrap / Blackrock Digital）です。
