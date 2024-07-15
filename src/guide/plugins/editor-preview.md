# editor-preview

编辑器预览。

| 参数       | 说明         | 类型          | 可选值 | 默认值 |
| ---------- | ------------ | ------------- | ------ | ------ |
| modelValue | 绑定值       | string        |        |        |
| title      | 弹窗标题     | string        |        |        |
| name       | 编辑器名称   | monaco / wang |        |        |
| showBtn    | 是否显示按钮 | boolean       |        |        |
| height     | 高           | string        |        | 60vh   |
| width      | 宽           | string        |        | 60%    |
| formatter  | 内容格式化   | function      |        |        |
| tabs       | 多个内容展示 | array         |        |        |
| props      | 组件参数     | object        |        |        |

## 示例

```html
<template>
  <cl-editor-preview v-model="wang" name="wang" text="查看内容" />

  <cl-editor-preview
    v-model="monaco"
    name="monaco"
    :props="{
        language: 'typescript'
    }"
    text="查看代码"
  />
</template>

<script lang="ts" setup>
  import { ref } from "vue";

  const wang = ref(
    '<p><span style="font-size: 22px;"><em>富文本编</em></span><span style="color: rgb(216, 68, 147); font-size: 22px;"><em>辑器</em></span></p>'
  );

  const monaco = ref(`class User {
  main() {
    console.log('Name', 'COOL')
  }
}

const user = new User();
user.main();
`);
</script>
```
