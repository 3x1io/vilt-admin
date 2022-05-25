<template>
    <!-- Desktop sidebar -->
    <aside
        class="fixed inset-y-0 left-0 z-20 flex flex-col h-screen overflow-y-scroll transition-transform -translate-x-full shadow-2xl bg-main rtl:left-auto rtl:right-0 filament-sidebar lg:border-r w-80 lg:z-0 lg:translate-x-0 dark:bg-main dark:border-white rtl:lg:-translate-x-0 rtl:translate-x-full scrollbar-thin scrollbar-thumb-greenColor2 scrollbar-track-white hover:scrollbar-thumb-primary-700"
    >
        <div class="text-gray-500 dark:text-gray-400">
            <header
                class="border-b h-[4.4rem] shrink-0 px-6 flex items-center filament-sidebar-header dark:border-gray-700"
            >
                <Link :href="route('dashboard')">
                    <div
                        class="text-xl font-bold tracking-tight text-black filament-brand dark:text-white"
                    >
                        {{ $page.props.appName }}
                    </div>
                </Link>
            </header>
            <ul class="mt-2" v-for="(item, key) in $page.props.menu" :key="key">
                <br v-if="item.name === 0">
                <button
                    v-if="item.name !== 0"
                    @click.prevent="$store.sidebar.toggleCollapsedGroup(label)"
                    class="flex items-center justify-between w-full px-4 py-4"
                >
                    <p
                        class="text-xs font-bold tracking-wider text-gray-600 uppercase dark:text-gray-300"
                    >
                        {{ item.name }}
                    </p>
                    <!-- <i class='bx bx-chevron-down' ></i> -->
                </button>

                <li
                    v-for="(menu, index) in item.menu"
                    :key="index"
                    class="relative px-4 py-2"
                >
                    <span
                        v-if="menu.type === 'route'"
                        v-show="route().current(menu.route)"
                        class="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg bg-primary-600"
                        aria-hidden="true"
                    ></span>
                    <Link
                        v-if="menu.type === 'route'"
                        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                        :href="route(menu.route)"
                        :active="route().current(menu.route)"
                    >
                        <i :class="'bx ' + menu.icon + ' bx-xs'"></i>
                        <span class="ml-2 rtl:mr-2" v-if="!menu.lang">{{ menu.title }}</span>
                        <span class="ml-2 rtl:mr-2" v-else>{{ trans(menu.lang) }}</span>
                    </Link>
                    <a  v-else :href="menu.url" target="_blank">
                        <i :class="'bx ' + menu.icon + ' bx-xs'"></i>
                        <span class="ml-2 rtl:mr-2" v-if="!menu.lang">{{ menu.title }}</span>
                        <span class="ml-2 rtl:mr-2" v-else>{{ trans(menu.lang) }}</span>
                    </a>
                </li>
                <div
                    class="mt-6 border-b dark:border-gray-700"
                    v-if="key !== $page.props.menu.length - 1"
                ></div>
            </ul>
        </div>
    </aside>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import { HomeIcon, UserIcon } from "@heroicons/vue/outline";
import { usePage } from '@inertiajs/inertia-vue3'
export default defineComponent({
    components: {
        Link,
        HomeIcon,
        UserIcon,
    },
    props: ["href", "active"],
    data() {
        return {
            isPagesMenuOpen: false,
        };
    },
    computed: {
        langs(){
             return this.$page.props.trans
        }
    },
    methods: {
        trans(key){
           return this.langs[key];
        },
        togglePagesMenu() {
            if (this.isPagesMenuOpen) {
                this.isPagesMenuOpen = false;
            } else {
                this.isPagesMenuOpen = true;
            }
        },
    },
});
</script>
