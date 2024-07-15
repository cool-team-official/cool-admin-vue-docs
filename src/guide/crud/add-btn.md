# cl-add-btn

新增按钮组件，点击弹出新增窗口 [cl-upsert](./upsert)。

该组件继承 [el-button](https://element-plus.gitee.io/zh-CN/component/button.html)，同样支持它有所有的参数及方法。

## 示例

### 基础用法

<code-demo>

```html
<template>
  <cl-crud ref="Crud">
    <cl-row>
      <cl-add-btn />
      <cl-add-btn>自定义名称</cl-add-btn>
      <cl-add-btn type="danger">自定义类型</cl-add-btn>
    </cl-row>
    <cl-row>
      <cl-table ref="Table" />
    </cl-row>
    <cl-upsert ref="Upsert" />
  </cl-crud>
</template>

<script lang="ts" setup>
  import { useTable, useCrud, useUpsert } from "@cool-vue/crud";

  const Crud = useCrud(
    {
      service: "test",
    },
    (app) => {
      app.refresh();
    }
  );

  const Table = useTable({
    columns: [
      {
        type: "index",
        label: "#",
      },
      {
        label: "名称",
        prop: "name",
      },
      {
        label: "创建时间",
        prop: "createTime",
      },
    ],
  });

  const Upsert = useUpsert({
    items: [
      {
        label: "名称",
        prop: "name",
        component: {
          name: "el-input",
        },
      },
    ],
  });
</script>
```

<template #preview>

<cl-crud ref="Crud">
	<cl-row>
		<cl-add-btn />
		<cl-add-btn>自定义名称</cl-add-btn>
		<cl-add-btn type="danger">自定义类型</cl-add-btn>
	</cl-row>
	<cl-row>
		<cl-table ref="Table" />
	</cl-row>
    <cl-upsert ref="Upsert" />
</cl-crud>

</template>

</code-demo>

<script lang="ts" setup>
	import { useTable, useCrud, useUpsert } from "@cool-vue/crud";

	const Crud = useCrud(
		{
			service: "test"
		},
		(app) => {
			app.refresh();
		}
	);

	const Table = useTable({
		columns: [
            {
                type: 'index',
                label: "#"
            },
			{
				label: "名称",
				prop: "name"
			},
            {
				label: "创建时间",
				prop: "createTime"
			}
		]
	});

    const Upsert = useUpsert({
        items: [
            {
				label: "名称",
				prop: "name",
                component: {
                    name: 'el-input'
                }
			}
        ]
    })
</script>
