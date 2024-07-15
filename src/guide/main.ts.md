# main.ts

由 `bootstrap` 方法处理程序的加载。

```ts
import { createApp } from "vue";
import App from "./App.vue";
import { bootstrap } from "./cool";

const app = createApp(App);

// 启动
bootstrap(app)
  .then(() => {
    app.mount("#app");
  })
  .catch((err) => {
    console.error("COOL-ADMIN 启动失败", err);
  });
```
