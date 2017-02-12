/**
 * Created by naimi on 2/9/17.
 */
var path = require("path");

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve:{
        alias: {
            FirstComponent: __dirname + '/app/components/FirstComponent.js'
        }
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015","react"]
                }
            }
        ]
    }
};
