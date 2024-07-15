# cl-form

自定义表单组件，动态数据配置到渲染

- 新增 [children](#多层级展示) 参数，多层级展示

- 新增 [ref](#获取组件实例) 参数，获取组件实例

- 新增 [插件](#插件)：`setFocus`（自动聚焦）

## useForm

`cl-form` 标签绑定 `ref` 值后使用 `useForm` 加载组件

- `const` 定义必须与 `ref` 一致

```html
<template>
  <cl-form ref="Form" />
</template>

<script lang="ts" setup>
  import { useForm } from "@cool-vue/crud";
  const Form = useForm();
</script>
```

如果存在使用多个 `cl-form` 组件的情况，配置不同的 `ref` 值即可：

```html
<template>
  <cl-form ref="UserForm" />
  <cl-form ref="GoodsForm" />
</template>

<script lang="ts" setup>
  import { useForm } from "@cool-vue/crud";
  const UserForm = useForm();
  const GoodsForm = useForm();
</script>
```

:::tip
子组件可以也可以使用 `const Form = useForm()` 获取 `cl-form` 实例。同样 [Ref](#ref) 上的值与方法都能使用

```html
<template>
  <cl-form ref="Form" />
</template>

<script lang="ts" setup>
  import { useForm } from "@cool-vue/crud";
  const Form = useForm();

  function open() {
    Form.value.open({
      items: [
        {
          label: "昵称",
          prop: "name",
          component: {
            vm: Test,
          },
        },
      ],
    });
  }
</script>
```

Test.vue

```html
<template>
  <!-- 绑定name -->
  <el-input v-model="Form.form.name" />
</template>

<script lang="ts" setup>
  import { useForm } from "@cool-vue/crud";
  const Form = useForm();
</script>
```

:::

## 基础用法

<code-demo>

```html
<template>
  <cl-form ref="Form"></cl-form>
  <el-button @click="open">打开</el-button>
</template>

<script lang="ts" setup>
  import { useForm } from "@cool-vue/crud";

  const Form = useForm();

  function open() {
    Form.value?.open({
      title: "自定义表单",
      items: [
        {
          label: "name",
          prop: "name",
          value: "神仙都没用",
          required: true,
          component: {
            name: "el-input",
          },
        },
      ],
      on: {
        submit(data, { close, done }) {
          console.log(data);
          setTimeout(() => {
            close();
          }, 1500);
        },
      },
    });
  }
</script>
```

<template #preview>
<cl-form ref="Form"></cl-form>
<el-button @click="open">打开</el-button>
</template>

</code-demo>

## 分组显示

配置 `type` 参数为 `tabs`，`labels` 作为分组列表：

- label 分组名称
- value 分组标识

<code-demo>

```html
<template>
  <cl-form ref="Form"></cl-form>
  <el-button @click="open">打开</el-button>
</template>

<script lang="ts" setup>
  import { useForm } from "@cool-vue/crud";

  const Form = useForm();

  function open() {
    Form.value?.open({
      title: "分组显示",
      items: [
        {
          type: "tabs",
          props: {
            labels: [
              {
                label: "基础信息",
                value: "base",
              },
              {
                label: "工作信息",
                value: "work",
              },
            ],
          },
        },
        {
          label: "name",
          prop: "name",
          value: "神仙都没用",
          required: true,
          component: {
            name: "el-input",
          },
          group: "base",
        },
        {
          label: "手机号",
          prop: "phone",
          component: {
            name: "el-input",
          },
          group: "base",
        },
        {
          label: "工作单位",
          prop: "companyName",
          required: true,
          component: {
            name: "el-input",
          },
          group: "work",
        },
        {
          label: "职业",
          prop: "phone",
          component: {
            name: "el-select",
            options: [
              {
                label: "程序员",
                value: 0,
              },
              {
                label: "设计师",
                value: 1,
              },
              {
                label: "产品经理",
                value: 2,
              },
            ],
          },
          group: "work",
        },
      ],
      on: {
        submit(data, { close, done }) {
          console.log(data);
          setTimeout(() => {
            close();
          }, 1500);
        },
      },
    });
  }
</script>
```

<template #preview>
<cl-form ref="Form"></cl-form>
<el-button @click="open2">打开</el-button>
</template>

</code-demo>

## 多层级展示

在部分情况下，需要某几个 `item` 合并成一块，如基础信息、上报信息等等。使用 `children` 参数：

<code-demo>

```html
<template>
  <cl-form ref="Form"></cl-form>
  <el-button @click="open">打开</el-button>
</template>

<script lang="ts" setup>
  import { useForm } from "@cool-vue/crud";

  const Form = useForm();

  function open() {
    Form.value?.open({
      title: "多层级展示",
      items: [
        {
          prop: "base",
          props: {
            labelWidth: "0px",
          },
          component: {
            name: "cl-form-card", // 自定义组件包装组件
            props: {
              label: "基础信息", // 标签名
              expand: true, // 默认展开
              isExpand: true, // 是否可以展开、收起
            },
          },
          children: [
            {
              label: "用户昵称",
              prop: "name",
              component: {
                name: "el-input",
              },
            },
            {
              label: "手机号",
              prop: "phone",
              component: {
                name: "el-input",
              },
            },
          ],
        },
        {
          prop: "report",
          props: {
            labelWidth: "0px",
          },
          component: {
            name: "cl-form-card",
            props: {
              label: "上报信息",
            },
          },
          children: [
            {
              label: "材料",
              prop: "name",
              component: {
                name: "el-input",
              },
            },
            {
              label: "日期",
              prop: "phone",
              component: {
                name: "el-date-picker",
              },
            },
          ],
        },
      ],
    });
  }
</script>
```

<template #preview>
<cl-form ref="Form"></cl-form>
<el-button @click="open_children()">打开</el-button>
</template>

</code-demo>

## 获取组件实例

在部分情况下，想要获取到组件的实例，有 2 种方法：

- `ref` 参数

```ts
const { refs, setRefs } = useCool();
const Form = useForm();

Form.value.open({
  items: [
    {
      label: "昵称",
      prop: "name",
      component: {
        name: "el-input",
        ref: setRefs("name"),
      },
    },
  ],
  on: {
    open() {
      refs.name.focus();
    },
  },
});
```

- 插槽

```html
<cl-form ref="Form">
  <template #slot-name="{ scope }">
    <el-input :ref="setRefs('name')" v-model="scope.name" />
  </template>
</cl-form>
```

## 钩子函数

- `open(data)` 打开后

- `close(action: 'close' | 'submit', done)` 关闭前

- `submit(data, { close, done })` 提交时

<code-demo>

```html
<template>
  <cl-form ref="Form"></cl-form>
  <el-button @click="open">打开</el-button>
</template>

<script lang="ts" setup>
  import { useForm } from "@cool-vue/crud";

  const Form = useForm();

  function open() {
    Form.value?.open({
      title: "钩子函数",
      items: [
        {
          label: "name",
          prop: "name",
          required: true,
          component: {
            name: "el-input",
          },
        },
      ],
      on: {
        open(data) {
          // data 表单值
          data.name = "神仙都没用-打开时配置";
        },
        submit(data, { close, done }) {
          // data 表单值
          // close 关闭表单
          // done 关闭加载中
          ElMessage.success("2s后关闭");

          setTimeout(() => {
            close();
          }, 2000);
        },
        close(action, done) {
          if (action == "close") {
            ElMessageBox.confirm("是否要关闭？", "提示", {
              type: "warning",
            })
              .then(() => {
                // done 完成关闭事件
                done();
              })
              .catch(() => null);
          } else {
            done();
          }
        },
      },
    });
  }
</script>
```

<template #preview>
<cl-form ref="Form"></cl-form>
<el-button @click="open3">打开</el-button>
</template>

</code-demo>

<script lang="ts" setup>
import { useForm } from '@cool-vue/crud'
import { ElMessageBox, ElMessage } from 'element-plus';
import FormPlugins from "../../../components/form-plugins.vue";

const Form = useForm()

function open() {
	Form.value?.open({
		title: "自定义表单",
		items: [
			{
				label: "昵称",
				prop: "name",
				value: '神仙都没用',
				required: true,
				component: {
					name: "el-input"
				}
			},
		],
		on: {
			submit(data, { close, done }) {
				console.log(data);
				setTimeout(() => {
					close();
				}, 1500);
			},
		}
	});
}

function open2() {
	Form.value?.open({
		title: "分组显示",
		items: [
			{
				type: "tabs",
				props: {
					labels: [
						{
							label: "基础信息",
							value: "base"
						},
						{
							label: "工作信息",
							value: "work"
						}
					]
				}
			},
			{
				label: "昵称",
				prop: "name",
				value: "神仙都没用",
				required: true,
				component: {
					name: "el-input"
				},
				group: "base"
			},
			{
				label: "手机号",
				prop: "phone",
				component: {
					name: "el-input"
				},
				group: "base"
			},
			{
				label: "工作单位",
				prop: "companyName",
				required: true,
				component: {
					name: "el-input"
				},
				group: "work"
			},
			{
				label: "职业",
				prop: "work",
				component: {
					name: "el-select",
					options: [
						{
							label: "程序员",
							value: 0
						},
						{
							label: "设计师",
							value: 1
						},
						{
							label: "产品经理",
							value: 2
						}
					]
				},
				group: "work"
			}
		],
		on: {
			submit(data, { close, done }) {
				console.log(data);
				setTimeout(() => {
					close();
				}, 1500);
			}
		}
	});
}

function open3() {
	Form.value?.open({
		title: "钩子函数",
		items: [
			{
				label: "昵称",
				prop: "name",
				value: '神仙都没用',
				required: true,
				component: {
					name: "el-input"
				}
			},
		],
		on: {
			open(data) {
				// data 表单值
				data.name = "神仙都没用-打开时配置";
			},
			submit(data, { close, done }) {
				// data 表单值
				// close 关闭表单
				// done 关闭加载中
				ElMessage.success('2s后关闭')

				setTimeout(() => {
					close();
				}, 2000);
			},
			close(action,done) {
				if (action == "close") {
					ElMessageBox.confirm("是否要关闭？", "提示", {
						type: "warning"
					})
						.then(() => {
							// done 完成关闭事件
							done();
						})
						.catch(() => null);
				} else {
					done();
				}
			}
		}
	});
}

function open_children() {
	Form.value?.open({
		title: "多层级展示",
		items: [
			{
				prop: "base",
				props: {
					labelWidth: "0px"
				},
				component: {
					name: "cl-form-card", // 自定义组件包装组件
					props: {
						label: "基础信息", // 标签名
						expand: true, // 默认展开
						isExpand: true // 是否可以展开、收起
					}
				},
				children: [
					{
						label: "用户昵称",
						prop: "name",
						component: {
							name: "el-input"
						}
					},
					{
						label: "手机号",
						prop: "phone",
						component: {
							name: "el-input"
						}
					}
				]
			},
			{
				prop: "report",
				props: {
					labelWidth: "0px"
				},
				component: {
					name: "cl-form-card",
					props: {
						label: "上报信息"
					}
				},
				children: [
					{
						label: "材料",
						prop: "name",
						component: {
							name: "el-input"
						}
					},
					{
						label: "日期",
						prop: "phone",
						component: {
							name: "el-date-picker"
						}
					}
				]
			}
		]
	})
}
</script>

## 属性

| 参数   | 说明           | 类型    | 可选值 | 默认值 |
| ------ | -------------- | ------- | ------ | ------ |
| inner  | 是否只显示表单 | boolean |        | false  |
| inline | 是否内联表单   | boolean |        | false  |

## Ref

| 名称          | 说明                                          | 类型                                                      |
| ------------- | --------------------------------------------- | --------------------------------------------------------- |
| form          | 表单值                                        | {}                                                        |
| open          | 打开表单                                      | ([OpenOptions](#openoptions), [Plugins](#plugins)) => Ref |
| close         | 关闭表单                                      | () => void                                                |
| done          | 关闭 saving 状态                              | () => void                                                |
| clear         | 清空表单值                                    | () => void                                                |
| reset         | 重置表单值                                    | () => void                                                |
| showLoading   | 显示加载框                                    | () => void                                                |
| hiddenLoading | 隐藏加载框                                    | () => void                                                |
| setTitle      | 设置标题                                      | (title) => void                                           |
| setData       | 根据对象层级设置参数                          | (prop, value) => void                                     |
| setOptions    | 设置下拉列表                                  | (prop, value) => void                                     |
| setProps      | 设置组件参数                                  | (prop, props) => void                                     |
| getForm       | 获取表单值                                    | (prop?) => any                                            |
| setForm       | 设置表单值                                    | (prop, value) => void                                     |
| toggleItem    | 切换 hidden 值                                | (prop, flag?) => void                                     |
| hideItem      | 隐藏                                          | (props) => void                                           |
| showItem      | 显示                                          | (props) => void                                           |
| resetFields   | 对整个表单进行重置                            | () => void                                                |
| clearValidate | 移除表单项的校验结果                          | (props: array \| string] => void                          |
| validateField | 对部分表单字段进行校验的方法                  | (props: array \| string, callback) => void                |
| validate      | 对整个表单进行校验的方法                      | (callback(valid: boolean)) => void                        |
| changeTab     | 切换选项栏，items 中存在 `type="tabs"` 时可用 | (name) => void                                            |
| submit        | 表单提交                                      | (callback(data: any)) => Promise\<any\>                   |

### 插件

表单的插件。为了满足产品的另一个无理需求（打开的时候自动聚焦第一个，或者指定输入框），so 有了该参数。

先看看效果：

<form-plugins />

再看看代码：

`setFocus(prop: string)` 插件是给第一个选项组件（如下的 `el-input`）或者指定 `prop` 的组件执行 `focus()` 方法

```html
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
          labelPosition: "top",
        },
        items: [
          {
            label: "获取 ref，打开后聚焦",
            prop: "name",
            component: {
              name: "el-input",
              props: {
                placeholder: "请填写昵称",
              },
            },
          },
        ],
      },
      // 配置插件
      [setFocus()]
    );
  }
</script>
```

最后解释下插件的源码：

```js
// 添加描述 ClForm.Plugin 方便代码提示
export function setFocus(prop?: string): ClForm.Plugin {
	const { refs, setRefs } = useRefs();

	// 返回一个方法
	// exposed 是表单对外暴露的变量，既是 Ref
	// onOpen 表单打开时事件
	// onClose 表单关闭时事件
	// onSubmit 表单提交时事件
	return ({ exposed, onOpen, onClose onSubmit }) => {
		// 获取要匹配的值，为空则取第一个
		const name = prop || exposed.config.items[0].prop;

		if (name) {
			// 获取配置中与 prop 匹配的选项 item
			exposed.config.items.find((e) => {
				if (e.prop == name) {
					if (e.component) {
						// 获取组件的ref
						e.component.ref = setRefs(name);
					}
				}
			});

			// 打开的时候调用 focus 方法
			onOpen(() => {
				refs[name].focus();
			});
		}
	};
}
```

### OpenOptions

表单打开的配置

| 参数                | 说明         | 类型                                           | 可选值 | 默认值                  |
| ------------------- | ------------ | ---------------------------------------------- | ------ | ----------------------- |
| title               | 标题         | string                                         |        |                         |
| width               | 宽度         | string                                         |        |                         |
| items               | 表单项       | [Items#items)                                  |        |                         |
| props               | el-form 参数 | [FormProps](#formprops)                        |        |                         |
| form                | 表单值       | object                                         |        |                         |
| on                  | 事件监听     | object                                         |        |                         |
| on.open             | 表单打开     | function(form)                                 |        |                         |
| on.close            | 表单关闭     | function(done)                                 |        |                         |
| on.submit           | 表单提交     | function(data, {close,done})                   |        |                         |
| dialog              | 对话框参数   | object                                         |        |                         |
| dialog.hiddenHeader | 隐藏头部     | boolean                                        |        | false                   |
| dialog.controls     | 头部操作按钮 | array\<'fullscreen' \| 'close'\>               |        | ["fullscreen", "close"] |
| op                  | 底部操作按钮 | object                                         |        |                         |
| op.hidden           | 是否隐藏     | boolean                                        |        | false                   |
| op.saveButtonText   | 保存按钮文案 | string                                         |        | 保存                    |
| op.closeButtonText  | 关闭按钮文案 | string                                         |        | 取消                    |
| op.buttons          | 按钮组       | array\<'close' \| 'save' \| 'slot-${string}'\> |        | ["close", "save"]       |

### FormProps

| 参数                    | 说明                                      | 类型    | 可选值                 | 默认值  |
| ----------------------- | ----------------------------------------- | ------- | ---------------------- | ------- |
| inline                  | 行内表单模式                              | boolean |                        | false   |
| label-width             | 表单域标签的宽度                          | string  |                        | 120px   |
| label-position          | 表单域标签的位置                          | string  | left / top / right     | right   |
| label-suffix            | 表单域标签的后缀                          | string  |                        |         |
| hide-required-asterisk  | 是否显示必填字段的标签旁边的红色星号      | boolean |                        | false   |
| show-message            | 是否显示校验错误信息                      | boolean |                        | true    |
| inline-message          | 是否以行内形式展示校验信息                | boolean |                        | false   |
| status-icon             | 是否在输入框中显示校验结果反馈图标        | boolean |                        | false   |
| validate-on-rule-change | 是否在 `rules` 属性改变后立即触发一次验证 | boolean |                        | true    |
| size                    | 用于控制该表单内组件的尺寸                | string  | large / default /small | default |
| disabled                | 是否禁用该表单内的所有组件                | boolean |                        | false   |

### Items

| 参数                    | 说明                                      | 类型                               | 可选值 | 默认值 |
| ----------------------- | ----------------------------------------- | ---------------------------------- | ------ | ------ |
| type                    | 类型                                      | string                             | tabs   |        |
| prop                    | 字段                                      | string                             |        |        |
| value                   | 默认值，对应组件 `component` 的 `v-model` | any                                |        |        |
| props                   | 对应 `component` 组件的 prop 参数         | object                             |        |        |
| label                   | 标签文本                                  | string, RenderOptions              |        |        |
| [children](#多层级展示) | 子集                                      | Items                              |        |        |
| [component](#component) | 组件渲染                                  | [Component](#component)            |        |        |
| component.name          | 组件标签名、 slot 名                      | string                             |        |        |
| component.vm            | 组件渲染节点                              | Vue.Component                      |        |        |
| component.style         | 组件样式                                  | object                             |        |        |
| component.props         | 组件参数                                  | object                             |        |        |
| component.ref           | 组件绑定值                                | setRefs(string)                    |        |        |
| [prepend](#component)   | 添加到 `component` 组件前                 | [Component](#component)            |        |        |
| [append](#component)    | 添加到 `component` 组件后                 | [Component](#component)            |        |        |
| collapse                | 是否折叠                                  | boolean                            |        |        |
| rules                   | 验证规则                                  | array, object                      |        |        |
| required                | 是否必填，自动填充 rules                  | boolean                            |        | false  |
| [hidden](#hidden)       | 是否隐藏                                  | boolean, string, function          |        | false  |
| span                    | 栅格占据的列数                            | number                             |        | 24     |
| flex                    | 是否横向拉升元素                          | boolean                            |        | true   |
| group                   | 分组显示                                  | string                             |        |        |
| [hook](#hook)           | 钩子模式                                  | array / string / object / function |        |        |
| hook.bind               | 表单值绑定时触发数据更新                  | array / string / object / function |        |        |
| hook.submit             | 表单提交时触发数据更新                    | array / string / object / function |        |        |

:::tip

1. 静态配置

```js
const Form = useForm();

Form.value?.open({
  items: [
    {
      label: "昵称",
      prop: "nickName",
      component: {
        name: "el-input",
      },
    },
  ],
});
```

2. 动态配置，如在 `upsert` 中新增、编辑显示不同的状态

```js
const Form = useForm();

// 是否禁用
const disabled = ref(false);

Form.value?.open({
  items: [
    () => {
      return {
        label: "昵称",
        prop: "nickName",
        component: {
          name: "el-input",
          props: {
            disabled,
          },
        },
      };
    },
  ],
});
```

:::

### Component

表单项的元素通过 `component` 渲染，该参数支持 4 中渲染方式：

1. 绑定标签

- 该组件必须是全局注册

- 该方式会自动绑定组件的 `v-model`

- `props` 为该组件参数

- 对 `el-select` `el-checkbox-group` `el-radio-group` 支持配置列表数据 `options`

```js
Form.value?.open({
  items: [
    {
      label: "昵称",
      prop: "name",
      component: {
        name: "el-input",
        props: {
          clearable: true,
        },
      },
    },
  ],
});
```

```js
Form.value?.open({
  items: [
    {
      label: "职业",
      prop: "work",
      component: {
        name: "el-select",
        options: [
          {
            label: "程序员",
            value: 0,
          },
          {
            label: "设计师",
            value: 1,
          },
        ],
      },
    },
  ],
});
```

2. 万能插槽，适用于各种场景

- 必须以 `slot-` 开头命名

- `scope` 为表单值

```js
Form.value?.open({
  items: [
    {
      label: "昵称",
      prop: "name",
      component: {
        name: "slot-name",
      },
    },
  ],
});
```

```html
<cl-form>
  <template #slot-name="{ scope }">
    <el-input v-model="scope.name" />
  </template>
</cl-form>
```

3. 使用 `tsx` 标签渲染

- `<script lang="tsx">`

```html
<script lang="tsx" setup>
  Form.value?.open({
    items: [
      {
        label: "昵称",
        prop: "name",
        component: <el-alert title="无效昵称" />,
      },
    ],
  });
</script>
```

4. 使用 `.vue` 、 `.tsx` 文件或者 `render` 方法

- 绑定在 `vm` 上

- 该方式会自动绑定组件的 `v-model`，但是需要自己处理 `update:modelValue` 值的接收及更新

- `props` 为该组件参数

```ts
Form.value?.open({
	items: [
		{
			label: "昵称",
			prop: "name",
			component: {
				vm: {
					name: "test-name",
					// 接收值
					props: {
						modelValue: String
					},
					setup(props: any, { emit }: any) {
						const value = ref<string>();

						// 监听值变化，如果在 cl-upsert 下，第一次会为 undefined
						watch(
							() => props.modelValue,
							(val) => {
								value.value = val;
							},
							{
								immediate: true
							}
						);
						return {
							value,
							// 更新值
							onInput(val: string) {
								emit("update:modelValue", val);
							}
						};
					},
					render(ctx: any) {
						// 绑定值
						return <el-input v-model={ctx.value} onInput={ctx.onInput} />;

						// 也可以使用 h 的方式渲染
						// return h(resolveComponent('el-input'))
					}
				}
				props: {
					type: "a"
				}
			}
		}
	]
});
```

```js
import Test from "./test.vue";

Form.value?.open({
  items: [
    {
      label: "昵称",
      prop: "name",
      component: {
        vm: Test,
        props: {
          type: "a",
        },
      },
    },
  ],
});
```

### Hook

该参数设计于为了更方便的接收、提交参数。

当有这么一个场景，后端返回给你的 `idList` 是用 `,` 拼接的，如：

```js
{
  idList: "1,2,3";
}
```

前端是需要你用 `el-select` 的组件展示，且需要多选模式 `multiple`。那一般的操作都是获取数据后对数据 `split` 分割，再绑定于 `value` 上。

这时候就可以用到 `hook` 参数，它可以在绑定 `value` 的时候预先处理数据：

```js
{
	label: '角色列表',
	prop: 'ids',
	hook: {
		bind: ['split', 'number'], // 通道流程，分割 -> 转成number -> 绑定值
	},
	component: {
		name: 'el-select',
		props: {
			multiple: true
		},
		options: [
			{
				label: "李逍遥",
				value: 1
			},
			{
				label: "景天",
				value: 2
			},
			{
				label: "宇文拓",
				value: 3
			}
		]
	}
}

// 绑定的数据：
{
	ids: [1, 2, 3]
}
```

当然有些 `讨厌` 的后端又想让你以 `1,2,3` 逗号拼接的方式提交。那你也可以用 `hook` 参数处理，用 `join` 的方式拼接：

```js
{
	label: '角色列表',
	prop: 'ids',
	hook: {
		bind: ['split', 'number'],  // 绑定通道流程，分割 -> 转成number -> 绑定值
		submit: ['join'],	// 提交通道流程，逗号拼接 -> 提交
	},
	component: {
		name: 'el-select',
		props: {
			multiple: true
		},
		options: [
			{
				label: "李逍遥",
				value: 1
			},
			{
				label: "景天",
				value: 2
			},
			{
				label: "宇文拓",
				value: 3
			}
		]
	}
}

// 提交的数据：
{
	ids: '1,2,3'
}
```

hook 已有的方法

| 名称          | 说明                                                          |
| ------------- | ------------------------------------------------------------- |
| number        | 转成 `number`, 如果值是数组，那每一项都会被操作到             |
| string        | 转成 `string`, 如果值是数组，那每一项都会被操作到             |
| split         | 字符串以 `,` 分割为数组                                       |
| join          | 数组以 `,` 拼接为字符串                                       |
| boolean       | 转成 `boolean`                                                |
| booleanNumber | 接收一个 boolean 值，返回 1 或 0                              |
| datetimeRange | 在提交中会根据 `prop` 自动转换为 `start[prop]` 和 `end[prop]` |
| splitJoin     | 绑定时 `split(",")`，提交时 `join(",")`                       |
| json          | 绑定时 `JSON.parse()`，提交时 `JSON.stringify()`              |
| empty         | 等于`""`时修改为 `undefined`                                  |

当然你也可以用自定义：

```js
// 例如 value 为："1,2,3"
{
	hook: {
		bind: (value, { form }) => {
			// value 是与 prop 绑定的值
			// form 是表单值

			return value.split(",").map(Number).filter(Boolean); // 结果为：[1, 2, 3]
		},
		submit: (value, { form }) => {
			return value.join(","); // 结果为："1,2,3"
		}
	}
}
```

也可以多个处理：

```js
hook: {
	bind: [
		'split', // 1 分割
		() => {
			// 2 自定义
		},
		'number', // 3 转成 number
	],
	submit: [
		'join', // 1 拼接
		() => {
			// 2 自定义
		}
	]
}
```

<p style="color: red">注册全局hook</p>

```js
import { registerFormHook } from "@cool-vue/crud";

registerFormHook("pca", (value, { method, form, prop }) => {
  if (method == "bind") {
    return [form.province, form.city, form.district];
  } else {
    const [province, city, district] = value || [];
    form.province = province;
    form.city = city;
    form.district = district;
    form[prop] = undefined;
  }
});
```

### Hidden

```js
// 默认填入 boolean
{
	label: "姓名",
	prop: "name",
	hidden: false
}

// scope 为表单数据，自定义返回值
{
	label: "姓名",
	prop: "name",
	hidden: ({ scope }) => {
		return !scope.showName
	}
}

// 使用 ref
const isHidden = ref(false)

{
	label: "姓名",
	prop: "name",
	hidden: isHidden
}

// 使用 computed
const isHidden = computed(() => false)

{
	label: "姓名",
	prop: "name",
	hidden: isHidden
}
```
