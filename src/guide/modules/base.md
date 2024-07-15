# base

## useStore

数据缓存

- app 应用信息，应用名称，配置参数

- user 用户信息，用户设置，退出等

- menu 菜单信息，路由列表，菜单组

```ts
import { useStore } from "/$/base";

const { app, user, menu } = useStore();
```

## checkPerm

检测是否有权限

```ts
import { checkPerm } from "/$/base";
import { useCool } from "/@/cool";

const { service } = useCool();

// 单个
checkPerm(service.base.sys.user.permission.add);

// 或者
checkPerm({
  or: [
    service.base.sys.user.permission.add,
    service.base.sys.user.permission.update,
  ],
});

// 并且
checkPerm({
  and: [
    service.base.sys.user.permission.add,
    service.base.sys.user.permission.update,
  ],
});
```

## cl-avatar

头像

| 参数             | 说明     | 类型             | 可选值               | 默认值   |
| ---------------- | -------- | ---------------- | -------------------- | -------- |
| modelValue       | 绑定值   | string           |                      |          |
| src              | 资源链接 | string           |                      |          |
| size             | 尺寸     | string \| number |                      | 36       |
| shape            | 模式     | string           | 'square' \| 'circle' | 'square' |
| background-color | 背景颜色 | string           | 颜色值               | #f7f7f7  |
| color            | 字体颜色 | string           | 颜色值               | #cccccc  |

## cl-code-json

json 格式预览

| 参数       | 说明           | 类型             | 可选值 | 默认值 |
| ---------- | -------------- | ---------------- | ------ | ------ |
| modelValue | 绑定值         | string \| object |        |        |
| popover    | 是否弹出框模式 | boolean          |        | false  |
| height     | 高度           | string \| number |        | 100%   |
| maxHeight  | 最大高度       | string \| number |        | 300    |

默认：

<img src="/images/code-json.png" />

弹出框模式：

<img src="/images/code-json-popover.png" />

## cl-svg

svg 图标，加载所有模块下 `static` 下 `icon-*.svg` 的文件

| 参数      | 说明                 | 类型            | 可选值 | 默认值 |
| --------- | -------------------- | --------------- | ------ | ------ |
| name      | 图标名称，对应文件名 | string          |        |        |
| className | 样式名称             | string          |        |        |
| size      | 图标大小             | string / number |        |        |

## cl-image

图片，已配置点击预览

| 参数       | 说明     | 类型           | 可选值                                     | 默认值 |
| ---------- | -------- | -------------- | ------------------------------------------ | ------ |
| modelValue | 资源链接 | string / array |                                            |        |
| src        | 资源链接 | string / array |                                            |        |
| size       | 图片大小 | number / array |                                            | 100    |
| fit        | 裁剪方式 | string         | fill / contain / cover / none / scale-down | cover  |

## cl-editor

由于第三方编辑器资源过大，不一定每个人都需要，so 使用该组件去渲染不确定的第三方编辑器，当第三方编辑器未注册的时候显示文本域 textarea。

| 参数 | 说明       | 类型   |
| ---- | ---------- | ------ |
| name | 组件标签名 | string |

:::warning
由于是完全继承，所以该组件可以调用 `name` 指定组件的所有方法和 支持所有的 `prop` 参数
:::

```html
<template>
  <cl-editor :ref="setRefs('editor')" name="cl-editor-monaco" />
</template>

<script lang="ts" setup>
  const { refs, setRefs } = useCool();

  // 调用格式化代码方法
  refs.editor.formatCode();
</script>
```
