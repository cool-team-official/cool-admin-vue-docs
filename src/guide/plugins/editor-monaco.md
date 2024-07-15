# editor-monaco

[monaco](https://microsoft.github.io/monaco-editor/index.html) 代码编辑器。

| 参数           | 说明       | 类型            | 可选值 | 默认值 |
| -------------- | ---------- | --------------- | ------ | ------ |
| modelValue     | 绑定值     | string          |        |        |
| options        | 配置选项   | object          |        |        |
| language       | 语言类型   | string          |        | json   |
| height         | 高度       | string / number |        | 500    |
| disabled       | 是否禁用   | boolean         |        | false  |
| autofocus      | 自动聚焦   | boolean         |        | false  |
| autoFormatCode | 自动格式化 | boolean         |        | true   |
| border         | 是否带边框 | boolean         |        | true   |

## 示例

<template>
	<cl-editor-monaco v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref([
	{
		label: "A",
		children: [
			{
				label: "B",
				children: [
					{
						label: "C",
						children: [
							{
								label: "D"
							}
						]
					}
				]
			}
		]
	}
]);
</script>
