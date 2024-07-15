# excel

数据的导入、导出。

## cl-export-btn

| 参数           | 说明                                      | 类型              | 可选值 | 默认值 |
| -------------- | ----------------------------------------- | ----------------- | ------ | ------ |
| filename       | 导出文件名                                | string / function |        | 报表   |
| columns        | 列数据                                    | array             |        |        |
| disabled       | 是否禁用                                  | boolean           |        | false  |
| data           | 自定义数据                                | function / array  |        |        |
| maxExportLimit | 最大导出条数，不传或者小于等于 0 为不限制 | number            |        |        |

`columns` 为必填，可以直接使用 `cl-table` 中 `columns` 的配置。

```html
<cl-crud>
  <cl-export-btn :columns="Table?.columns" />
</cl-crud>
```

### 自定义请求，配置 `data` 参数

```html
<cl-crud>
  <cl-export-btn :columns="Table?.columns" :data="onExportData">
    导出成员清单
  </cl-export-btn>
</cl-crud>

<script lang="ts" setup>
  function onExportData(params: any) {
    // 任意请求，返回一个数组。下面是一个测试示例
    return service.test.page().then((res) => res.list);
  }
</script>
```

## cl-import-btn

| 参数      | 说明                       | 类型                                          | 可选值 | 默认值             |
| --------- | -------------------------- | --------------------------------------------- | ------ | ------------------ |
| onConfig  | 配置项，返回 ClForm.Item[] | function                                      |        |                    |
| onSubmit  | 提交事件，                 | ({...data, list}, {done, close, setProgress}) |        |                    |
| template  | 导入模板 URL               | string                                        |        |                    |
| tips      | 提示                       | string                                        |        | 请按照模版填写信息 |
| limitSize | 导入的文件大小             | number                                        |        | 10                 |
| disabled  | 是否禁用                   | boolean                                       |        | false              |
| accetp    | 接收的上传文件类型         | boolean                                       |        | excel,csv          |

```html
<cl-crud>
  <cl-import-btn
    tips="请按照模版填写信息，姓名不能重复"
    :on-submit="onSubmit"
    :on-config="onConfig"
  />
</cl-crud>

<script lang="ts" setup>
  // 添加额外的表单项
  function onConfig(Form: ClForm.Ref) {
    return [
      {
        label: "选择公司",
        prop: "companyId",
        component: {
          name: "el-select",
          options: [
            {
              label: "COOL",
              value: 1,
            },
            {
              label: "神仙",
              value: 2,
            },
          ],
        },
      },
    ];
  }

  // 提交事件，根据自己的情况设置格式和接口
  function onSubmit(data: any, { next, done, setProgress }) {
    service.test
      .add(data)
      .then(() => {
        ElMessage.success("导入成功");
        close();
      })
      .catch((err) => {
        ElMessage.error(err.message);
        done();
      });
  }
</script>
```
