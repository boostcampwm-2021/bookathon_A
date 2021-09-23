const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/javascripts/main.js',
    output: {
        path: path.resolve('./public', 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },]
    },
    watch: true
};