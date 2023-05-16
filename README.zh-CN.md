# ReactImg

[English](./README.md) | 简体中文

React 图片懒加载组件

## Features

- 支持懒加载或者常规模式加载（进入页面请求全部图片）
- 提供 `decode` 配置项，使用 `HTMLImageElement.decode` 优化图片加载
- 提供图片加载中状态回调以及占位图
- 提供请求错误占位图


## TODO

- [ ] 缩略图配置项，先加载小体积的缩略图占位，等标准图片加载完成后进行替换
- [ ] 使用 `Intersection Observer` 提供懒加载功能，因此可以使用其配置项
- [ ] 支持 `loading='lazy'` 配置
- [ ] 只开启懒加载的情况下使用默认的图片加载方式

## Issues

- 在 js 中使用 `new Image` 预先加载图片，后续将加载完成的 src 赋值给真实 img 时，还会请求一次（尽管可以使用缓存）

## Related

- https://github.com/mbrevda/react-image
- https://github.com/worldzhao/build-your-own-react-image
