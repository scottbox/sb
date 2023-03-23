let mix = require('laravel-mix');

require('mix-tailwindcss');

mix.js('static/js/app.js', 'assets')
   .postCss('static/css/app.css', 'assets', [
        require('tailwindcss/nesting'),
   ]).tailwind().options({
        processCssUrls: false,
   });