# cl-refresh-btn

刷新按钮组件，点击重新调用当前 `service` 的 `page` 接口

该组件继承 [el-button](https://element-plus.gitee.io/zh-CN/component/button.html)，同样支持它有所有的参数及方法。

## 示例

### 基础用法

<code-demo>

```html
<template>
  <cl-crud ref="Crud">
    <cl-row>
      <cl-refresh-btn />
      <cl-refresh-btn>自定义名称</cl-refresh-btn>
      <cl-refresh-btn type="danger">自定义类型</cl-refresh-btn>
    </cl-row>

    <cl-row>
      <cl-table ref="Table" />
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
		<cl-refresh-btn />
		<cl-refresh-btn>自定义名称</cl-refresh-btn>
		<cl-refresh-btn type="danger">自定义类型</cl-refresh-btn>
	</cl-row>
    <cl-row>
    	<cl-table ref="Table" :auto-height="false" />
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
                prop: "name",
            },
            {
                label: "创建时间",
                prop: "createTime",
            },
		]
	});
</script>
