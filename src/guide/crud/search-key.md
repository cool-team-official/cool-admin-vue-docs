# cl-search-key

的关键字搜索组件

## 基础用法

<code-demo>

```html
<template>
  <cl-crud ref="Crud">
    <cl-row>
      <cl-flex1 />
      <cl-search-key />
    </cl-row>
    <cl-row>
      <cl-table ref="Table"></cl-table>
    </cl-row>
  </cl-crud>
</template>

<script lang="ts" setup>
  import { useCrud, useTable } from "@cool-vue/crud";

  const Crud = useCrud({ service: "test" }, (app) => {
    app.refresh();
  });

  const Table = useTable({
    columns: [
      {
        type: "index",
        label: "#",
      },
      {
        label: "昵称",
        prop: "name",
      },
      {
        label: "创建时间",
        prop: "createTime",
      },
    ],
  });
</script>
```

<template #preview>

<cl-crud ref="Crud">
    <cl-row>
        <cl-flex1 />
        <cl-search-key />
    </cl-row>
    <cl-row>
        <cl-table ref="Table" :auto-height="false"></cl-table>
    </cl-row>
</cl-crud>

</template>

</code-demo>

## 多个字段选择

添加 `field-list` 参数可配置多个筛选字段

<code-demo>

```html
<cl-crud ref="Crud">
  <cl-row>
    <cl-refresh-btn />
    <cl-flex1 />
    <cl-search-key
      field="name"
      :field-list="[
				{
					label: '昵称',
					value: 'name'
				},
				{
					label: '手机号',
					value: 'phone'
				}
			]"
    />
  </cl-row>
  <cl-row>
    <cl-table ref="Table"></cl-table>
  </cl-row>
</cl-crud>

<script lang="ts" setup>
  import { useCrud, useTable } from "@cool-vue/crud";

  const Crud = useCrud({ service: "test" }, (app) => {
    app.refresh();
  });

  const Table = useTable({
    columns: [
      {
        type: "index",
        label: "#",
      },
      {
        label: "昵称",
        prop: "name",
      },
      {
        label: "创建时间",
        prop: "createTime",
      },
    ],
  });
</script>
```

<template #preview>
<cl-crud ref="Crud2">
	<cl-row>
	<cl-refresh-btn />
	<cl-flex1 />
	<cl-search-key
				field="name"
				:field-list="[
					{
						label: '昵称',
						value: 'name'
					},
					{
						label: '手机号',
						value: 'phone'
					}
				]"
			/>
	</cl-row>
	<cl-row>
		<cl-table ref="Table2" :auto-height="false"></cl-table>
	</cl-row>
</cl-crud>
</template>

</code-demo>

<script lang="ts" setup>
	import { useCrud, useTable } from "@cool-vue/crud";

	const Crud = useCrud({ service: "test" }, (app) => {
		app.refresh();
	});

	const Table = useTable({
		columns: [
			{
        type: "index",
        label: "#",
      },
			{
				label: "昵称",
				prop: "name"
			},
			{
				label: "创建时间",
				prop: "createTime"
			}
		]
	});

    const Crud2 = useCrud({ service: "test" }, (app) => {
		app.refresh();
	});

	const Table2 = useTable({
		columns: [
			{
        type: "index",
        label: "#",
      },
			{
				label: "昵称",
				prop: "name"
			},
			{
				label: "创建时间",
				prop: "createTime"
			}
		]
	});
</script>

## 参数

| 参数            | 说明           | 类型                       | 可选值 | 默认值       |
| --------------- | -------------- | -------------------------- | ------ | ------------ |
| modelValue | 绑定值         | array / string             |        |              |
| field           | 选中字段       | string                     |        | keyWord      |
| field-list      | 可选字段列表   | Array<{label, value}>      |        |              |
| on-search       | 搜索时的钩子   | function(params, { next }) |        |              |
| placeholder     | 输入框占位内容 | string                     |        | 请输入关键字 |

## 事件

| 事件名       | 说明             | 参数  |
| ------------ | ---------------- | ----- |
| field-change | 选择字段时触发   | field |
| change       | 绑定值改变时触发 | value |
