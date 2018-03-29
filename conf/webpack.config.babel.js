/* conf/webpack.config.babel.js */
import path from "path";

import { DefinePlugin } from "webpack";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Check if in development mode
const DEVELOPMENT = process.env.NODE_ENV != "production";
const API_URL = process.env.API_URL || "https://api.coinmarketcap.com/v1/";

// Exctract Text CSS
const extractStyles = new ExtractTextPlugin("[name].[hash].bundle.css");

// HTML Wrapper generation
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "./index.ejs",
});

// Clean build and dist folder
const cleanWebpackPlugin = new CleanWebpackPlugin("dist", {
    root: path.resolve(__dirname, "../"),
});

// Build environment
const environmentPlugin = new DefinePlugin({
    __DEVELOPMENT__: DEVELOPMENT,
    __API_URL__: JSON.stringify(API_URL),
});

export default {
    mode: DEVELOPMENT ? "development" : "production",
    context: path.resolve(__dirname, "../src"),
    entry: {
        app: "./index.js",
    },
    module: {
        rules: [
            // Javascripts
            {
                test: /\.js$/,
                use: ["eslint-loader"],
                enforce: "pre",
            },
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: "babel-loader",
            },

            // Css
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            query: {
                                sourceMap: DEVELOPMENT,
                                url: false,
                                modules: true,
                            },
                        },
                        {
                            loader: "postcss-loader",
                            query: {
                                sourceMap: DEVELOPMENT,
                                config: {
                                    path: path.resolve(
                                        __dirname,
                                        "../conf/postcss.config.js",
                                    ),
                                },
                            },
                        },
                    ],
                }),
            },
            // Image loader
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        query: {
                            name: "[md5:hash:hex].[ext]",
                        },
                    },
                    {
                        loader: "image-webpack-loader",
                        query: {
                            optipng: {
                                enabled: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, "../node_modules")],
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[hash].bundle.js",
    },
    plugins: [
        cleanWebpackPlugin,
        extractStyles,
        htmlWebpackPlugin,
        environmentPlugin,
    ],
    devtool: DEVELOPMENT ? "source-map" : false,
};
