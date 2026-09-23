# teraken0509.github.io

[teraken.dev](https://teraken.dev) 向けの個人レジュメサイトです。  
[Start Bootstrap - Resume](https://startbootstrap.com/theme/resume) をベースにしています。

## 必要環境

- Node.js（`.node-version` を参照）
- npm

## セットアップ

```bash
npm install
npm start
```

`npm start` でビルドとローカルプレビュー（BrowserSync / ポート 3000）が起動します。

## スクリプト

| コマンド | 内容 |
|----------|------|
| `npm start` | vendor 同期 + CSS/JS ビルド + 監視・ライブリロード |
| `npm run build` | vendor / CSS / JS をビルド |
| `npm run vendor` | `node_modules` から `vendor/` を再生成 |

`vendor/` / `css/` / `js/*.min.js` はビルド成果物のため Git 管理外です。

## デプロイ

`main` への push で GitHub Actions がビルドし、GitHub Pages へデプロイします。  
リポジトリの Settings → Pages → Source は **GitHub Actions** にしてください。

## ライセンス

元テンプレートは MIT License（Start Bootstrap / Blackrock Digital）です。
