<template>
    <header class="z-10 py-4 border-b bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div
                class="container flex items-center justify-between h-full px-6 mx-auto text-primary-600 dark:text-primary-300"
        >
            <!-- Mobile hamburger -->
            <button
                    class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-primary"
                    @click="toggleSideMenu"
                    aria-label="Menu"
            >
                <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                >
                    <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
            <!-- Search input -->
            <div class="flex justify-center flex-1 lg:mr-32">
                <div
                        class="relative w-full max-w-xl mr-6 focus-within:text-primary-500"
                >
                    <div class="absolute inset-y-0 flex items-center pl-2">
                        <svg
                                class="w-4 h-4"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                        >
                            <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                            class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-primary-300 focus:outline-none focus:shadow-outline-primary form-input"
                            type="text"
                            placeholder="Search for projects"
                            aria-label="Search"
                    />
                </div>
            </div>
            <ul class="flex items-center flex-shrink-0 space-x-6">
                <!-- Theme toggler -->
                <li class="flex">
                    <button
                            class="rounded-md focus:outline-none focus:shadow-outline-primary"
                            @click="toggleTheme"
                            aria-label="Toggle color mode"
                    >
                        <div v-if="!dark">
                            <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                            >
                                <path
                                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                ></path>
                            </svg>
                        </div>
                        <div v-if="dark">
                            <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                            >
                                <path
                                        fill-rule="evenodd"
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                        clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </button>
                </li>
                <!-- Notifications menu -->
                <li class="relative">
                    <button
                            class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-primary"
                            @click="toggleNotificationsMenu"
                            @keydown.escape="closeNotificationsMenu"
                            aria-label="Notifications"
                            aria-haspopup="true"
                    >
                        <svg
                                class="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                        >
                            <path
                                    d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                            ></path>
                        </svg>
                        <!-- Notification badge -->
                        <span
                                aria-hidden="true"
                                class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                        ></span>
                    </button>
                    <div v-if="isNotificationsMenuOpen">
                        <ul
                                x-transition:leave="transition ease-in duration-150"
                                x-transition:leave-start="opacity-100"
                                x-transition:leave-end="opacity-0"
                                @click="closeNotificationsMenu"
                                @keydown.escape="closeNotificationsMenu"
                                class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                        >
                            <li class="flex">
                                <a
                                        class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                >
                                    <span>Messages</span>
                                    <span
                                            class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                                    >
                            13
                            </span>
                                </a>
                            </li>
                            <li class="flex">
                                <a
                                        class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                >
                                    <span>Sales</span>
                                    <span
                                            class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                                    >
                            2
                            </span>
                                </a>
                            </li>
                            <li class="flex">
                                <a
                                        class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                >
                                    <span>Alerts</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <!-- Profile menu -->
                <li class="relative">
                    <button
                            class="align-middle rounded-full focus:shadow-outline-primary focus:outline-none"
                            @click="toggleProfileMenu"
                            @keydown.escape="closeProfileMenu"
                            aria-label="Account"
                            aria-haspopup="true"
                    >
                        <img
                                v-if="$page.props.jetstream.managesProfilePhotos"
                                class="object-cover w-8 h-8 rounded-full"
                                :src="$page.props.user.profile_photo_url"
                                :alt="$page.props.user.name"
                                aria-hidden="true"
                        />
                        <span v-else class="inline-flex rounded-md">
                            <button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none">
                                {{ $page.props.user.name }}

                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </span>
                    </button>
                    <div v-if="isProfileMenuOpen">

                                <Transition
                                    leave-from-class="opacity-100"
                                    leave-active-class="transition duration-150 ease-in"
                                    leave-to-class="opacity-0"
                                >
                        <ul

                                @click="closeProfileMenu"
                                @keydown.escape="closeProfileMenu"
                                class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                                aria-label="submenu"
                        >
                            <li class="flex" v-for="(item, key) in $page.props.dropdown" :key="key">
                                <Link
                                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        :href="route(item.route)"
                                >
                                    <i :class="'bx '+item.icon+' bx-xs p-2'"></i>
                                    <span>{{ item.title }}</span>
                                </Link>
                            </li>
                            <li class="flex">
                                <a
                                        @click.prevent="logout"
                                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                >

                                    <i class="p-2 bx bx-log-out bx-xs"></i>
                                     Log Out
                                </a>
                            </li>
                        </ul>
                                </Transition>

                    </div>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import JetDropdownLink from '@/Jetstream/DropdownLink.vue'


export default defineComponent({
    components: {
        Link,
        JetDropdownLink
    },
    props: ["href", "active", "open", "isDark"],
    created(){
        this.dark = this.$props.isDark;
    },
    data(){
        return {
            isNotificationsMenuOpen: false,
            isProfileMenuOpen: false,
            dark: false
        }
    },
    methods: {
        toggleTheme(){
            if(this.dark){
                this.dark = false;
                this.$emit('switchTheme')
            }
            else {
                this.dark = true;
                this.$emit('switchTheme')
            }
        },
        toggleSideMenu(){
            this.$emit('openMobileSidebar')
        },
        toggleProfileMenu(){
            if(this.isProfileMenuOpen){
                this.isProfileMenuOpen = false;
            }
            else {
                this.isProfileMenuOpen = true;
            }
        },
        toggleNotificationsMenu(){
            if(this.isNotificationsMenuOpen){
                this.isNotificationsMenuOpen = false;
            }
            else {
                this.isNotificationsMenuOpen = true;
            }
        },
        closeNotificationsMenu(){
            this.isNotificationsMenuOpen = false;
        },
        closeProfileMenu(){
            this.isProfileMenuOpen = false
        },
        togglePagesMenu(){
            console.log('Open Sidebar')
            //this.$emit('open')
        },
        closeSideMenu(){
            this.$emit('close')
        },
        logout() {
            this.$inertia.post(route('logout'));
        },
    }
});
</script>
