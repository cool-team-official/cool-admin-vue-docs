# App.vue

入口主组件。

```html
<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
  import { ElConfigProvider } from "element-plus";
  import zhCn from "element-plus/dist/locale/zh-cn.mjs";
</script>
```
