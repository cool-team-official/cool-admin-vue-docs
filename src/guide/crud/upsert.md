# cl-upsert

新增、编辑组件，基于 [cl-form](./form)，参数、方法皆可用

## useUpsert

cl-upsert 标签绑定 ref 值后使用 useUpsert 加载组件

- const 定义必须与 ref 一致

```js
const Upsert = useUpsert(Options);
```

### Options

| 参数     | 说明                               | 类型                                        | 可选值       | 默认值 |
| -------- | ---------------------------------- | ------------------------------------------- | ------------ | ------ |
| items    | [表单项](./form#items)             | array                                       |              |        |
| props    | [表单配置](./form#formprops)       | object                                      |              |        |
| op       | [操作按钮配置](./form#openoptions) | object                                      |              |        |
| dialog   | [对话框配置](./form#openoptions)   | object                                      |              |        |
| plugins  | [插件](./form#插件)                | Plugins                                     |              | []     |
| sync     | 是否同步打开                       | boolean                                     | true / false | false  |
| onOpen   | 打开时的钩子                       | function(data)                              |              |        |
| onOpened | 打开后的钩子                       | function(data)                              |              |        |
| onClose  | 关闭时的钩子                       | function(action: 'close' \| 'submit', done) |              |        |
| onInfo   | 编辑获取详情时的钩子               | function(data, { next, done, close })       |              |        |
| onSubmit | 表单提交时的钩子                   | function(data, { next, done, close })       |              |        |

### Ref

| 参数   | 说明         | 类型           | 返回值                      |
| ------ | ------------ | -------------- | --------------------------- |
| mode   | 打开方式     | string         | 'add' \| 'info' \| 'update' |
| submit | 表单提交     | function(data) | void                        |
| close  | 表单关闭     | function()     | void                        |
| add    | 新增方式打开 | function()     | void                        |
| append | 追加方式打开 | function(data) | void                        |
| edit   | 编辑方式打开 | function(data) | void                        |
| info   | 详情方式打开 | function(data) | void                        |

## 示例

### 基础用法

<code-demo>

```html
<template>
  <cl-crud ref="Crud">
    <cl-row>
      <cl-refresh-btn />
      <cl-add-btn />
    </cl-row>
    <cl-row>
      <cl-table ref="Table" :auto-height="false"></cl-table>
    </cl-row>
    <cl-row>
      <cl-flex1 />
      <cl-pagination />
    </cl-row>
    <cl-upsert ref="Upsert"></cl-upsert>
  </cl-crud>
</template>

<script lang="ts" setup>
  import {
    useCrud,
    useUpsert,
    useTable,
    useForm,
    useAdvSearch,
  } from "@cool-vue/crud";
  import { reactive, ref, watch } from "vue";

  const Crud = useCrud(
    {
      service: "test",
    },
    (app) => {
      app.refresh();
    }
  );

  const Upsert = useUpsert({
    items: [
      {
        label: "姓名",
        prop: "name",
        required: true,
        component: {
          name: "el-input",
        },
      },
    ],
  });

  const Table = useTable({
    columns: [
      {
        type: "selection",
      },
      {
        label: "姓名",
        prop: "name",
      },
      {
        label: "创建时间",
        prop: "createTime",
        sortable: true,
      },
      {
        type: "op",
        width: 200,
        buttons: ["edit", "delete"],
      },
    ],
  });
</script>
```

<template #preview>
<cl-crud ref="Crud">
<cl-row>
<cl-refresh-btn />
<cl-add-btn />
</cl-row>
<cl-row>
<cl-table ref="Table" :auto-height="false"></cl-table>
</cl-row>
<cl-row>
<cl-flex1 />
<cl-pagination />
</cl-row>
<cl-upsert ref="Upsert" />
</cl-crud>
</template>

</code-demo>

<script lang="ts" setup>
import { useCrud, useUpsert, useTable, useForm, useAdvSearch } from "@cool-vue/crud";
import { reactive, ref, watch } from "vue";

const Crud = useCrud(
	{
		service: "test"
	},
	(app) => {
		app.refresh();
	}
);

const Upsert = useUpsert({
	items: [
		{
			label: "姓名",
			prop: "name",
			required: true,
			component: {
				name: 'el-input'
			}
		}
	],
});

const Table = useTable({
	columns: [
		{
			type: "selection"
		},
		{
            label: "姓名",
            prop: "name"
		},
		{
			label: "创建时间",
			prop: "createTime",
			sortable: true
		},
		{
			type: "op",
			width: 200,
			buttons: ["edit", "delete"]
		}
	]
});

</script>

### 子组件使用

子组件使用时不需要传入 `items` 参数，主要作为监听表单事件和获取组件实例

```js
const Upsert = useUpsert({
  onOpen(data) {
    // 打开时
  },

  onOpened(data) {
    // 打开后
  },
});

// Upsert.value.form 表单值
```

### onInfo

编辑下，会根据行的 `id` 调用 `service.info` 的接口，获取完整的数据后，再赋予表单。

- 如果不希望调用接口，则直接在 `onInfo` 钩子下执行 `done` 返回传入的数据：

```js
const Upsert = useUpsert({
  onInfo(data, { done }) {
    done(data);
  },
});
```

- 如果希望在编辑时，处理传入的参数或者处理请求后的数据，则配合使用 `next` 和 `done`：

```js
const Upsert = useUpsert({
  async onInfo(data, { done, next }) {
    const newData = await next({
      ...data,
      status: false,
    });

    if (!newData.name) {
      newData.name = "未命名";
    }

    done(newData);
  },
});
```

### onSubmit

- 如果希望在提交时，处理传入的参数，使用 `on-submit` 钩子函数：

```js
const Upsert = useUpsert({
  async onSubmit(data, { done, close, next }) {
    next({
      ...data,
      status: false,
    });

    // done 关闭加载状态
    // close 关闭弹窗
  },
});
```
