# cl-table

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

:::warning
该组件默认计算表格的流体高度 `max-height`，会依赖于 `cl-crud` 的高度。当 `cl-crud` 高度不是一个有效值时（如在对话框中使用），`cl-table` 内容会缺失。配置 `auto-height=false` 可以忽略计算，或者设置有效高度 `height`。
:::

## useTable

- const 定义必须与 ref 一致

```html
<cl-table ref="Table" />
```

```js
const Table = useTable(options);
```

## 示例

<code-demo>

```html
<template>
  <cl-crud ref="Crud">
    <cl-table ref="Table"></cl-table>
  </cl-crud>
</template>

<script lang="ts" setup>
  import { useCrud, useTable } from "@cool-vue/crud";
  import { ElMessage } from "element-plus";

  const Crud = useCrud({ service: "test" }, (app) => {
    app.refresh();
  });

  const Table = useTable({
    contextMenu: ["refresh", "check", "order-desc", "order-asc"],
    columns: [
      {
        type: "selection",
      },
      {
        label: "基础信息",
        children: [
          {
            label: "昵称",
            prop: "name",
          },
          {
            label: "工资",
            prop: "wages",
            formatter(row) {
              return "💰" + row.wages;
            },
          },
        ],
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
        sortable: "desc",
      },
      {
        type: "op",
        width: 120,
        buttons: [
          {
            label: "按钮1",
            onClick() {
              ElMessage.success("点击");
            },
          },
        ],
      },
    ],
  });
</script>
```

<template #preview>
<cl-crud ref="Crud">
<cl-table ref="Table" :auto-height="false"></cl-table>
</cl-crud>
</template>
</code-demo>

<script lang="ts" setup>
    import { useCrud, useTable } from '@cool-vue/crud';
	import { ElMessage } from 'element-plus';

    const Crud = useCrud({ service: 'test' }, (app) => {
        app.refresh()
    })

    const Table = useTable({
		contextMenu: ['refresh', 'check', 'order-desc', 'order-asc'],
        columns: [
			{
				type: 'selection'
			},
            {
				label: '基础信息',
				children: [
					{
						label: '昵称',
						prop: 'name',
					},
					{
						label: '工资',
						prop: 'wages',
						formatter(row) {
							return '💰' + row.wages
						}
					},
				]
			},
			{
				label: "状态",
				prop: "status",
				dict: [
					{
						label: "开启",
						value: 1,
						type: 'success'
					},
					{
						label: "关闭",
						value: 0,
						type: 'danger'
					}
				]
			},
            {
                label: '创建时间',
                prop: 'createTime',
				sortable: 'desc'
            },
			{
				type: 'op',
                width: 120,
				buttons: [{label: '按钮1', onClick() {
					ElMessage.success('点击')
				}}]
			}
        ]
    })
</script>

## 列类型

添加 `type` 参数：

- `index` 序号
- `selection` 多选框
- `op` [操作栏](#操作栏)
- `expand` 展开内容

```ts
const Table = useTable({
  columns: [
    {
      type: "op", // op, index, selection, expand
    },
  ],
});
```

当 `type="expand"` 时，配合插槽适用（detail 为自定义值）：

```html
<cl-table ref="Table">
  <template #column-detail="{ scope }"> 自由编辑，scope为当前行数据</template>
</cl-table>

<script setup lang="ts">
  const Table = useTable({
    columns: [
      {
        type: "expand",
        prop: "detail",
      },
    ],
  });
</script>
```

## 多级表头

添加 `children` 参数：

```ts
const Table = useTable({
  columns: [
    {
      label: "基础信息",
      children: [
        {
          label: "昵称",
          prop: "name",
        },
        {
          label: "工资",
          prop: "price",
        },
      ],
    },
  ],
});
```

## 默认排序

- 方式 1，配置 `defaultSort` 参数

```ts
const Table = useTable({
  defaultSort: {
    prop: "createTime",
    order: "descending",
  },
  columns: [
    {
      label: "创建时间",
      prop: "createTime",
      sortable: "desc",
    },
  ],
});
```

- 方式 2，配置 `sortable` 参数

```ts
const Table = useTable({
  columns: [
    {
      label: "创建时间",
      prop: "createTime",
      sortable: "desc",
    },
  ],
});
```

## 插槽

使用 `template` 标签，绑定插槽名 `column-${prop}` 即可

- `scope` 为行数据

```html
<cl-table ref="Table">
  <template #column-name="{ scope }">{{ scope.row.name }}</template>
</cl-table>

<script setup lang="ts">
  const Table = useTable({
    columns: [
      {
        label: "昵称",
        prop: "name",
      },
    ],
  });
</script>
```

## 操作栏

配置 `buttons` 参数，默认为 `['edit', 'delete']`

可选值：

- `info` 详情
- `edit` 编辑
- `delete` 删除

```ts
const Table = useTable({
  columns: [
    {
      type: "op",
      width: 300,
      buttons: ["info", "edit", "delete"],
    },
  ],
});
```

- 使用 `slot-*` 自定义插槽名

```html
<cl-table>
  <template #slot-btn="{ scope }">
    <el-button text bg>新增</el-button>
  </template>
</cl-table>

<script lang="ts" setup>
  const Table = useTable({
    columns: [
      {
        type: "op",
        buttons: ["slot-btn"],
      },
    ],
  });
</script>
```

- 使用数据对象

```ts
const Table = useTable({
  columns: [
    {
      type: "op",
      buttons: [
        {
          label: "新增",
          type: "success",
          onClick({ scope }) {
            // scope行数据
          },
        },
      ],
    },
  ],
});
```

- 使用方法

```ts
const Table = useTable({
  columns: [
    {
      type: "op",
      buttons({ scope }) {
        return [
          {
            label: "新增",
            onClick({ scope }) {
              // scope行数据
            },
          },
        ];
      },
    },
  ],
});
```

## 数据过滤

- 添加 `dict` 参数可以匹配多个类型的展示，每一项数据基于组件 [el-tag](https://element-plus.gitee.io/zh-CN/component/tag.html#tag-属性) 的参数：

```ts
const Table = useTable({
  columns: [
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
  ],
});
```

如果只想以文本方式显示，则：

```ts
const Table = useTable({
  columns: [
    {
      label: "状态",
      prop: "status",
      dict: {
        text: true, // 开关
        separator: ",", // 拼接符号
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
```

:::warning
当数据 `status` 为 [1, 0] 数组的情况下，会自动匹配并显示多个文本值。
:::

- 使用 `formatter` 可以对某个列数据额外处理。该处理方式为最优先，在 `dict`、`插槽` 及其他之前

```ts
const Table = useTable({
  columns: [
    {
      label: "工资",
      prop: "price",
      formatter(row) {
        return row.price + "元";
      },
    },
  ],
});
```

## 参数

该组件继承 `el-table`，并享有它

- [属性](https://element-plus.gitee.io/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)
- [事件](https://element-plus.gitee.io/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6)
- [方法](https://element-plus.gitee.io/zh-CN/component/table.html#table-%E6%96%B9%E6%B3%95)

| 参数              | 说明             | 类型                         | 可选值 | 默认值 |
| ----------------- | ---------------- | ---------------------------- | ------ | ------ |
| columns           | 表格项           | Columns                      |        |        |
| autoHeight        | 是否自动计算高度 | boolean                      |        | true   |
| contextMenu       | 右键菜单         | [ContextMenu](#contextmenu)  |        | true   |
| onRowContextmenu  | 右键菜单事件     | function(row, column, event) |        |        |
| defaultSort       | 默认排序         | object                       |        |        |
| defaultSort.prop  | 排序值           | string                       |        |        |
| defaultSort.order | 排序方式         | 'descending' / 'ascending'   |        |        |
| sortRefresh       | 排序是否刷新列表 | boolean                      |        | true   |
| emptyText         | 空数据显示文本   | boolean                      |        |        |

### Columns

表格项的配置参数

| 参数                    | 说明                                | 类型                                    | 可选值                                                                | 默认值   |
| ----------------------- | ----------------------------------- | --------------------------------------- | --------------------------------------------------------------------- | -------- |
| type                    | 列的类型                            | string                                  | op / index / selection / expand                                       |          |
| index                   | 可以通过传递 index 属性来自定义索引 | number, function(index)                 |                                                                       |          |
| label                   | 显示的标题                          | string                                  |                                                                       |          |
| hidden                  | 是否隐藏                            | boolean                                 |                                                                       | false    |
| prop                    | 列内容的字段名                      | string                                  |                                                                       |          |
| dict                    | 字典                                | DictOptions                             |                                                                       |          |
| dict.label              | 显示名称                            | string                                  |                                                                       |          |
| dict.value              | 匹配值                              | string , number                         |                                                                       |          |
| dict.type               | 类型                                | string                                  | success / warning / danger / info                                     |          |
| dict.color              | 颜色                                | string                                  |                                                                       |          |
| dictFormatter           | 字典数据格式化                      | (values: DictOptions) => string         |                                                                       |          |
| dictColor               | 是否自动使用颜色                    | boolean                                 |                                                                       | false    |
| component               | 渲染组件                            | string, object                          |                                                                       |          |
| width                   | 列的宽度                            | string                                  |                                                                       |          |
| min-width               | 列的最小宽度                        | string                                  |                                                                       |          |
| sortable                | 列排序类型                          | boolean, string                         | true / false / 'custom' / 'desc' / 'asc' / 'descending' / 'ascending' | false    |
| formatter               | 用来格式化内容                      | function(row, column, cellValue, index) |                                                                       |          |
| buttons                 | type="op" 有效                      | array / function                        | info, edit, delete                                                    |          |
| show-overflow-tooltip   | 当内容过长被隐藏时显示 tooltip      | boolean                                 |                                                                       |          |
| align                   | 对齐方式                            | string                                  |                                                                       | 'center' |
| header-align            | 表头对齐方式                        | string                                  |                                                                       | 'center' |
| children                | 子列                                | Column[]                                |                                                                       | 'center' |
| [component](./form#component) | 渲染组件，同表单配置一致            |                                         |                                                                       |          |

更多参数请查阅 [el-table-column](https://element-plus.gitee.io/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)

### ContextMenu

- true 开启

- false 关闭

- refresh 刷新列表

- update 编辑当前行

- delete 删除当前行

- check 勾选当前行

- order-desc 根据当前行的 `prop` 降序

- order-asc 根据当前行的 `prop` 升序

- [自定义](./context-menu)

```js
const Table = useTable({
  contextMenu: [
    "refresh",
    "check",
    "update",
    "delete",
    "order-desc",
    "order-asc",
    { label: "测试", callback() {} },
  ],
});
```
