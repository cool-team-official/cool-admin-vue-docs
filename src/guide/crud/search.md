# cl-search

筛选组件

## 示例

默认点击搜索按钮才会刷新数据，添加 `props.onChange` 参数可以在值改变时触发刷新

<code-demo>

```html
<template>
  <cl-crud ref="Crud">
    <cl-row>
      <cl-search ref="Search" />
    </cl-row>
  </cl-crud>
</template>

<script lang="ts" setup>
  import { useCrud, useTable, useSearch } from "@cool-vue/crud";
  import { ref } from "vue";

  const Search = useSearch({
    items: [
      {
        label: "昵称",
        prop: "name",
        component: {
          name: "el-input",
          props: {
            clearable: true,
          },
        },
      },
      {
        label: "状态",
        prop: "status",
        component: {
          name: "el-select",
          props: {
            clearable: true,
            onChange(status) {
              Crud.value?.refresh({ status, page: 1 });
            },
          },
          options: [
            {
              label: "开启",
              value: 1,
            },
            {
              label: "关闭",
              value: 0,
            },
          ],
        },
      },
    ],
  });

  const Crud = useCrud({ service: "test" }, (app) => {
    app.refresh();
  });

  const Table = useTable({
    columns: [
      {
        label: "昵称",
        prop: "name",
      },
      {
        label: "状态",
        prop: "status",
        dict: [
          {
            label: "开启",
            value: 1,
            type: "success",
          },
          {
            label: "关闭",
            value: 0,
            type: "danger",
          },
        ],
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
<cl-search ref="Search" />
</cl-row>
<cl-row>
<cl-table ref="Table" :auto-height="false"></cl-table>
</cl-row>
</cl-crud>
</template>

</code-demo>

<script lang="ts" setup>
	import { useCrud, useTable, useSearch } from "@cool-vue/crud";
	import { ref } from "vue";

	const Search = useSearch({
		items: [
			{
				label: "昵称",
				prop: "name",
				component: {
					name: "el-input",
					props: {
						clearable: true
					}
				}
			},
			{
				label: "状态",
				prop: "status",
				component: {
					name: "el-select",
					props: {
						clearable: true,
						onChange(status) {
							Crud.value?.refresh({ status, page: 1 });
						}
					},
					options: [
						{
							label: "开启",
							value: 1
						},
						{
							label: "关闭",
							value: 0
						}
					]
				}
			}
		]
	});

	const Crud = useCrud({ service: "test" }, (app) => {
		app.refresh();
	});

	const Table = useTable({
		columns: [
			{
				label: "昵称",
				prop: "name"
			},
			{
				label: "状态",
				prop: "status",
				dict: [
					{
						label: "开启",
						value: 1,
						type: "success"
					},
					{
						label: "关闭",
						value: 0,
						type: "danger"
					}
				]
			},
			{
				label: "创建时间",
				prop: "createTime"
			}
		]
	});
</script>

## 参数

| 参数      | 说明                       | 类型                     | 可选值 | 默认值 |
| --------- | -------------------------- | ------------------------ | ------ | ------ |
| data      | 默认表单值                 | object                   |        |        |
| items     | [表单项配置](./form#items) | ClForm.Item[]            |        |        |
| reset-btn | 是否显示重置按钮           | boolean                  |        | false  |
| on-load   | 初始化时钩子               | function(data)           |        |        |
| on-search | 搜索时钩子                 | function(data, { next }) |        |        |
