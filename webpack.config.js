const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {main: './src/index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            localIdentName: '[name]-[local]-[hash:base64:3]',
                            modules: true
                        }
                    },
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/templates/index.html",
            filename: "./index.html"
        })
    ]
};
