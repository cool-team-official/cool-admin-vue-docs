import DefaultTheme from "vitepress/theme";
import "./custom.css";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Crud from "@cool-vue/crud";
import "@cool-vue/crud/dist/index.css";
import CodeDemo from "../../components/code-demo.vue";

export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    app.component("code-demo", CodeDemo);
    app.use(ElementPlus).use(Crud, {
      style: {
        table: {
          autoHeight: false,
        },
      },
    });
  },

  setup() {
    const route = useRoute();
    const initZoom = () => {
      new mediumZoom("[data-zoomable]", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
