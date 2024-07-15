# cl-pagination

分页显示组件，该组件继承 [el-pagination](https://element-plus.gitee.io/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7) 并享有它的方法及参数

## 示例

### 基础用法

<code-demo>

```html
<template>
<cl-crud ref="Crud">
    <cl-pagination />
</cl-crud>
</template>

<script lang="ts" setup>
    import { useCrud, useTable } from "@cool-vue/crud";

	const Crud = useCrud({ service: "test" }, (app) => {
		app.refresh({ size: 5 });
	});
</script>
```

<template #preview>
    <cl-crud ref="Crud">
        <cl-pagination />
    </cl-crud>
</template>

</code-demo>

### 自定义布局

配置 `layout="prev, pager, next"`

### 配置初始值

如 `page-size=100`

<script lang="ts" setup>
    import { useCrud, useTable } from "@cool-vue/crud";

	const Crud = useCrud({ service: "test" }, (app) => {
		app.refresh({ size: 5 });
	});
</script>
