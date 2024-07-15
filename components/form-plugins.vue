<template>
	<el-button type="primary" @click="open">点我！！</el-button>

	<cl-form ref="Form" />
</template>

<script lang="ts" setup>
import { setFocus, useForm } from "@cool-vue/crud";

const Form = useForm();

function open() {
	Form.value?.open(
		{
			title: "setFocus 插件",
			props: {
				labelPosition: "top"
			},
			items: [
				{
					label: "获取 ref，打开后聚焦",
					prop: "name",
					component: {
						name: "el-input",
						props: {
							placeholder: "请填写昵称"
						}
					}
				}
			]
		},
		[setFocus()]
	);
}
</script>
