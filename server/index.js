require('ignore-styles')

require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})

require("asset-require-hook")({
    extensions: ["svg", "jpeg", "jpg", "png", "gif"],
    name: '/static/media/[name].[ext]',
    limit: 10000,
});

require('./server');