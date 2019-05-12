const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports =(env, argv) =>merge(baseConfig,
    require(`./webpack.config.${argv.mode}.js`)
);