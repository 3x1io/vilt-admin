const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}

const domain = 'vilt-admin.test'; // <= EDIT THIS
const homedir = require('os').homedir();

// The mix script:
mix.browserSync({
      proxy: 'https://' + domain,
      host: domain,
      open: 'external',
      https: {
        key: homedir + '/.valet/Certificates/' + domain + '.key',
        cert: homedir + '/.valet/Certificates/' + domain + '.crt'
      },
      notify: true, //Enable or disable notifications
  })
