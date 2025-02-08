import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cool Admin",
  description: "一个很酷的后台管理系统开发框架",
  lastUpdated: true,

  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    footer: {
      message: "COOL为开发者而生",
      copyright:
        '<a href="https://beian.miit.gov.cn">Copyright © COOL | 闽ICP备2024042701号</a>',
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
      level: [2, 3],
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    editLink: {
      text: "在GitHub上编辑",
      pattern:
        "https://github.com/cool-team-official/cool-admin-vue-docs/blob/main/:path",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "介绍", link: "/src/introduce/index.md", noIcon: false },
      { text: "教程", link: "/src/guide/quick.md" },
      { text: "CRUD 组件", link: "/src/guide/plugins/crud" },
      { text: "🔥插件市场", link: "https://cool-js.com/plugin" },
      { text: "交流合作", link: "/src/about/index.md" },
      {
        text: "v8.0.0",
        items: [
          {
            text: "更新日志",
            link: "/src/todo/update.md",
          },
        ],
      },
      {
        text: "更多",
        items: [
          {
            text: "Cool Admin(Nodejs版)",
            link: "https://node.cool-admin.com",
          },
          {
            text: "Cool Admin(Java版)",
            link: "https://java.cool-admin.com",
          },
          {
            text: "Uni（基于uni-app跨端移动端开发）",
            link: "https://uni-docs.cool-js.com",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "介绍",
        items: [
          {
            text: "简介",
            link: "/src/introduce/index.md",
          },
          {
            text: "演示 / 示例",
            link: "/src/introduce/show.md",
          },
          {
            text: "源码",
            link: "/src/introduce/src.md",
          },
        ],
      },
      {
        text: "教程",
        items: [
          { text: "快速开始", link: "/src/guide/quick.md" },
          { text: "Ai编码", link: "/src/guide/ai.md" },
          { text: "Ai流程编排", link: "/src/guide/flow.md" },
          { text: "模块/插件开发", link: "/src/guide/dev.md" },
          { text: "权限", link: "/src/guide/permission.md" },
          {
            text: "目录结构",
            items: [
              { text: "packages", link: "/src/guide/packages.md" },
              { text: "config", link: "/src/guide/config.md" },
              {
                text: "cool",
                items: [
                  { text: "index.vue", link: "/src/guide/cool/index.vue.md" },
                  { text: "router", link: "/src/guide/cool/router.md" },
                  { text: "service", link: "/src/guide/cool/service.md" },
                ],
              },
              {
                text: "modules",
                items: [
                  { text: "base", link: "/src/guide/modules/base.md" },
                  { text: "dict", link: "/src/guide/modules/dict.md" },
                  { text: "helper", link: "/src/guide/modules/helper.md" },
                  { text: "recycle", link: "/src/guide/modules/recycle.md" },
                  { text: "space", link: "/src/guide/modules/space.md" },
                  { text: "task", link: "/src/guide/modules/task.md" },
                  { text: "user", link: "/src/guide/modules/user.md" },
                ],
              },
              {
                text: "plugins",
                items: [
                  { text: "crud", link: "/src/guide/plugins/crud.md" },
                  {
                    text: "dev-tools",
                    link: "/src/guide/plugins/dev-tools.md",
                  },
                  {
                    text: "distpicker",
                    link: "/src/guide/plugins/distpicker.md",
                  },
                  { text: "echarts", link: "/src/guide/plugins/echarts.md" },
                  {
                    text: "editor-preview",
                    link: "/src/guide/plugins/editor-preview.md",
                  },
                  {
                    text: "editor-wang",
                    link: "/src/guide/plugins/editor-wang.md",
                  },
                  {
                    text: "element-ui",
                    link: "/src/guide/plugins/element-ui.md",
                  },
                  { text: "excel", link: "/src/guide/plugins/excel.md" },
                  { text: "i18n", link: "/src/guide/plugins/i18n.md" },
                  { text: "iconfont", link: "/src/guide/plugins/iconfont.md" },
                  { text: "tailwind", link: "/src/guide/plugins/tailwind.md" },
                  { text: "theme", link: "/src/guide/plugins/theme.md" },
                  { text: "upload", link: "/src/guide/plugins/upload.md" },
                  { text: "view", link: "/src/guide/plugins/view.md" },
                ],
              },
              { text: "App.vue", link: "/src/guide/App.vue.md" },
              { text: "main.ts", link: "/src/guide/main.ts.md" },
            ],
          },
          {
            text: "CRUD 组件",
            items: [
              {
                text: "cl-crud",
                link: "/src/guide/crud/crud.md",
              },
              {
                text: "cl-form",
                link: "/src/guide/crud/form.md",
              },
              {
                text: "cl-upsert",
                link: "/src/guide/crud/upsert.md",
              },
              {
                text: "cl-table",
                link: "/src/guide/crud/table.md",
              },
              {
                text: "cl-add-btn",
                link: "/src/guide/crud/add-btn.md",
              },
              {
                text: "cl-adv-search",
                link: "/src/guide/crud/adv-search.md",
              },
              {
                text: "cl-dialog",
                link: "/src/guide/crud/dialog.md",
              },
              {
                text: "cl-search-key",
                link: "/src/guide/crud/search-key.md",
              },
              {
                text: "cl-search",
                link: "/src/guide/crud/search.md",
              },
              {
                text: "cl-refresh-btn",
                link: "/src/guide/crud/refresh-btn.md",
              },
              {
                text: "cl-context-menu",
                link: "/src/guide/crud/context-menu.md",
              },
              {
                text: "cl-multi-delete-btn",
                link: "/src/guide/crud/multi-delete-btn.md",
              },
              {
                text: "cl-pagination",
                link: "/src/guide/crud/pagination.md",
              },
            ],
          },
        ],
      },

      {
        text: "更新日志",
        link: "/src/todo/update.md",
      },
      {
        text: "交流合作",
        link: "/src/about/index.md",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cool-team-official/cool-admin-vue",
      },
    ],
  },

  ignoreDeadLinks: ["http://localhost:9000"],

  vite: {
    ssr: {
      noExternal: ["@cool-vue/crud", "element-plus", "vue"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          api: "modern-compiler",
        },
      },
    },
  },
});
