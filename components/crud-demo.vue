<template>
  <cl-crud ref="Crud" border style="margin-top: 10px">
    <cl-row>
      <!-- 刷新按钮 -->
      <cl-refresh-btn />

      <!-- 新增按钮 -->
      <cl-add-btn />

      <!-- 批量删除按钮 -->
      <cl-multi-delete-btn />

      <!-- 自定义表单 -->
      <form-btn />

      <cl-flex1 />

      <!-- 关键字搜索 -->
      <cl-search-key />

      <!-- 高级搜索按钮 -->
      <cl-adv-btn />
    </cl-row>

    <cl-row>
      <!-- 表格 -->
      <cl-table ref="Table" show-summary :summary-method="onSummaryMethod">
        <!-- 展开信息 -->
        <template #column-detail="{ scope }">
          <div style="padding: 0 10px">
            <el-descriptions :column="3">
              <el-descriptions-item label="ID：">
                {{ scope.row.id }}
              </el-descriptions-item>
              <el-descriptions-item label="姓名：">
                {{ scope.row.name }}
              </el-descriptions-item>

              <el-descriptions-item label="存款：">
                {{ scope.row.wages }}
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </template>
      </cl-table>
    </cl-row>

    <cl-row>
      <cl-flex1 />

      <!-- 分页 -->
      <cl-pagination />
    </cl-row>

    <!-- 新增、编辑 -->
    <cl-upsert ref="Upsert" />

    <!-- 高级搜索 -->
    <cl-adv-search ref="AdvSearch" />
  </cl-crud>
</template>

<script lang="tsx" name="crud" setup>
import {
  useCrud,
  useUpsert,
  useTable,
  useAdvSearch,
  setFocus,
} from "@cool-vue/crud";
import FormBtn from "./form-btn.vue";
import { reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

// 选项
const options = reactive({
  status: [
    {
      label: "启用",
      value: 1,
    },
    {
      label: "禁用",
      type: "danger",
      value: 0,
    },
  ],
});

// crud
const Crud = useCrud(
  {
    service: "test",
  },
  (app) => {
    app.refresh();
  }
);

// 新增、编辑
const Upsert = useUpsert({
  items: [
    // 分组
    {
      type: "tabs",
      props: {
        type: "card",
        labels: [
          {
            label: "基础",
            value: "base",
          },
          {
            label: "其他",
            value: "other",
          },
        ],
      },
    },
    {
      label: "头像",
      prop: "avatar",
      group: "base",
      component: {
        name: "cl-upload",
      },
    },
    // 动态值
    () => {
      return {
        label: "姓名",
        prop: "name",
        required: true,
        group: "base",
        component: {
          name: "el-input",
        },
      };
    },
    {
      label: "年龄",
      group: "base",
      prop: "age",
      component: {
        name: "el-input-number",
      },
    },
    {
      label: "身份证照片",
      prop: "idCardPic",
      group: "other",
      component: {
        name: "cl-upload",
        props: {
          isSpace: true,
          size: [200, 300],
        },
      },
    },
  ],

  // 插件
  plugins: [
    // 自动聚焦
    setFocus("name"),
  ],

  // 详情钩子
  onInfo(data, { next, done }) {
    // 继续请求 info 接口
    // next({
    // 	id: data.id
    // });

    // 直接取列表的数据返回
    done({
      ...data,
      age: 18,
    });
  },

  // 提交钩子
  onSubmit(data, { next, close, done }) {
    // 继续请求 update/add 接口
    next({
      ...data,
      code: "615206459",
    });
  },

  // 打开后
  onOpened(data) {
    if (Upsert.value?.mode != "info") {
      ElMessage.success("编辑中");
    }
  },

  // 关闭钩子
  onClose(action, done) {
    if (Upsert.value?.mode == "update") {
      if (action == "close") {
        return ElMessageBox.confirm("还没填完，确定关闭不？", "提示", {
          type: "warning",
        })
          .then(() => {
            done();
            ElMessage.info("好吧");
          })
          .catch(() => {
            ElMessage.success("请继续编辑");
          });
      }
    }

    done();
  },
});

// 表格
const Table = useTable({
  autoHeight: false,
  columns: [
    {
      type: "selection",
      width: 60,
    },
    {
      label: "基础信息",
      prop: "baseInfo",
      children: [
        {
          label: "姓名",
          prop: "name",
          minWidth: 120
        },
        {
          label: "存款(元)",
          prop: "wages",
          sortable: true,
          minWidth: 120
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      dict: options.status,
      minWidth: 100
    },
    {
      type: "op",
      width: 240,
      buttons: [
        "info",
        "edit",
        "delete"
      ],
    },
  ],
});

// 合计
function onSummaryMethod({ data }: { data: any[] }) {
  return [
    "合计",
    "",
    "",
    data.reduce((a, b) => parseFloat(a + Number(b.wages)), 0).toFixed(2),
  ];
}

// 高级搜索
const AdvSearch = useAdvSearch({
  items: [
    {
      label: "昵称",
      prop: "name",
      component: {
        name: "el-input",
      },
    },
  ],
});
</script>
