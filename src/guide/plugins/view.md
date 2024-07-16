# view

## cl-view-group

左右两侧布局，以兼容手机端

PC 端：

<img src="/images/view-group.png" />

手机端：

<div style="display: flex; flex-wrap: wrap; justify-content: space-between">
<img src="/images/view-group-phone2.png" width=300px />

<img src="/images/view-group-phone.png" width=300px  />
</div>

使用：

```html
<cl-view-group ref="ViewGroup">
  <template #right>
    <cl-crud></cl-crud>
  </template>
</cl-view-group>

<script setup lang="ts">
  import { useViewGroup } from "/$/base";

  const { ViewGroup } = useViewGroup();
</script>
```

::: warning
参考

- /src/modules/dict/views/list.vue
- /src/modules/iot/views/device.vue
  :::

### Options

| 参数                            | 说明           | 类型                               | 可选值 | 默认值 |
| ------------------------------- | -------------- | ---------------------------------- | ------ | ------ |
| label                           | 左侧标题       | string                             |        | 组     |
| leftWidth                       | 左侧宽度       | string                             |        | 300px  |
| title                           | 右侧标题       | string                             |        | 列表   |
| data                            | 请求附带的数据 | object                             |        | {}     |
| enableContextMenu               | 开启右键菜单   | boolean                            |        | true   |
| enableRefresh                   | 开启刷新按钮   | boolean                            |        | true   |
| enableAdd                       | 开启新增按钮   | boolean                            |        | true   |
| service                         | 服务           | [Service](/src/guide/cool/service) |        |        |
| [onSelect](#onselect)           | 选择事件       | (item: ClViewGroup.Item)           |        |        |
| [onEdit](#onedit)               | 编辑事件       | (item?: ClViewGroup.Item)          |        |        |
| [onContextMenu](#oncontextmenu) | 右键事件       | (item: ClViewGroup.Item)           |        |        |
| [onData](#ondata)               | 数据事件       | (list: any[]) => any[]             |        |        |

### 插槽

| 插槽名    | 说明           | 作用域                      |
| --------- | -------------- | --------------------------- |
| left      | 左侧菜单       |                             |
| item      | 左侧列表项     | \{ item, selected, index \} |
| item-name | 左侧列表项名称 | \{ item, selected, index \} |
| right     | 右侧内容       |                             |
| title     | 右侧标题       | \{ selected \}              |

```html
<cl-view-group ref="ViewGroup">
  <template #item="{ item, selected, index }"> {{ item.name }} </template>
</cl-view-group>
```

### Ref

| 参数     | 说明                          | 类型                       | 可选值 | 默认值 |
| -------- | ----------------------------- | -------------------------- | ------ | ------ |
| selected | 选中值                        |                            |        |        |
| isExpand | 是否展开状态                  | boolean                    |        | true   |
| expand   | 展开、收起                    | function(status?: boolean) |        |        |
| select   | 选择某一项                    | function(item: any)        |        |        |
| edit     | 编辑某一项, item 为空则是新增 | function(item?: any)       |        |        |
| remove   | 删除某一项                    | function(item: any)        |        |        |

#### onSelect

选择后触发，可以用来刷新右侧的列表等操作

```js
const { ViewGroup } = useViewGroup({
  onSelect(item) {
    refresh({
      typeId: item.id,
      page: 1,
    });
  },
});
```

#### onEdit

表单编辑时触发，返回值与 [OpenOptions](/src/guide/crud/form#openoptions) 一致

```js
const { ViewGroup } = useViewGroup({
  onEdit(item) {
    return {
      title: "标题",
      width: "500px",
      props: {
        labelWidth: "60px",
      },
      items: [
        {
          label: "名称",
          prop: "name",
          component: {
            name: "el-input",
            props: {
              maxlength: 20,
            },
          },
          required: true,
        },
      ],
    };
  },
});
```

#### onContextMenu

默认带有 `编辑` 和 `删除`。如需自定义右键菜单，返回值与 [cl-context-menu](/src/guide/crud/context-menu) 一致。

```js
const { ViewGroup } = useViewGroup({
  onContextMenu(item) {
    return {
      list: [
        {
          label: "编辑",
          callback(done) {
            done();
            ViewGroup.value?.edit(item);
          },
        },
        {
          label: "删除",
          callback(done) {
            done();
            ViewGroup.value?.remove(item);
          },
        },
      ],
    };
  },
});
```

#### onData

处理左侧列表数据，由 `service` 中的 `page` 接口返回

```js
const { ViewGroup } = useViewGroup({
  onData(list) {
    return list.map((e) => {
      return {
        ...e,
        name: "-" + e.name + "-",
      };
    });
  },
});
```
