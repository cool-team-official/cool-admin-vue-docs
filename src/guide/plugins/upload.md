# upload

文件、图片上传，文件空间。

## 参数

| 参数         | 说明                 | 类型                  | 可选值       | 默认值   |
| ------------ | -------------------- | --------------------- | ------------ | -------- |
| modelValue   | 图片地址             | string, array         |              |          |
| accept       | 文件类型             | string                |              |          |
| type         | 类型                 | string                | image / file | image    |
| multiple     | 是否多图上传         | boolean               |              | false    |
| limit        | 最大上传数量         | number                |              | 9        |
| limitSize    | 最大上传大小         | number                |              | 100      |
| size         | 组件大小             | number, string, array |              | 120      |
| text         | 文案                 | string                |              | 选择文件 |
| showFileList | 是否显示上传图片列表 | boolean               |              | true     |
| draggable    | 是否可拖拽           | boolean               |              | false    |
| disabled     | 是否禁用             | boolean               |              | false    |
| customClass  | 自定义样式名         | string                |              |          |
| beforeUpload | 上传前               | function(file, item)  |              |          |

## 插槽

| 插槽    | 说明             |
| ------- | ---------------- |
| default | 选择上传区域     |
| item    | 上传列表的每一项 |

## 基础用法

```html
<cl-upload v-model="urls" />
```

## 多图上传

配置 `multiple`

```html
<cl-upload v-model="urls" multiple />
```

## 文件上传

配置 `type` 为 `file`

```html
<cl-upload v-model="urls" multiple text="文件上传" type="file" />
```

## 可拖拽

配置 `draggable` 和 `multiple`

```html
<cl-upload v-model="urls" draggable multiple />
```

## 自定义内容

```html
<cl-upload type="file" multiple custom-class="custom-upload">
  <el-button :icon="Upload">上传</el-button>

  <template #item="{ item }">
    <div class="item" v-show="item.url">{{ item.url }}</div>
  </template>
</cl-upload>
```

## 自定义大小

配置 `size`

```html
<cl-upload text="选择图片" :size="[120, 200]" />
```

## 上传校验

配置 `onBeforeUpload`，返回 `boolean` 或者 `Promise`

```html
<cl-upload :before-upload="onBeforeUpload" />
```

```ts
function onBeforeUpload(file: any, item: any) {
  ElMessage.warning("文件检测中");

  return new Promise((resolve) => {
    setTimeout(() => {
      ElMessage.success("文件检测通过");

      resolve(true);
    }, 2000);
  });
}
```

## 文件空间

- 在文件空间中选择

```html
<cl-upload is-space />
```

- 打开文件空间

```html
<cl-upload-space />
```
