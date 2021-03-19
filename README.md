
<a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/1200px-Baskin-Robbins_logo.svg.png" title="Mb" alt="MB"></a>

# Creamy - 31アイスクリーム会計サーバーシステム

## [GraphQL Playground https://creamyy.mrmbiuzz.link/graphql](https://creamyy.mrmbiuzz.link/graphql)
> Powered by Apollo Server, TypeGraphQL

## 目次

- [インストール](#インストール)
- [ライセンス](#ライセンス)

---

## システムの構造 /server
- /aws/codedeploy: AWS CodeDeploy Client 設定
- src/
- /entities: データベースのモデル
- /utils: よく使う便利なfunction
- /resolvers: GraphQL Resolver
- /types: TypeScriptの定義のファイル
- /middlewares: 認証のためのmiddleware
---
## インフラの構造
- 全てのインフラはAWSで
- Terraformでインフラ管理
- AutoScalingGroupに複数のEC2Instanceに入れるつもりだったのですが、貧乏のため、やめました。
- [![INSERT YOUR GRAPHIC HERE](https://lh3.googleusercontent.com/pw/ACtC-3fgoHI601hO3idi6piZHyTWCyVPMuS66fddnFNDmQ11IpFPSzB_M3g7otGnO0mirlnQttVlNM2X6hV_OywUJRqto2gFkbFaOTULPdJTCnAkcVFUOPDQrsTgDRpUcWMTB-ImVptvGqxquyvLU7rkibIg=w1112-h625-no?authuser=0)]()
---


## 設定
- /appspec.yml :  AWS CodeDeploy の設定
- /awsconfig.json: AWS アカウントの情報を入力してください
- /ecosystem.config.js: PM2 の環境設定
- /ormconfig.js: TypeORMのデータベース設定(URL, username, password, schema)
- terraform/variables.tf: AWS アカウントの情報を入力してください
---

## インストール

### クローンする

- このレポジトリをクローンする

```shell
$ git clone https://github.com/mizhstreet/creamy-server.git
```

### 開発

- /serverでこのcommandを打ってください

```shell
$ yarn dev
```

### インフラデプロイ
- /terraformでプランを見る
```shell
$ terraform plan
```
- /terraformでインフラ作成
```shell
$ terraform apply
```


---

## デプロイ
- 自動的にCodeDeployでアプリケーションをデプロイする。

```shell
$ yarn deploy
```

---

## ライセンス

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
