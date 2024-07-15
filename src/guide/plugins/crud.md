# Crud

基于 `@cool-vue/crud` 封装的组件，用于快速构建 CRUD 页面。

## 配置

配置于 `/src/plugins/crud/config.ts`

```ts
import type { Merge, ModuleConfig } from "/@/cool";

import Crud, { locale, setFocus } from "@cool-vue/crud";
import "@cool-vue/crud/dist/index.css";

export default (): Merge<ModuleConfig, CrudOptions> => {
  return {
    options: {
      // 字典配置
      dict: {
        primaryId: "id",
        // 请求方法
        api: {
          list: "list",
          add: "add",
          update: "update",
          delete: "delete",
          info: "info",
          page: "page",
        },
        // 分页
        pagination: {
          page: "page",
          size: "size",
        },
        // 关键字搜索
        search: {
          keyWord: "keyWord",
          query: "query",
        },
        // 排序
        sort: {
          order: "order",
          prop: "prop",
        },
        // 语言
        label: locale.zhCn,
      },
      // 样式
      style: {
        colors: [
          "#d42ca8",
          "#1c109d",
          "#6d17c3",
          "#6dc9f1",
          "#04c273",
          "#06b31c",
          "#f9f494",
          "#aa7a24",
          "#d57121",
          "#e93f4d",
        ],
        // 表单配置
        form: {
          labelPostion: "right",
          labelWidth: "100px",
          span: 24,
          // 插件列表
          plugins: [
            // 自动聚焦插件
            setFocus(),
          ],
        },
        // 表格配置
        table: {
          // 带边框
          border: true,
          // 是否高亮行
          highlightCurrentRow: true,
          // 自动计算高度
          autoHeight: true,
          // 右键菜单
          contextMenu: [
            "refresh",
            "check",
            "edit",
            "delete",
            "order-asc",
            "order-desc",
          ],
          // 列配置
          column: {
            // 对齐方式
            align: "center",
            // 操作栏宽度
            opWidth: 160,
          },
        },
      },
    },
  };
};
```

## cl-switch

开关，`cl-table` 中使用，值改变时会自动调用 `update` 接口

| 参数          | 说明   | 类型                      | 可选值 | 默认值 |
| ------------- | ------ | ------------------------- | ------ | ------ |
| modelValue    | 绑定值 | number / string / boolean |        |        |
| activeValue   | 选中值 | number / string / boolean |        | true   |
| inactiveValue | 未选值 | number / string / boolean |        | false  |

下面是在 `cl-table` 的使用示例：

```html
<template>
  <cl-crud>
    <cl-table ref="Table" />
  </cl-crud>
</template>

<script lang="ts" setup>
  const Table = useTable({
    columns: [
      {
        label: "状态",
        prop: "status",
        component: {
          name: "cl-switch",
        },
      },
    ],
  });
</script>
```

<img src="/images/switch.png" />

## cl-select

下拉选择，设置 `prop` 会自动刷新列表并带入请求参数 `{ page: 1, [prop]: value }`

| 参数        | 说明                       | 类型            | 可选值 | 默认值 |
| ----------- | -------------------------- | --------------- | ------ | ------ |
| modelValue  | 绑定值                     | string / number |        |        |
| options     | 列表                       | array           |        |        |
| prop        | 搜索的请求字段             | string          |        |        |
| labelKey    | 作为 label 唯一标识的键名  | string          |        | label  |
| valueKey    | 作为 value 唯一标识的键名  | string          |        | value  |
| tree        | 树形选择器                 | boolean         |        | false  |
| allLevelsId | 是否返回选中层级下的所有值 | boolean         |        | false  |

下面是做筛选的使用示例：

```html
<template>
  <cl-crud>
    <cl-row>
      <cl-select :options="options.status" prop="status" />
    </cl-row>

    <cl-row>
      <cl-table ref="Table" />
    </cl-row>
  </cl-crud>
</template>

<script lang="ts" setup>
  const options = reactive({
    status: [
      {
        label: "成功",
        value: 1,
        type: "success",
      },
      {
        label: "失败",
        value: 0,
        type: "danger",
      },
    ],
  });

  const Table = useTable({
    columns: [
      {
        label: "状态",
        prop: "status",
        dict: options.status,
      },
    ],
  });
</script>
```

### cl-column-custom

`cl-table` 自定义列。可自行扩展，如拖动排序

| 参数    | 说明                          | 类型   | 可选值 | 默认值 |
| ------- | ----------------------------- | ------ | ------ | ------ |
| name    | `localStorage` 存储标识，必填 | string |        |        |
| columns | 和 ClTable.Column 一样        | string |        |        |

<img src="/images/column-custom.png" />

### cl-date-text

日期文本显示

| 参数       | 说明     | 类型   | 可选值 | 默认值              |
| ---------- | -------- | ------ | ------ | ------------------- |
| modelValue | 绑定值   | string |        |                     |
| format     | 日期格式 | string |        | YYYY-MM-DD HH:mm:ss |

### cl-date-picker

日期时间选择器

| 参数             | 说明             | 类型    | 可选值                                                                         | 默认值              |
| ---------------- | ---------------- | ------- | ------------------------------------------------------------------------------ | ------------------- |
| modelValue       | 绑定值           | string  |                                                                                |                     |
| type             | 日期类型         | string  | year / month / week / date / datetime / datetimerange / daterange / monthrange | date                |
| valueFormat      | 日期格式         | string  |                                                                                | YYYY-MM-DD HH:mm:ss |
| prop             | 搜索请求的字段   | string  |                                                                                |                     |
| width            | 宽度             | string  |                                                                                |                     |
| quickBtn         | 是否显示快速按钮 | boolean |                                                                                |                     |
| defaultQuickType | 快速按钮类型     | string  | day / week / month / year                                                      | day                 |
