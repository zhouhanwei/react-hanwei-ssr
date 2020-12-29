/* craco.config.js */

const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.module.rules.forEach(d => {
                d.oneOf &&
                d.oneOf.forEach(e => {
                    if (e && e.options && e.options.name) {
                        e.options.name = e.options.name.replace('[hash:8].', '');
                    }
                });
            });
            return webpackConfig;
        },
        plugins: [
            new CopyPlugin([
                {
                    from: path.resolve(__dirname, 'src/assets/mp3'),
                    to: path.resolve(__dirname, 'build/static/mp3')
                }
            ]),
        ],
    }
};