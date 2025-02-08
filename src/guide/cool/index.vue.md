# 全局组件

通过模块、插件配置中注入：

如：plugins/dev-tools/config.ts

```js
import { type ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
  return {
    index: {
      component: import("./components/index.vue"),
    },
  };
};
```
