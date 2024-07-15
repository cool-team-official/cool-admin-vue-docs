# cl-context-menu

## 示例

### 基础用法

<code-demo>

```html
<template>
	<p @contextmenu.stop.prevent="open">
		<el-button>右键点击</el-button>
	</p>
</template>

<script lang="ts" setup>
	import { ContextMenu } from "@cool-vue/crud";
	import { ElMessage } from "element-plus";

	function open(e) {
		ContextMenu.open(e, {
			list: [
				{
					label: "按钮1",
					callback(done) {
						ElMessage.success("点击按钮2");
						done();
					}
				},
				{
					label: "按钮2",
					callback(done) {
						ElMessage.success("点击按钮2");
						done();
					}
				}
			]
		});
	}
</script>
```

<template #preview>

<p @contextmenu.stop.prevent="open">
    <el-button>右键点击</el-button>
</p>

</template>

</code-demo>

<script lang="ts" setup>
	import { ContextMenu } from "@cool-vue/crud";
	import { ElMessage } from "element-plus";

	function open(e) {
		ContextMenu.open(e, {
			list: [
				{
					label: "按钮1",
					callback(done) {
						ElMessage.success("点击按钮2");
						done();
					}
				},
				{
					label: "按钮2",
					callback(done) {
						ElMessage.success("点击按钮2");
						done();
					}
				}
			]
		});
	}
</script>

## 参数

| 参数  | 说明 | 类型                      | 回调参数  |
| ----- | ---- | ------------------------- | --------- |
| open  | 打开 | function(event, { list }) | { close } |
| close | 关闭 | function()                |           |

### List 选项值

| 参数     | 说明         | 类型                 | 可选值 | 默认值 |
| -------- | ------------ | -------------------- | ------ | ------ |
| label    | 本文         | string               |        |        |
| ellipsis | 是否超出省略 | boolean              |        |        |
| disabled | 是否禁用     | boolean              |        |        |
| hidden   | 是否隐藏     | boolean              |        |        |
| children | 子集         | array                |        |        |
| callback | 点击回调     | function(item, done) |        |        |
