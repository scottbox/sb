const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'content/**/*.md',
        'layouts/**/*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                headings: ['Quattrocento', ...defaultTheme.fontFamily.serif],
                sans: ['Quattrocento Sans', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};