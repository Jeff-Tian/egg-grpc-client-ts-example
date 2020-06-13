egg-grpc-client-ts-example

---

> [`egg-grpc-client-ts`](https://github.com/Jeff-Tian/egg-grpc-client-ts) 的应用实例

## 本地运行
```shell script
git clone https://github.com/Jeff-Tian/egg-grpc-client-ts-example
npm i
npm run dev
open http://localhost:7001
```

## 来由

应 [该 issue](https://github.com/Jeff-Tian/egg-grpc-client-ts/issues/7) 之请求，制作此仓库已给使用 [`egg-grpc-client-ts`](https://github.com/Jeff-Tian/egg-grpc-client-ts)  一个完整的示例。

## 前置条件

一个正常运行的 gRPC 服务。

本示例使用这个 [gRPC 服务](https://github.com/Jeff-Tian/nestjs-hero-grpc-sample-with-health-check) ，运行在 5000 端口。

你可以在本地

```shell script
git clone https://github.com/Jeff-Tian/nestjs-hero-grpc-sample-with-health-check
cd nestjs-hero-grpc-sample-with-health-check

npm start
```

运行这个 gRPC 服务。

## 开始

### 安装 egg

因为 [`egg-grpc-client-ts`](https://github.com/Jeff-Tian/egg-grpc-client-ts) 是一个 egg 插件，所以会被用在 egg 项目中。

按照 [eggjs](https://eggjs.org/zh-cn/intro/quickstart.html) 官网，创建 egg 项目：

```shell script
mkdir egg-grpc-client-ts-example && cd egg-grpc-client-ts-example
npm init egg --type=ts
npm i
```

### 本地运行

```shell script
npm run dev
open http://localhost:7001
```

看到页面返回 `hi, egg`

## 安装 `egg-grpc-client-ts` 插件

```shell script
npm i egg-grpc-client-ts --save
```

### 配置

```shell script
// config/plugin.ts

plugin.grpcClient = {
    enable: true,
    package: 'egg-grpc-client-ts',
};
```

```shell script
// config/config.default.ts

grpcClient: {
    clients: [
        {
            name: 'hero',
            protoPath: 'app/proto/hero',
            host: '0.0.0.0',
            port: 5000,
        },
    ],
}
```

### 在 service 中使用

改造 `app/service/Test.ts`：

```shell script
const result = await this.app.grpcClient
            .get('hero').hero
            .HeroService.FindOne({
                id: 1
            })

        return `hi, ${name}, this is from gRPC service: ${JSON.stringify(result)}`
```

## 运行

```shell script
npm run dev
open http://localhost:7001
```

这是看到页面上显示：

```
hi, egg, this is from gRPC service: {"id":1,"name":"John"}
```

# 祝贺你，成功了！
