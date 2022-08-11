const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './Modules/**/Resources/views/**/*.vue',
        './Modules/Base/Services/Render/**/*.vue'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                main: colors.blue[700],
                secondary: "#014894",
                danger: colors.rose,
                primary: colors.blue,
                success: colors.green,
                warning: colors.amber,
                black: colors.black,
            },
            fontFamily: {
                sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
                main: ["Almarai", "sans-serif"],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar')
    ],
}
