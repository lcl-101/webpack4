const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//生成环境
const NODE_ENV = process.env.NODE_ENV;
let isProduction = NODE_ENV === 'production';

module.exports = {
    entry: "./src/modules/demo/demo.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'demo.bundle.js'
    },
    mode: NODE_ENV,
    plugins: [
        new HtmlWebpackPlugin({
            entryName: "demo",
            template: './src/views/demo/demo.html',
            filename: 'demo.html',
            inject:'body'
        })
    ]
}