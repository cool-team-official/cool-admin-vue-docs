# distpicker

省市区级联选择器。基于 [el-cascader](https://element-plus.gitee.io/zh-CN/component/cascader.html#%E7%BA%A7%E8%81%94%E9%9D%A2%E6%9D%BF)，可以使用它的全部参数及方法。

## 示例

```html
<template>
  <cl-distpicker v-model="value" />
  <span :style="{ marginLeft: '20px' }">{{ value }}</span>
</template>

<script lang="ts" setup>
  import { ref } from "vue";

  const value = ref([]);
</script>
```
