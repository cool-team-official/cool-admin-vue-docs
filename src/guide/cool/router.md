# router

路由配置。首次扫描模块的页面文件，然后在访问的时候判定是否存在路由，否则注册该页面组件。

```ts
const files = import.meta.glob([
  "/src/modules/*/{views,pages}/**/*",
  "!**/components",
]);

// ...

// 预先注册路由
const { isReg, route } = await router.register(to.path);
```
