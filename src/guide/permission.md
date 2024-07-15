# permission

基于 `service` 中的判断：

<img src="/images/service-permission.png" />

- `permission` 与后端接口匹配的值

- `_permission` 可直接用于判断是否有该权限

## v-permission

| 参数 | 类型 | 说明                                     |
| ---- | ---- | ---------------------------------------- |
| or   | 数组 | 用于检测数组中的元素是否满足指定条件     |
| and  | 数组 | 用于检测数组中的元素是否全部满足指定条件 |

```html
<el-button v-permission="service.user.permission.add"> 新增 </el-button>
```

```html
<el-button
  v-permission="{
        or: [service.user.permission.add, service.user.permission.info]
    }"
>
  新增
</el-button>
```

```html
<el-button
  v-permission="{
        and: [service.user.permission.add, service.user.permission.info, user.id == 1]
    }"
>
  新增
</el-button>
```

## checkPerm

也可以用于 js 中判断：

```js
import { checkPerm } from "/$/base";

// 验证是否有添加权限，返回一个布尔值
checkPerm(service.system.user.permission.add): boolean

checkPerm({
    and: [service.system.user.permission.add, service.system.user.permission.info]
})


```

## 请求出现 403

给对应的接口配置权限，系统管理 -> 权限管理 -> 菜单列表。如图：

<img src="/images/permission.png" />

:::warning
如果没有找到对应的权限：

- 当前账号的角色是否拥有该权限

- 尝试刷新、重新登录

:::
