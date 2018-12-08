module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                    {
                        loader: 'style-loader',
                        options: {
                            attrs: {
                                id: 'styleID'
                            }
                        }
                    }, // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
};