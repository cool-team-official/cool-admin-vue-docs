import Layout from "./layout.vue";
import "./custom.css";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";
import "element-plus/dist/index.css";
import "@cool-vue/crud/dist/index.css";
import CodeDemo from "../../components/code-demo.vue";

export default {
  Layout,

  enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      app.component("code-demo", CodeDemo);

      import("element-plus").then((res) => {
        app.use(res.default);
      });

      import("@cool-vue/crud").then((res) => {
        app.use(res.default, {
          style: {
            table: {
              autoHeight: false,
            },
          },
        });
      });
    }
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
