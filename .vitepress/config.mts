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
        "https://github.com/cool-team-official/cool-admin-go-next-docs/blob/main/:path",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "介绍", link: "/src/introduce/index.md", noIcon: false },
      { text: "教程", link: "/src/guide/quick.md" },
      { text: "CRUD 组件", link: "/src/guide/plugins/crud" },
      { text: "🔥插件市场", link: "https://cool-js.com/plugin/list.html" },
      { text: "交流合作", link: "/src/about/index.md" },
      {
        text: "v7.1.0",
        items: [
          {
            text: "更新日志",
            link: "/src/todo/update.md",
          },
          {
            text: "版本计划",
            link: "/src/todo/plan.md",
          },
        ],
      },
      {
        text: "更多",
        items: [
          {
            text: "Cool Admin(Nodejs版)",
            link: "https://cool-js.com",
          },
          {
            text: "Cool Admin(Java版)",
            link: "https://java.cool-admin.com",
          },
          {
            text: "Uni（基于uni-app跨端移动端开发）",
            link: "https://cool-js.com/uni/introduce.html",
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
            text: "演示",
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
              { text: "config", link: "/src/guide/config.md" },
              {
                text: "cool",
                items: [
                  { text: "service", link: "/src/guide/cool/service.md" },
                ],
              },
              {
                text: "modules",
                items: [
                  { text: "base", link: "/src/guide/modules/base.md" },
                  { text: "chat", link: "/src/guide/modules/chat.md" },
                  { text: "dict", link: "/src/guide/modules/dict.md" },
                  { text: "helper", link: "/src/guide/modules/helper.md" },
                  { text: "recycle", link: "/src/guide/modules/recycle.md" },
                  { text: "space", link: "/src/guide/modules/space.md" },
                  { text: "task", link: "/src/guide/modules/task.md" },
                  { text: "theme", link: "/src/guide/modules/theme.md" },
                  { text: "user", link: "/src/guide/modules/user.md" },
                ],
              },
              {
                text: "plugins",
                items: [
                  { text: "crud", link: "/src/guide/plugins/crud.md" },
                  {
                    text: "distpicker",
                    link: "/src/guide/plugins/distpicker.md",
                  },
                  {
                    text: "editor-monaco",
                    link: "/src/guide/plugins/editor-monaco.md",
                  },
                  {
                    text: "editor-preview",
                    link: "/src/guide/plugins/editor-preview.md",
                  },
                  {
                    text: "editor-wang",
                    link: "/src/guide/plugins/editor-wang.md",
                  },
                  { text: "excel", link: "/src/guide/plugins/excel.md" },
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
            link: "/src/guide/crud/index.md",
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
        text: "计划&更新",
        items: [
          {
            text: "更新",
            link: "/src/todo/update.md",
          },
          {
            text: "计划",
            link: "/src/todo/plan.md",
          },
        ],
      },
      {
        text: "交流合作",
        link: "/src/about/index.md",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cool-team-official/cool-admin-go-next",
      },
    ],
  },
});
