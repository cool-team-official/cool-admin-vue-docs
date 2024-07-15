# dict

字典管理，每个类型具有多个属性值

<img src="/images/dict.png" />

## 属性

| 名称    | 说明                   | 类型                               |
| ------- | ---------------------- | ---------------------------------- |
| refresh | 获取数据列表           | function(types: string[] / string) |
| get     | 返回指定类型的数据列表 | function(name: string)             |
| data    | 数据对象               | object                             |

## 示例

#### 获取数据

```ts
import { useDict } from "/$/dict";

const { dict } = useDict();

// 获取全部数据
dict.refresh();

// 获取指定类型数据
dict.refresh(["brand", "type"]);
```

#### 使用数据

```ts
import { useDict } from "/$/dict";

const { dict } = useDict();

// 表单中
const Upsert = useUpsert({
  items: [
    {
      label: "品牌",
      prop: "brand",
      component: {
        name: "el-select",
        options: dict.get("brand"),
      },
    },
  ],
});

// 表格中
const Table = useTable({
  columns: [
    {
      label: "品牌",
      prop: "brand",
      dict: dict.get("brand"),
    },
  ],
});
```
