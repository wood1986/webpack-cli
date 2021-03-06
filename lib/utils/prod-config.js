const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const JsConfigWebpackPlugin = require('js-config-webpack-plugin');

module.exports = {
    mode: 'production',

    plugins: [new webpack.ProgressPlugin(), new JsConfigWebpackPlugin()],

    optimization: {
        minimizer: [new TerserPlugin()],
    },
};
