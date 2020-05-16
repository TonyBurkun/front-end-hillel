const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [ './src/index.js', './src/styles/main.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
            rules: [
                {
                    test: /\.s[ac]ss$/,
                    use: [ MiniCssExtractPlugin.loader,'css-loader', 'sass-loader'],
                },
            ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
};