# config

项目配置文件。

## 目录结构

```js
/src/config
    ├──dev.ts 开发环境
    ├──prod.ts 生产环境
    ├──proxy.ts 代理配置
    └──index.ts 公共参数
```

## 代理配置

编辑配置文件 `proxy.ts`

- `/dev` 开发
- `/prod` 生产

```js
export const proxy = {
  "/dev/": {
    target: "http://127.0.0.1:8001",
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/dev/, ""),
  },

  "/prod/": {
    target: "https://show.cool-admin.com",
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/prod/, "/api"),
  },
};
```

### 切换代理

默认使用 `dev` 代理，如需修改只要在地址栏拼接参数 `proxy=${代理前缀}`，以便于调试多个服务：

- `http://localhost:9000?proxy=dev` 切换到 `dev`
- `http://localhost:9000?proxy=prod` 切换到 `prod`

## 请求地址

`baseUrl`

开发：

```ts
import { getUrlParam, storage } from "../utils";
import { proxy } from "./proxy";

export default {
  // 根地址
  host: proxy["/dev/"].target,

  // 请求地址
  get baseUrl() {
    let proxy = getUrlParam("proxy");

    if (proxy) {
      storage.set("proxy", proxy);
    } else {
      proxy = storage.get("proxy") || "dev";
    }

    return `/${proxy}`;
  },
};
```

生产：

```ts
import { proxy } from "./proxy";

export default {
  // 根地址
  host: proxy["/prod/"].target,

  // 请求地址
  baseUrl: "/api",
};
```

## 应用配置

`app`

```js
{
	// 项目信息
	app: {
		name: import.meta.env.VITE_NAME,

		// 菜单
		menu: {
			// 是否分组显示
			isGroup: false,
			// 自定义菜单列表
			list: []
		},

		// 路由
		router: {
			// 模式
			mode: "history",
			// 转场动画
			transition: "slide"
		},

		// 字体图标库
		iconfont: []
	},

	// 忽略规则
	ignore: {
		// 不显示请求进度条
		NProgress: [
			"/__cool_eps",
			"/base/open/eps",
			"/base/comm/person",
			"/base/comm/permmenu",
			"/base/comm/upload",
			"/base/comm/uploadMode",
			"/dict/info/data",
			"/space/info/add"
		],
		// 页面不需要登录验证
		token: ["/login", "/401", "/403", "/404", "/500", "/502"]
	},

	// 调试
	test: {
		token: "",
		eps: true
	},

	// 当前环境
	...(isDev ? dev : prod)
};
```

配置 `iconfont`: [https://www.iconfont.cn/](https://www.iconfont.cn/)

<!-- <img src='./images/iconfont-1.png' />

<img src='./images/iconfont-2.png' /> -->
