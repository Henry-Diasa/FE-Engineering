const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // 绝对路径
    filename: "js/bundle.js",
    // assetModuleFilename: "img/[name].[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1, // @import的文件还会被后面的loader处理 1取决于后面还有几个loader
            },
          },
          "postcss-loader",
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require("autoprefixer"),
          //         require("postcss-preset-env"), // 现代浏览器新的样式兼容 且已经包括autoprefixer的特性
          //       ],
          //     },
          //   },
          // },
        ], // loader顺序是 从下到上 从后向前的顺序
        // loader: "css-loader"
        // use: [
        //     {
        //         loader: "css-loader",
        //         options: {}
        //     }
        // ]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         name: "[name].[hash:6].[ext]",
      //         limit: 8192,
      //         esModule: false
      //       },
      //     },
      //   ],
      //   type: "javascript/auto"
      // },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource", // "asset/inline"
        generator: {
          filename: "img/[name].[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      {
        test: /\.ttf|eot|woff/,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack demo",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              "**/index.html",
              "**/.DS_Store"
            ]
          }
        }
      ]
    })
  ],
};
