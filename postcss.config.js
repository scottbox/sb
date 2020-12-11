const { ModuleFilenameHelpers } = require("webpack");

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
    ],
};