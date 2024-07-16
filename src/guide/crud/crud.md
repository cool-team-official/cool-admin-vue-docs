# cl-crud

表格的增删改查操作。

## 示例

<crud-demo />

<script lang="ts" setup>
  import CrudDemo from "../../../components/crud-demo.vue"
</script>

## useCrud

- const 定义必须与 ref 一致

```html
<cl-crud ref="Crud"></cl-crud>
```

```js
const Crud = useCrud(options, callback?)
```

## Options

| 参数                             | 说明                       | 类型                                 |
| -------------------------------- | -------------------------- | ------------------------------------ |
| [service](/src/guide/cool/service)            | 表示当前 crud 要操作的对象 | Service                              |
| [dict](#dict-字典)               | 字典                       | Dict                                 |
| [permission](#permission-权限)   | 权限                       | Permission                           |
| [onDelete](#ondelete-删除事件)   | 监听删除事件               | function(selection, {next})          |
| [onRefresh](#onrefresh-刷新事件) | 监听刷新事件               | function(params, {next,done,render}) |

## dict 字典

参数预览：

```js
{
    // 接口
    api: {
        list: "list",
        add: "add",
        update: "update",
        delete: "delete",
        info: "info",
        page: "page"
    },
    // 分页
    pagination: {
        page: "page",
        size: "size"
    },
    // 搜索
    search: {
        keyWord: "keyWord",
        query: "query"
    },
    // 排序字段
    sort: {
        order: "order",
        prop: "prop"
    },
    // 标签
    label: {
	op: "操作",
	add: "新增",
	delete: "删除",
	multiDelete: "删除",
	update: "编辑",
	refresh: "刷新",
	info: "详情",
	search: "搜索",
	reset: "重置",
	clear: "清空",
	save: "保存",
	close: "取消",
	confirm: "确定",
	advSearch: "高级搜索",
	searchKey: "搜索关键字",
	placeholder: "请输入",
	tips: "提示",
	saveSuccess: "保存成功",
	deleteSuccess: "删除成功",
	deleteConfirm: "此操作将永久删除选中数据，是否继续？",
	empty: "暂无数据",
	desc: "降序",
	asc: "升序",
	select: "选择",
	deselect: "取消选择",
	seeMore: "查看更多",
	hideContent: "隐藏内容",
	nonEmpty: "不能为空"
    }
}
```

将请求 `page` 的接口替换成 `page2`，使用方法如下：

```js
const Crud = useCrud({
  dict: {
    api: {
      page: "page2",
    },
  },
});
```

将 `新增按钮` 文本值替换成 `"添加"`，使用方法如下：

```js
const Crud = useCrud({
  dict: {
    label: {
      add: "添加",
    },
  },
});
```

## permission 权限

控制新增、删除、编辑按钮显示隐藏。默认使用 `service` 中的 `permission`，当然也能手动配置：

```js
const Crud = useCrud({
  permission: {
    add: true,
    delete: true,
    update: true,
  },
});
```

## onDelete 删除事件

`onDelete` 删除时触发，默认调用 `service` 中的 `delete` 方法 ：

- selection 表格选中行的集合
- next(params) 继续执行删除

```js
const Crud = useCrud({
  service: service.demo.goods,
  onDelete(selection, { next }) {
    ElMessageBox.confirm(
      `你已选择了${selection.length}人，是否继续？`,
      "提示",
      {
        type: "error",
      }
    )
      .then(() => {
        // 继续执行删除请求
        next({
          ids: selection.map((e) => e.id),
        });
      })
      .catch(() => null);
  },
});
```

<crud-delete />

如需修改成根据其他字段删除数据（需后台接口配合），如下：

```js
const Crud = useCrud({
  service: service.demo.goods,
  onDelete(selection, { next }) {
    next({
      names: selection.map((e) => e.name),
    });
  },
});
```

## onRefresh 刷新事件

`onRefresh` 刷新时触发，默认调用 `service` 中的 `page` 方法：

- params 请求参数
- next(params) 继续执行刷新
- done() 完成刷新操作
- render(list, pagination) 渲染列表及分页信息

```js
const Crud = useCrud({
  service: service.demo.goods,
  async onRefresh(params, { next, done, render }) {
    // 1 默认调用
    const { list } = await next(params);

    // 2 使用其他接口，需手动 render
    const { list, pagination } = await service.demo.goods.hotList();
    // 渲染数据
    render(list, pagination);
  },
});
```

## Callback

组件渲染完执行，并返回当前组件实例

```html
<template>
  <cl-crud ref="Crud"></cl-crud>
</template>

<script lang="ts" setup>
  import { useCrud } from "@cool-vue/crud";
  const Crud = useCrud({ service: "test" });
</script>
```

配置 `callback` 加载完后调用 `app.refresh` 刷新页面：

```html
<template>
  <cl-crud ref="Crud"></cl-crud>
</template>

<script lang="ts" setup>
  import { useCrud } from "@cool-vue/crud";
  const Crud = useCrud({ service: "test" }, (app) => {
    // 刷新请求
    app.refresh({
      // 可以带上你要请求的值
    });
  });
</script>
```

## 子组件使用

a.vue：

```html
<template>
  <cl-crud>
    <child-component />
  </cl-crud>
</template>
```

child-component.vue 中也能使用 `Crud` 的方法：

```html
<template>
  <el-button @click="add">添加成员</el-button>
</template>

<script lang="ts" setup>
  import { useCrud } from "@cool-vue/crud";

  const Crud = useCrud();

  function add() {
    Crud.value?.rowAdd();
  }
</script>
```

## Ref

| 名称          | 说明                               | 类型                              |
| ------------- | ---------------------------------- | --------------------------------- |
| getPermission | 获取 add, update, delele 的权限    | () => object                      |
| getParams     | 获取请求参数                       | () => object                      |
| rowAdd        | 以新增方式打开表单                 | () => void                        |
| rowAppend     | 以新增方式打开表单，并追加一些数据 | (data?) => void                   |
| rowInfo       | 以禁用表单的方式打开               | (data) => void                    |
| rowEdit       | 以编辑方法打开表单                 | (data) => void                    |
| rowClose      | 关闭表单                           | () => void                        |
| rowDelete     | 删除请求                           | (selection) => void               |
| refresh       | 刷新请求                           | (params?) => \{list, pagination\} |

::: warning
cl-crud 组件调用方法如下，refresh 为例：

```js
// 注册组件
const Crud = useCrud(...)

// 刷新方法
function refresh(params?:any) {
	// 调用
	Crud.value?.refresh(params)
}

// 必须在组件渲染后执行
refresh()
```

:::
