# service

服务层负责处理发起的请求, 并返回对服务端的响应。

:::tip
与以往不一样的是，它不再需要前端开发者去创建与接口对应的文件，而是通过 EPS 的方法自动生成。
:::

1. 使用前，有着数不尽的相似 api 文件：不好维护、命名长的害怕、没有提示、每次新需求都要问后端...

/api/user.js

```js
import { post } from "/@/utils/request";

export function getUserList(data) {
  return post("/user/list", data);
}

export function getUserInfo(data) {
  return post("/user/info", data);
}
```

/views/user.vue

```html
<script>
  import { getUserList, getUserInfo } from "/@/api";

  function refresh() {
    getUserList({ page: 1 }).then((res) => {
      list.value = res.list;
    });
  }
</script>
```

2. 使用后，摸鱼时间多了

/views/user.vue

```html
<script>
  const { service } = useCool();

  function refresh() {
    service.user.page({ page: 1 }).then((res) => {
      list.value = res.list;
    });
  }
</script>
```

## 说明

`service` 的结构是根据 `接口路径` 转化成对应的层级，如下图可以很清晰的看到所有的接口及权限：

<img src="/images/service-console.gif" />

在 `vscode` 中也能很友好的提示：

<img src="/images/service-tip.gif" />

## 配置

[请求地址配置，点我跳转！！！](/src/guide/config.html)

## EPS

开发环境下，系统通过 `/admin/base/open/eps` 获取所有的接口及实体。然后调用本地服务 `/__cool_eps` 生成 `build/cool/dist/eps.d.ts` 和 `build/cool/dist/eps.json` 两个文件。

- eps.d.ts 用于 `service` 的类型提示

- eps.json 用于生成 `service` 数据（`build` 时请确保该文件存在且最新）

:::warning
控制台出现 `service` 相关的报错，如，`service.xxx is not a function` 等问题时，请查看 `network` 中的 `/admin/base/open/eps` | `/__cool_eps` 接口是否正常
:::

## 编辑

程序默认使用 `eps` 方式（即后端所有开放的接口，都会在前端生成对应的方法），无需自己手动一个个添加：

```js
// /config/index.ts
{
  test: {
    eps: true;
  }
}
```

在一些特殊的情况下，也可以自己 `自定义配置` service，在 `/src/modules/demo/service` 目录下新建 `test.ts` 文件：

```ts
// /src/modules/demo/service/test.ts
import { BaseService, Service } from "/@/cool";

@Service("demo/test")
class Test extends BaseService {}

export default Test;
```

## 使用

引入

```ts
// 方式1
import { useCool } from "/@/cool";
const { service } = useCool();

// 方式2
import { service } from "/@/cool";
```

- 通过方法调用

请求路径：/admin/demo/test/page

```ts
service.demo.test.page().then((res) => {
  console.log(res);
});
```

该方式会保留 `test` 的前缀地址，请求路径：/admin/demo/test/add2

```ts
service.demo.test
  .request({
    url: "/add2",
    method: "POST",
    data: {},
  })
  .then((res) => {
    console.log(res);
  });
```

- 复杂请求的情况下：

请求路径：https://show.cool-admin.com/api/admin/test/page

```ts
service
  .request({
    url: "https://show.cool-admin.com/api/admin/test/page",
    method: "GET",
    data: {},
    params: {},
    header: {
      token: "",
    },
  })
  .then((res) => {
    console.log(res);
  });
```

## 权限

[权限判断，点我跳转！！！](/src/guide/permission.html)
