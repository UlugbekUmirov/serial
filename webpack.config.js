module.exports = {
  mode: "development",
  entry: "./src/js/script.js",
  output: {
    path: __dirname + "/dist/js",
    filename: "bundle.js",
  },
  watch: true,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/, //bu barcha json fayllarni olib beradi;
        exclude: /(node_modules)|bower_components/, //exclude olmagin degani , yani shu yozganlarni olmaydi
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/presets-env",
                {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
