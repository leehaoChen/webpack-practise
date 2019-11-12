const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
module.exports = {
    mode: 'development',
    entry: resolveApp('./src/app'),
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {contentBase: resolveApp('./src/dist')},
    output: {
        filename: 'main.js',
        path: resolveApp('./src/dist')
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'hello world', template: resolveApp('./template.html')})
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            use:['babel-loader']
        },{
            test: /\.css$/,
            use: ['style-loader', {loader: 'css-loader', options: {modules: true}}]
        },{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },{
            test: /\.(png|jpg|gif)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                },
            ],
        }]
    }

};
