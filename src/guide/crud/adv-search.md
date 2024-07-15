# cl-adv-search

右侧展开高级搜索抽屉

<code-demo title="示例">

```html
<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 按钮 -->
			<cl-adv-btn />
		</cl-row>
		<cl-row>
			<cl-table ref="Table" :auto-height="false"></cl-table>
		</cl-row>
		<!-- 弹窗 -->
		<cl-adv-search ref="AdvSearch" />
	</cl-crud>
</template>

<script lang="ts" setup>
	import { useCrud, useTable, useAdvSearch } from "@cool-vue/crud";

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
				label: "创建时间",
				prop: "createTime"
			}
		]
	});

	const AdvSearch = useAdvSearch({
		items: [
			{
				label: "昵称",
				prop: "name",
				component: {
					name: "el-input"
				}
			},
			{
				label: "状态",
				prop: "status",
				component: {
					name: "el-select",
					props: {
						clearable: true
					},
					options: [
						{
							label: "关闭",
							value: 0
						},
						{
							label: "开启",
							value: 1
						}
					]
				}
			}
		]
	});
</script>
```

<template #preview>
<cl-crud ref="Crud">
<cl-row>

<!-- 按钮 -->
<cl-adv-btn />
</cl-row>
<cl-row>
    <cl-table ref="Table" :auto-height="false"></cl-table>
</cl-row>
<!-- 弹窗 -->
<cl-adv-search ref="AdvSearch" />
</cl-crud>
</template>

</code-demo>

<script lang="ts" setup>
    import { useCrud, useTable, useAdvSearch } from "@cool-vue/crud";

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
				label: "创建时间",
				prop: "createTime"
			}
		]
	});

    const AdvSearch = useAdvSearch({
        items: [
            {
                label: "昵称",
                prop: "name",
                component: {
                    name: "el-input"
                }
            },
            {
                label: "状态",
                prop: "status",
                component: {
                    name: "el-select",
                    props: {
                        clearable: true
                    },
                    options: [
                        {
                            label: "关闭",
                            value: 0
                        },
                        {
                            label: "开启",
                            value: 1
                        }
                    ]
                }
            }
        ]
    })
</script>

## 参数

| 参数     | 说明                                      | 类型                          | 可选值                   | 默认值 |
| -------- | ----------------------------------------- | ----------------------------- | ------------------------ | ------ |
| title    | 标题                                      | string                        |                          |        |
| items    | [表单项](./form#items) | Array<ClForm.Item>            |                          |        |
| size     | 窗体大小                                  | string,number                 |                          | 30%    |
| op       | 操作按钮                                  | array                         | clear,reset,close,search |        |
| onSearch | 搜索钩子                                  | function(data, {next, close}) |                          |        |
