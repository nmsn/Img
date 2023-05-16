# ReactImg

English | [简体中文](./README.zh-CN.md)

React component for lazy loading images.

## Features

- Supports lazy loading or regular mode (load all images on page load).
- Provides a `decode` option which uses `HTMLImageElement.decode` to optimize image loading.
- Provides callbacks for loading state and fallback images for errors.
## TODO

- [ ] Thumbnail option to show a low-resolution placeholder while loading the full image.
- [ ] Use `Intersection Observer` for lazy loading and related configuration options.
- [ ] Support `loading='lazy'` configuration.
- [ ] Use the default image loading method if lazy loading is enabled.
## Issues

When using `new Image` to preload the images before assigning it to the actual img element, the request is made again (even though it can be cached).

## Related

https://github.com/mbrevda/react-image
https://github.com/worldzhao/build-your-own-react-image