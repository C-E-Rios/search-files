const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.module.js',
    output: {
        path: './dist/',
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'clusterseven',
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ],
    devServer: {
        inline: true,
        port: 8888,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!sass?sourceMap'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    devtool: '#eval'
};
