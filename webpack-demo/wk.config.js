const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // 绝对路径
    filename: "bundle.js",
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
              "importLoaders": 1 // @import的文件还会被后面的loader处理 1取决于后面还有几个loader
            }
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
    ],
  },
};
