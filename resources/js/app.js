import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import Toaster from "@meforma/vue-toaster";
import 'boxicons/css/boxicons.min.css';
import 'flatpickr/dist/flatpickr.css';
import '@vueform/toggle/themes/default.css';
import "@suadelabs/vue3-multiselect/dist/vue3-multiselect.css";
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        let page = ""
       if(name.includes('@')){
            const matched = /@(.*)::/.exec(name);
            const module = matched[1];
            const pageName = name.replace(matched[0], "");
            page = resolvePageComponent(
                `./../../Modules/${module}/Resources/views/${pageName}.vue`,
                import.meta.glob("./../../Modules/**/**/**/**/*.vue")
            );
        }
        else {
            page = resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob("./Pages/**/*.vue")
            );
        }
        page.then((module) => {
            module.default.layout = module.default.layout;
        });
        return page;
    },
    setup({ el, app, props, plugin }) {
        return createApp(
            { render: () => h(app, props) })
            .use(plugin)
            .use(Toaster)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#7e3af2' });
