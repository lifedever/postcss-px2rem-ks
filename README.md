# postcss-px2rem-ks

Based on [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) added the exclude folder option.

只有被include的文件夹名称才会被转换为rem，只要绝对路径中包含名称即可。

## Useage
```javascript
module.exports = {
  'plugins': {
    'postcss-px2rem-ks': {
        remUnit: 37.5,
        include: [
            'fold1',
            'fold2'
        ]
    },
  }
}
```
