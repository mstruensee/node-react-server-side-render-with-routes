import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: "./src/client/client.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "src/client/index.html",
            filename: "index.html",
            minify: {
                collapseWhitespace: false
            },
        })
    ]
}
