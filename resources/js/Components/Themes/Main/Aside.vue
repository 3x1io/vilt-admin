<template>
    <!-- Desktop sidebar -->
    <aside
        class="fixed bg-white inset-y-0 left-0 z-20 flex flex-col h-screen transition-transform -translate-x-full rtl:left-auto rtl:right-0 lg:border-r  w-80 lg:z-0 lg:translate-x-0 dark:bg-gray-800 dark:border-white rtl:lg:border-l rtl:lg:-translate-x-0 rtl:translate-x-full" >
        <div class="text-gray-500 dark:text-gray-400">
            <header
                class="border-b h-[4.1rem] shrink-0 px-6 flex items-center filament-sidebar-header dark:border-gray-700"
            >
                <Link :href="route('dashboard')">
                    <div
                        class="text-xl font-bold tracking-tight filament-brand dark:text-white"
                    >
                        {{ $page.props.data.appName }}
                    </div>
                </Link>
            </header>
            <div class="py-4">
                <img :src="user.profile_photo_url" class="w-16 mx-auto rounded-full"/>
                <h1 class="text-2xl text-center ">{{ user.name }}</h1>
                <h1 class="text-sm text-center">{{ user.email }}</h1>
            </div>
            <div
                class="mb-6 border-b dark:border-gray-700"
            ></div>
            <div class="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-greenColor2 scrollbar-track-white dark:scrollbar-track-gray-500 hover:scrollbar-thumb-primary-700" scroll-region>
                <ul v-for="(item, key) in $page.props.data.menu" :key="key" >
                    <button
                        v-if="item.name !== 0"
                        @click.prevent="$store.sidebar.toggleCollapsedGroup(label)"
                        class="flex items-center justify-between w-full px-4 py-4"
                    >
                        <p
                            class="text-xs font-bold tracking-wider uppercase text-main dark:text-gray-300"
                        >
                            {{ item.name }}
                        </p>
                        <!-- <i class='bx bx-chevron-down' ></i> -->
                    </button>

                    <li
                        v-for="(menu, index) in item.menu"
                        :key="index"
                        class="relative px-4"
                    >
                        <Link
                            preserve-scroll
                            preserve-state
                            v-if="menu.type === 'route'"
                            class="flex justify-start gap-1 px-3 py-2 mt-2 font-normal transition rounded-lg hover:bg-main hover:text-white dark:text-gray-300 dark:hover:bg-gray-700"
                            :class="{'flex justify-start gap-1 px-3 py-2 rounded-lg font-normal transition bg-main text-white': route().current(menu.route)}"

                            :href="route(menu.route)"

                        >
                            <i v-if="menu.icon" :class="menu.icon + ' bx-xs mt-1'"></i>
                            <span class="ml-1 rtl:mr-1" v-if="!menu.lang">{{ menu.title }}</span>
                            <span class="ml-1 rtl:mr-1" v-else>{{ trans(menu.lang) }}</span>
                        </Link>
                        <a v-else :href="menu.url" target="_blank"
                           class="flex justify-start gap-1 px-3 py-2 mt-2 font-normal transition rounded-lg hover:bg-main hover:text-white dark:text-gray-300 dark:hover:bg-gray-700">
                            <i :class="menu.icon + ' bx-xs mt-1'"></i>
                            <span class="ml-1 rtl:mr-1" v-if="!menu.lang">{{ menu.title }}</span>
                            <span class="ml-1 rtl:mr-1" v-else>{{ trans(menu.lang) }}</span>
                        </a>

                    </li>
                    <div
                        class="mt-6 border-b dark:border-gray-700"
                        v-if="key !== $page.props.data.menu.length - 1"
                    ></div>
                    <br>
                </ul>
            </div>

        </div>
    </aside>
</template>

<script>
import {defineComponent} from "vue";
import {Link} from "@inertiajs/inertia-vue3";
import {HomeIcon, UserIcon} from "@heroicons/vue/outline";
import {usePage} from '@inertiajs/inertia-vue3'

export default defineComponent({
    components: {
        Link,
        HomeIcon,
        UserIcon,
    },
    props: {
        user: Object
    },
    data() {
        return {
            isPagesMenuOpen: false,
        };
    },
    computed: {
        langs() {
            return this.$page.props.data.trans
        }
    },
    methods: {
        trans(key) {
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
