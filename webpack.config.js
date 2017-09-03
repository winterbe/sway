var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    cache: true,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                use: ['awesome-typescript-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    stats: {
        children: false
    },
    devServer: {
        contentBase: "./static/",
        hot: true,
        port: 8000
    }
};