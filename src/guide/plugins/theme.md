# theme

配置主题、主色

## 配置

在 `plugins/theme/config.ts` 中配置：

```js
{
    name: 'default',

    // 自定义主题色
    // color: "#4165d7",

    // 主题列表
    list: [
        {
            label: t('默认'),
            name: 'default',
            color: '#4165d7'
        },
        {
            label: t('翠绿'),
            name: 'cuilv',
            color: '#51C21A'
        },
        {
            label: t('紫檀'),
            name: 'zitan',
            color: '#d0378d'
        },
        {
            label: t('金橙'),
            name: 'jincheng',
            color: '#FFA500'
        },
        {
            label: t('樱桃'),
            name: 'yingtao',
            color: '#FF69B4'
        },
        {
            label: t('薄荷'),
            name: 'bohe',
            color: '#3EB489'
        },
        {
            label: t('青灰'),
            name: 'qinghui',
            color: '#708090'
        },
        {
            label: t('珊瑚'),
            name: 'shanhu',
            color: '#FF4500'
        }
    ]
}
```
