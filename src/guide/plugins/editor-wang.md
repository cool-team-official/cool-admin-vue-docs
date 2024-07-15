# editor-wang

[wang](https://www.wangeditor.com/) 富文本编辑器。

| 参数       | 说明             | 类型             | 可选值 | 默认值  |
| ---------- | ---------------- | ---------------- | ------ | ------- |
| modelValue | 绑定值           | string           |        |         |
| mode       | 类型             | default / simple |        | default |
| height     | 高度             | string / number  |        | 500     |
| disabled   | 是否禁用         | boolean          |        | false   |
| preview    | 是否预览模式     | boolean          |        | false   |
| isSpace    | 是否使用文件空间 | boolean          |        | false   |

## 示例

```html
<template>
  <cl-editor-wang v-model="value" />
</template>

<script lang="ts" setup>
  import { ref } from "vue";

  const value = ref(
    '<p><span style="font-size: 22px;"><em>富文本编</em></span><span style="color: rgb(216, 68, 147); font-size: 22px;"><em>辑器</em></span></p>'
  );
</script>
```
