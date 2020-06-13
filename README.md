# Vue Nuxt Handson

## 環境構築

### 事前準備

[nodenv](https://github.com/nodenv/nodenv)や[nodebrew](https://github.com/hokaccha/nodebrew)、[インストーラー](https://nodejs.org/ja/download/)などを利用して `node v14.3.0` 環境を用意してください。

また、 `yarn v1.22.4` をインストールしてください。

```
$ node --version
v14.3.0
$ npm install -g yarn@1.22.4
$ yarn --version
1.22.4
```

### パッケージインストール

```
$ yarn
```

### dev server立ち上げ

```
$ yarn serve
```


## 環境構築(docker)

```
$ docker build -t vue-nuxt-handson .
$ docker run --rm -p 8080:8080 -v "$(pwd):/usr/src/app" vue-nuxt-handson
```

## build

```
$ yarn build
```

## unit test

```
$ yarn test:unit
```

## e2e test

```
$ yarn test:e2e
```

## lint

```
$ yarn lint
```
