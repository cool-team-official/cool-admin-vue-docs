# packages

npm 源码包。

## 目录结构

```js
packages
    ├──crud
    └──vite-plugin
```

## crud

`cl-crud` 的组件库，页面的快速 CRUD 都依赖于它。

如需要自定 crud，编辑文件 `src/plugins/crud/config.ts`：

```ts
// npm
// import Crud, { locale, setFocus } from "@cool-vue/crud";
// import "@cool-vue/crud/dist/index.css";

// 调试、自定义crud
import Crud, { locale, setFocus } from "/~/crud/src";
import "/~/crud/src/static/index.scss";
```

## vite-plugin

vite 扩展插件，主要处理以下几点：

- 注入虚拟模块 `virtual:eps` `virtual:ctx` 等

- 生成 eps

- 解析 svg

- 创建菜单问案件

- script 标签绑定值

- 生成 uniapp 的上下文
