const config = require('./');

module.exports = {
    proxy: config.appUrl,
    host: config.appUrl,
    port: 4040,
    open: 'external',
    notify: {
        styles: {
            top: 'auto',
            bottom: '0',
            'border-bottom-left-radius': '0px',
            'border-top-left-radius': '5px',
        },
    },
    files: [
        `${config.themeAssets}**/*.js`,
        `${config.themeAssets}**/*.css`,
        `${config.themePath}**/*.php`,
        `${config.themeAssets}**/*.jpg`,
        `${config.themeAssets}**/*.jpeg`,
        `${config.themeAssets}**/*.png`,
        `${config.themeAssets}**/*.svg`,
        `${config.themeAssets}**/*.gif`,
    ],
};
