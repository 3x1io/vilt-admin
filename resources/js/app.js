require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Toaster from "@meforma/vue-toaster";
import "@suadelabs/vue3-multiselect/dist/vue3-multiselect.css";

require('boxicons/css/boxicons.min.css')
require('@vueform/toggle/themes/default.css')
require('flatpickr/dist/flatpickr.css')
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(Toaster)
            .mixin({ methods: {
                route
            } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
