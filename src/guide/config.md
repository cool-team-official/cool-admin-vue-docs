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

点击页面右下角的开发工具，代理列表由 `config/proxy.ts` 文件中的配置生成，点击切换代理，即可切换请求地址。

<img src="/public/images/dev-tools-proxy.jpg" />

## 请求地址

`baseUrl`

开发：

```ts
import { host, value } from "./proxy";

export default {
  // 根地址
  host,

  // 请求地址
  baseUrl: `/${value}`,
};
```

生产：

```ts
import { host } from "./proxy";

export default {
  // 根地址
  host,

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
		}
	},

	// 国际化配置
	i18n: {
		locale: storage.get('locale') || 'zh-cn',
		languages: [
			{
				label: '中文',
				value: 'zh-cn'
			},
			{
				label: '繁体中文',
				value: 'zh-tw'
			},
			{
				label: 'English',
				value: 'en'
			}
		]
	},

	// 忽略规则，不同模块可单独配置
	ignore: {
		// 不显示请求进度条
		NProgress: ['__cool_*'],
		// 页面不需要登录验证
		token: []
	},

	// 当前环境
	...(isDev ? dev : prod)
};
```
