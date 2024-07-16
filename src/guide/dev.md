# 模块/插件开发

## 目录结构

在 `src/modules` 或 `src/plugins` 下添加一个目录 `demo`：

```js
demo
    ├──pages // 页面路由
    ├──views // 视图路由
    ├──hooks // 常用函数
    ├──components // 常用组件
    ├──service // 请求服务
    ├──directives // 指令
    ├──static // 静态文件目录
    ├──store // 状态管理
    ├──... // 其他自定义文件
    ├──config.ts // 配置文件
    └──index.ts // 入口文件
```

::: warning
约定的目录名称不可修改，但可自行添加或者删除。
:::

## pages、views

1. 页面参与权限控制，所以不主动注册目录下的路由，通过 `菜单列表` 中配置注册。或者在 `config.ts` 中手动配置：

```js
import { ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
  return {
    views: [
      {
        path: "/demo",
        meta: {
          label: "测试",
        },
        component: () => import("./views/demo.vue"),
      },
    ],
    pages: [
      {
        path: "/demo2",
        meta: {
          label: "测试",
        },
        component: () => import("./pages/demo.vue"),
      },
    ],
  };
};
```

2. 使页面参与路由缓存，配置 `name` 参数

:::warning

`path` 与 `name` 的匹配规则：

- /demo/t1 = demo-t1
- /demo/t1-det = demo-t1-det

:::

方式 1：

```html
<script lang="ts" name="demo" setup></script>
```

方式 2：

```html
<script lang="ts">
  export default defineComponent({
    name: "demo",
  });
</script>
```

`setup` 中：

```html
<script lang="ts" name="my-info" setup></script>
```

## components

目录下的组件，全局注册配置方法如下：

```js
import { ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
  return {
    components: [
      import("./components/demo.vue"),
      import("./components/demo1.vue"),
    ],
  };
};
```

## service

目录下的文件，都会以 `Service` 装饰器的路径参数解析成对象合并在 `service` 中。

[在服务中有详细说明，点我跳转](/src/guide/cool/service)

```ts
import { Service, BaseService } from "/@/cool";

@Service("demo/test")
class Test extends BaseService {
  t1() {
    return this.request({
      url: "t1",
    });
  }
}
```

使用：

```ts
import { useCool } from "/@/cool";

const { service } = useCool();
service.demo.test.t1();
```

## directives

`directives` 会以目录下的文件名分别注册指令

```ts
// demo/directives/test.ts
export default {
	created(el, binding) {},
	mounted() {},
	...
};
```

使用

```html
<div v-test></div>
```

## store

使用 [Pinia](https://pinia.vuejs.org) 的推荐写法：

```ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTestStore = defineStore("test", function () {
  const count = ref<number>(0);

  function add() {
    count.value += 1;
  }

  return {
    count,
    add,
  };
});
```

使用

```ts
import { useTestStore } from "/$/demo/store";

const test = useTestStore();

test.add();

console.log(test.count); // 1
```

::: tip
参考 `base` 模块下 `store` 的导出方式
:::

## config.ts

模块的配置，程序运行时会读取该文件。

- 全局组件、路由的导入

- 事件钩子

输入 `module-config` 关键字，`vscode` 中会自动生成：

```ts
import { ModuleConfig } from "/@/cool";
import { Vue } from "vue";

export default (): ModuleConfig => {
  return {
    label: "插件名称",
    description: "插件描述",
    author: "作者",
    version: "1.0.0",
    updateTime: "2024-02-02",
    logo: "",

    // 排序
    order: 0,

    // 配置参数
    options: {
      name: "神仙",
    },

    // 示例页面
    demo: [
      {
        name: "基础用法",
        component: () => import("..."),
      },
    ],
    // 全局组件
    components: [],
    // 视图路由
    views: [],
    // 页面路由
    pages: [],

    // 事件
    install(app: Vue) {},
    onLoad(events) {},
  };
};
```

- order 模块加载顺序，值越大越先

- options 提供给外部使用的参数配置：

```ts
import { ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
  return {
    options: {
      // 尺寸
      size: 120,
      // 显示文案
      text: "选择文件",
      // 限制
      limit: {
        // 上传最大数量
        upload: 9,
        // 文件空间选择数
        select: 9,
        // 上传大小限制
        size: 100,
      },
    },
  };
};
```

获取方式：

```ts
import { module } from "/@/cool";

const config = module.config("模块名");
```

- components 提供全局的组件：

```ts
import type { ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
  return {
    components: [import("./components/test.vue")],
  };
};
```

批量导入可以使用 [import.meta.glob](https://vitejs.dev/guide/features.html#glob-import) 方法：

```ts
import { ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
  return {
    components: Object.values(import.meta.glob("./components/**/*")),
  };
};
```

- views 全局注册的视图路由，存放在 `/` 中的子路由 `children`：

```ts
import { ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
  return {
    views: [
      {
        path: "/test",
        meta: {
          label: "测试中心",
        },
        component: () => import("./views/test.vue"),
      },
    ],
  };
};
```

- pages 全局注册的页面路由：

```ts
import { ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
  return {
    pages: [
      {
        path: "/test",
        meta: {
          label: "测试中心",
        },
        component: () => import("./views/test.vue"),
      },
    ],
  };
};
```

- install 模块安装时触发。用于预先处理：

```ts
import { ModuleConfig } from "/@/cool";
import { Vue } from "vue";

export default (): ModuleConfig => {
  return {
    install(app: Vue) {
      // 注册组件
      app.component("test", Test);

      // 注册指令
      app.directive("focus", {
        created(el, bind) {},
      });
    },
  };
};
```

- onLoad 模块安装时触发，预先加载数据，如菜单配置、用户信息：

  1.  使用 `await` 等待加载完成后往下执行

  2.  可往下模块导出某个方法和变量，如 `hasToken` 验证是否有登陆

```ts
import { ModuleConfig } from "/@/cool";
import { Vue } from "vue";

export default (): ModuleConfig => {
  return {
    async onLoad() {
      const { user, menu } = useStore();

      if (user.token) {
        // 获取用户信息
        user.get();
        // 获取菜单权限
        await menu.get();
      }

      return {
        async hasToken(cb: () => Promise<any> | void) {
          if (user.token) {
            if (cb) await cb();
          }
        },
      };
    },
  };
};
```

其他模块中接收 `hasToken` 方法：

```ts
import { ModuleConfig } from "/@/cool";
import { useDict } from "./index";

export default (): ModuleConfig => {
  return {
    onLoad({ hasToken }) {
      const { dict } = useDict();

      hasToken(() => {
        dict.refresh();
      });
    },
  };
};
```

## index.ts

该模块需要对外开放的变量及方法，方便于别人直接使用：

```ts
// modules/test/index.ts
import { useStore } from "./store";

export function useTest() {
  return {
    // 导出 pinia
    ...useStore(),

    // 自定义方法
    test() {},

    // 自定义变量
    data: {
      description: "数据描述",
    },
  };
}
```

导出命名规则 `useBase` `useDemo` `useDict` use + 模块名

使用：

```ts
import { useTest } from "/$/test";

const { data, test } = useTest();
```
