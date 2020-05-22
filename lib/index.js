'use strict';

var postcss = require('postcss');
var Px2rem = require('px2rem');

module.exports = postcss.plugin('postcss-px2rem-ks', function (options) {
    return function (css, result) {
        (options.include || []).forEach(path => {
            if (css.source.input.file.indexOf(path) > -1) {
                // console.log('px2rem.include', css.source.input.file)
                var oldCssText = css.toString();
                var px2remIns = new Px2rem(options);
                var newCssText = px2remIns.generateRem(oldCssText);
                result.root = postcss.parse(newCssText)
            }
        })
    }
});
