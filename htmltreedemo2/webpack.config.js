var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    //插件项
    //页面入口文件配置
    entry: {
        lp_tree : [
            // 这里的顺序是有关系的，
            // output-library 只导出最下面的数据。
            './treedata.js',
            './lptree.js'
        ],
    },
    //入口文件输出配置
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        libraryTarget: "var",
        library: ['[name]'] // 这是导出的dist/out-tsc/test.js 内的所有的export变量
    }
};

// 先所选tsc 把typescript 对象转换成js
// 因为ts转换的js 有浏览器识别不了的代码所以现在用webpack 把js打包成浏览器能识别的代码
// 再执行.\node_modules\.bin\webpack 把ts转换好的js转换成浏览器能识别的js

