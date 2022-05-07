<template>
<div>
        <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition duration-150 ease-in-out"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-active-class="transition duration-150 ease-in-out"
        leave-to-class="opacity-0"
    >
        <div v-show="open"
        @click="closeSideMenu()"
        @keydown.escape="closeSideMenu()"

        class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">

        </div>
    </Transition>
    <Transition
        enter-from-class="transform -translate-x-20 opacity-0"
        enter-active-class="transition duration-150 ease-in-out"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in-out"
        leave-from-class="opacity-100"
        leave-to-class="transform -translate-x-20 opacity-0"
    >
    <aside
        class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
        v-show="open"

        @click="closeSideMenu()"
        @keydown.escape="closeSideMenu()">
        <div class="py-4 text-gray-500 dark:text-gray-400">
            <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                {{ $page.props.appName }}
            </a>
                            <ul
                    class="px-6 space-y-6"
                    v-for="(item, key) in $page.props.menu"
                    :key="key"
                >
                    <li class="mt-4">
                        <button
                            class="flex items-center justify-between w-full"
                            v-if="item.name !== 0"
                        >
                            <p
                                class="text-xs font-bold tracking-wider text-gray-600 uppercase dark:text-gray-300"
                            >
                                {{ item.name }}
                            </p>

                            <svg
                                class="w-3 h-3 text-gray-600 dark:text-gray-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                style="display: none"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        <ul class="mt-2 -mx-3 space-y-1 text-sm">
                            <li
                                class="filament-sidebar-item"
                                v-for="(menu, index) in item.menu"
                                :key="index"
                            >
                                <Link
                                    v-if="menu.type === 'route'"
                                    class="flex items-center justify-center gap-3 px-3 py-2 font-medium transition rounded-lg hover:bg-gray-500/5 focus:bg-gray-500/5 dark:text-gray-300 dark:hover:bg-gray-700"
                                    :class="{
                                        'flex items-center justify-center gap-3 px-3 py-2 rounded-lg font-medium transition bg-primary-500 text-white':
                                            route().current(menu.route),
                                    }"
                                    :href="route(menu.route)"
                                    :active="route().current(menu.route)"
                                >
                                    <i
                                        :class="'bx ' + menu.icon + ' bx-xs'"
                                    ></i>
                                    <div class="flex flex-1">
                                        <span> {{ menu.title }} </span>
                                    </div>
                                </Link>
                                <a v-else :href="menu.url" target="_blank">
                                    <i :class="'bx ' + menu.icon + ' bx-xs'"></i>
                                    <span class="ml-2">{{ menu.title }}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div
                            class="-mr-6 border-t rtl:-mr-auto rtl:-ml-6 dark:border-gray-700"
                        ></div>
                    </li>
                </ul>
        </div>
    </aside>
    </Transition>

</div>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    components: {
        Link,
    },
    props: ["href", "active", "open"],
    data(){
        return {
            isPagesMenuOpen: false
        }
    },
    methods: {
        togglePagesMenu(){
            if(this.isPagesMenuOpen){
                this.isPagesMenuOpen = false;
            }
            else {
                this.isPagesMenuOpen = true;
            }
        },
        closeSideMenu(){
            this.$emit('close')
        }
    }
});
</script>

