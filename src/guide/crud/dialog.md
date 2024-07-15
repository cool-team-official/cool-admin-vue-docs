# cl-dialog

自定义对话框组件，该组件继承 [el-dialog](https://element-plus.gitee.io/zh-CN/component/dialog.html) 并享有它的参数和方法

## 示例

### 基础用法

`v-model` 控制对话框的显示隐藏

<code-demo>

```html
<cl-dialog title="对话" v-model="visible">
	<p>少年，我看你骨骼精奇，是万中无一的武学奇才，维护世界和平就靠你了</p>
</cl-dialog>
```

<template #preview>
<el-button @click="visible = true">打开</el-button>
<cl-dialog title="对话" v-model="visible">

<p>少年，我看你骨骼精奇，是万中无一的武学奇才，维护世界和平就靠你了</p>
</cl-dialog>
</template>

</code-demo>

### 关闭前操作

添加 `before-close` 方法：

-   done() 关闭

<code-demo >

```html
<cl-dialog title="对话" v-model="visible" :before-close="beforeClose">
	<p>少年，我看你骨骼精奇，是万中无一的武学奇才，维护世界和平就靠你了</p>
</cl-dialog>

<script lang="ts" setup>
	import { ref } from "vue";
	import { ElMessageBox } from "element-plus";
	const visible = ref(false);

	function beforeClose(done) {
		ElMessageBox.confirm("是否关闭？", "提示", {
			type: "warning"
		})
			.then(() => {
				done();
			})
			.catch(() => null);
	}
</script>
```

<template #preview>
<el-button @click="visible2 = true">打开</el-button>
<cl-dialog title="对话" v-model="visible2" :before-close="beforeClose">

<p>少年，我看你骨骼精奇，是万中无一的武学奇才，维护世界和平就靠你了</p>
</cl-dialog>
</template>

</code-demo>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessageBox } from 'element-plus'
const visible = ref(false)
const visible2 = ref(false)

function beforeClose(done) {
	ElMessageBox.confirm( '是否关闭？','提示', {
		type: 'warning'
	})
	.then(() => {
		done()
	})
	.catch(() => null)
}
</script>

## 参数

| 参数               | 说明         | 类型           | 可选值 | 默认值                  |
| ------------------ | ------------ | -------------- | ------ | ----------------------- |
| v-model/modelValue | 是否显示     | boolean        |        | false                   |
| title              | 标题         | string         |        | 对话框                  |
| height             | 高度         | string         |        | auto                    |
| width              | 宽度         | string         |        | 50%                     |
| fullscreen         | 是否全屏显示 | boolean        |        | false                   |
| controls           | 头部操作按钮 | array          |        | ["fullscreen", "close"] |
| hideHeader         | 隐藏头部元素 | boolean        |        | false                   |
| keepAlive          | 是否缓存     | boolean        |        | false                   |
| draggable          | 能否拖拽     | boolean        |        | false                   |
| before-close       | 关闭前钩子   | function(done) |        |                         |
| custom-class       | 自定义样式名 | string         |        |                         |

## 事件

| 参数   | 说明                 |
| ------ | -------------------- |
| open   | 打开的回调           |
| opened | 打开动画结束时的回调 |
| close  | 关闭的回调           |
| closed | 关闭动画结束时的回调 |

## 插槽

| 参数    | 说明     |
| ------- | -------- |
| default | 内容区域 |
| footer  | 底部区域 |
