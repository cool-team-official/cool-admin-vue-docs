<template>
	<cl-crud ref="Crud" border style="margin-top: 10px">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />

			<!-- 批量删除按钮 -->
			<cl-multi-delete-btn />
		</cl-row>

		<cl-row>
			<!-- 表格 -->
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />

			<!-- 分页 -->
			<cl-pagination />
		</cl-row>
	</cl-crud>
</template>

<script lang="tsx" name="crud" setup>
import { useCrud, useTable } from "@cool-vue/crud";
import { ElMessageBox } from "element-plus";

// crud
const Crud = useCrud(
	{
		service: "test",
		onDelete(selection, { next }) {
			ElMessageBox.confirm(`你已选择了${selection.length}人，是否继续？`, "提示", {
				type: "error"
			})
				.then(() => {
					next({
						ids: selection.map((e) => e.id)
					});
				})
				.catch(() => null);
		}
	},
	(app) => {
		app.refresh();
	}
);

// 表格
const Table = useTable({
	autoHeight: false,
	columns: [
		{
			type: "selection",
			width: 60
		},
		{
			label: "姓名",
			prop: "name"
		},
		{
			type: "op",
			buttons: ["delete"]
		}
	]
});
</script>
