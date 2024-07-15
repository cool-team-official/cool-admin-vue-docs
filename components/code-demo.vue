<template>
  <el-config-provider :locale="zhCn">
    <div class="code-demo">
      <div class="code-demo__header" v-if="title">
        <h4 class="code-demo__title">{{ title }}</h4>

        <el-button
          round
          type="primary"
          @click="toCollapse(false)"
          v-if="showCode && collapse"
        >
          收起
        </el-button>
      </div>

      <div class="code-demo__desc" v-if="$slots.desc">
        <slot name="desc"></slot>
      </div>

      <div class="code-demo__preview">
        <slot name="preview"></slot>
      </div>

      <div class="code-demo__container" v-if="collapse">
        <div class="code-demo__src">
          <slot></slot>
        </div>
      </div>

      <div class="code-demo__footer" v-if="showCode">
        <el-button round @click="toCollapse()">{{
          !collapse ? "显示代码" : "隐藏代码"
        }}</el-button>
      </div>
    </div>
  </el-config-provider>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

export default defineComponent({
  name: "code-demo",

  props: {
    title: String,
    opened: Boolean,
    showCode: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const collapse = ref<boolean>(props.opened);

    function toCollapse(v: boolean) {
      collapse.value = v === undefined ? !collapse.value : v;
    }

    return {
      collapse,
      toCollapse,
      zhCn,
    };
  },
});
</script>

<style lang="scss">
.code-demo {
  padding: 10px 10px 20px 10px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  margin: 20px 0;
  background-color: #fff;

  &__header {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--el-border-color);

    .el-button {
      position: absolute;
      right: 0px;
    }
  }

  &__title {
    font-weight: 400;
    color: #1f2f3d;
    margin: 0;
  }

  &__container {
    border-radius: 5px;
    padding: 0 10px;
  }

  &__desc {
    margin-bottom: 20px;
  }

  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    position: sticky;
    bottom: 0;
    z-index: 999;

    .el-button {
      padding: 8px 30px;
    }
  }

  ul {
    margin: 0;
  }
}

.cl-form,
.cl-crud {
  table {
    margin: 0;
    border: 0 !important;

    thead,
    th,
    td {
      border: 0;
    }
  }

  tr {
    background-color: var(--el-table-tr-bg-color) !important;
    border-top: 0 !important;
  }
}
</style>
