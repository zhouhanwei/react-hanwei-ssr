/* craco.config.js */
module.exports = {
    // ...
    reactScriptsVersion: "react-scripts" /* (default value) */,
    plugins: [
        {
            plugin: {
                overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {

                    return cracoConfig;
                },
                overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
                    webpackConfig.module.rules = [...webpackConfig.module.rules, {
                        test: /\.(png|jpg|gif)$/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 10000,
                                    encoding: false,
                                    esModule: false,
                                    name: 'static/media/[name].[ext]',
                                    publicPath: "./",
                                }
                            }
                        ]
                    }]
                    return webpackConfig;
                },
            },
            options: {}
        }
    ]
};