# cl-multi-delete-btn

多选删除按钮组件，只有在表格选择的时候可用。

该组件继承 [el-button](https://element-plus.gitee.io/zh-CN/component/button.html)，同样支持它有所有的参数及方法。

## 示例

### 基础用法

<code-demo>

```html
<cl-crud ref="Crud">
	<cl-row>
		<cl-multi-delete-btn />
	</cl-row>

	<cl-row>
		<cl-table ref="Table" :auto-height="false" />
	</cl-row>
</cl-crud>

<script lang="ts" setup>
	import { useTable, useCrud } from "@cool-vue/crud";

	const Crud = useCrud(
		{
			service: "test"
		},
		(app) => {
			app.refresh();
		}
	);

	const Table = useTable({
		contextMenu: ['delete'],
		columns: [
			{
				type: "selection"
			},
			{
				label: "名称",
				prop: "name"
			}
		]
	});
</script>
```

<template #preview>

<cl-crud ref="Crud">
	<cl-row>
		<cl-multi-delete-btn />
	</cl-row>
    <cl-row>
    	<cl-table ref="Table" :auto-height="false" />
    </cl-row>
</cl-crud>

</template>

</code-demo>

<script lang="ts" setup>
	import { useTable, useCrud } from "@cool-vue/crud";

	const Crud = useCrud(
		{
			service: "test"
		},
		(app) => {
			app.refresh();
		}
	);

	const Table = useTable({
		contextMenu: ['delete'],
		columns: [
			{
				type: "selection"
			},
			{
				label: "名称",
				prop: "name"
			}
		]
	});
</script>
