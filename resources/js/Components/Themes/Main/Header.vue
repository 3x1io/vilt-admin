<template>
    <header class="z-10 py-4 border-b dark:border-gray-700 dark:bg-gray-800">
        <div
            class="flex items-center justify-between h-full px-6 mx-auto text-primary-600 dark:text-primary-300"
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

            </div>
            <ul class="flex items-center flex-shrink-0 space-x-6">
                <!-- Language toggler -->
                <li class="flex rtl:ml-4">
                    <button
                        class="rounded-md focus:outline-none focus:shadow-outline-primary"
                        @click="changeLanguage"
                        aria-label="Change Language"
                    >
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                />
                            </svg>
                        </div>
                    </button>
                </li>

                <!-- Theme toggler -->
                <li class="flex rtl:ml-4">
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
                            v-if="notifications.length"
                            aria-hidden="true"
                            class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                        ></span>
                    </button>
                    <div v-if="isNotificationsMenuOpen && notifications.length">
                        <ul
                            @click="closeNotificationsMenu"
                            @keydown.escape="closeNotificationsMenu"
                            class="absolute right-0 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md w-80 dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                        >
                            <li class="flex" v-for="(note, index) in notification" :key="index">
                                <a
                                    class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                    :class="{
                                        'text-green-600': note.type === 'success',
                                        'text-red-600': note.type === 'danger',
                                        'text-yellow-600': note.type === 'warring',
                                    }"
                                    :href="note.url ? note.url : '#'"
                                >
                                    <span><i class="mt-1 bx" style="font-size: 20px" :class="note.icon"></i></span>
                                    <span>{{note.title}}</span>
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
                            <button
                                type="button"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                            >
                                {{ $page.props.user.name }}

                                <svg
                                    class="ml-2 -mr-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
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
                                <li
                                    class="flex"
                                    v-for="(item, key) in $page.props.data.dropdown"
                                    :key="key"
                                >
                                    <Link
                                        preserve-scroll
                                        preserve-state
                                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        :href="route(item.route)"
                                    >
                                        <i
                                            :class="'bx ' + item.icon + ' bx-xs p-2'
                                            "
                                        ></i>
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
import JetDropdownLink from "@/Jetstream/DropdownLink.vue";
import { initializeApp } from 'firebase/app';
import {getMessaging, onMessage, getToken} from "firebase/messaging";

export default defineComponent({
    components: {
        Link,
        JetDropdownLink,
    },
    props: ["href", "active", "open", "isDark"],
    data() {
        return {
            isNotificationsMenuOpen: false,
            isProfileMenuOpen: false,
            dark: false,
            notifications: []
        };
    },
    mounted() {
        this.notifications = this.notification;
    },
    computed: {
        notification(){
            return this.$page.props.data.notifications
        }
    },
    methods: {
        changeLanguage() {
            if (!localStorage.getItem("lang")) {
                localStorage.setItem(
                    "lang",
                    JSON.stringify({
                        id: "ar",
                        name: "Arabic",
                    })
                );
            }
            this.$inertia.post(
                this.route("translations.switch"),
                { language: JSON.parse(localStorage.getItem("lang")) },
                {
                    preserveScroll: true,
                    forceFormData: true,
                    onSuccess: () => {
                        let htmlEl = document.querySelector("html");
                        if (
                            JSON.parse(localStorage.getItem("lang")).id === "ar"
                        ) {
                            htmlEl.setAttribute("dir", "rtl");
                            localStorage.setItem(
                                "lang",
                                JSON.stringify({
                                    id: "en",
                                    name: "English",
                                })
                            );
                        } else {
                            htmlEl.setAttribute("dir", "ltr");
                            localStorage.setItem(
                                "lang",
                                JSON.stringify({
                                    id: "ar",
                                    name: "Arabic",
                                })
                            );
                        }
                    },
                }
            );
        },
        toggleTheme() {
            if (this.dark) {
                this.dark = false;
                this.$emit("switchTheme");
            } else {
                this.dark = true;
                this.$emit("switchTheme");
            }
        },
        toggleSideMenu() {
            this.$emit("openMobileSidebar");
        },
        toggleProfileMenu() {
            if (this.isProfileMenuOpen) {
                this.isProfileMenuOpen = false;
            } else {
                this.isProfileMenuOpen = true;
            }
        },
        toggleNotificationsMenu() {
            if (this.isNotificationsMenuOpen) {
                this.isNotificationsMenuOpen = false;
            } else {
                this.isNotificationsMenuOpen = true;
            }
        },
        closeNotificationsMenu() {
            this.isNotificationsMenuOpen = false;
        },
        closeProfileMenu() {
            this.isProfileMenuOpen = false;
        },
        togglePagesMenu() {
            console.log("Open Sidebar");
            //this.$emit('open')
        },
        closeSideMenu() {
            this.$emit("close");
        },
        logout() {
            this.$inertia.post(route("logout"));
        },
    },
    created(){
        let _this = this;
        if (this.$page.props.user && this.$page.props.data.fcm) {
            const firebaseConfig = this.$page.props.data.fcm.config;

            const app = initializeApp(firebaseConfig);
            const messaging = getMessaging(app);
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    getToken(messaging, {
                        vapidKey:this.$page.props.data.fcm.vapidKey})
                        .then((currentToken) => {
                            if (currentToken) {
                                // Send the token to your server and update the UI if necessary
                                // ...
                                console.log(currentToken);
                                _this.$inertia.post(
                                    route("admin.notifications.token"),
                                    {
                                        token: currentToken,
                                        provider: "fcm-web",
                                        modsel: "App\\Models\\User",
                                        model_id: this.$page.props.user.id,
                                    },
                                    {
                                        onSuccess: () => {
                                            console.log(
                                                "Registration successful"
                                            );
                                        },
                                    }
                                );
                            } else {
                                // Show permission request UI
                                console.log(
                                    "No registration token available. Request permission to generate one."
                                );
                                // ...
                            }
                        })
                        .catch((err) => {
                            console.log(
                                "An error occurred while retrieving token. ",
                                err
                            );
                            // ...
                        });
                    console.log("Notification permission granted.");
                    if ("serviceWorker" in navigator) {
                        navigator.serviceWorker
                            .register("/firebase-messaging-sw.js")
                            .then(function (registration) {
                                console.log(
                                    "Registration successful, scope is:",
                                    registration.scope
                                );
                            })
                            .catch(function (err) {
                                console.log(
                                    "Service worker registration failed, error:",
                                    err
                                );
                            });
                    }
                    navigator.serviceWorker.getRegistration().then((reg) => {
                        onMessage(messaging, (payload) => {
                            console.log("message: ", payload);
                            let audio = new Audio('https://devsuez.emalleg.net/storage/sound/notifications.mp3');
                            audio.play();
                            _this.notifications.unshift({
                                title: payload.data.title,
                                url: payload.data.url,
                                icon: payload.data.icon,
                                image: payload.data.image,
                                description: payload.data.message,
                                type: payload.data.type,
                                date: moment().fromNow(),
                            });
                            // push notification can send event.data.json() as well
                            const options = {
                                body: payload.data.message,
                                icon: payload.data.image,
                                tag: "alert",
                            };
                            let notification = reg.showNotification(
                                payload.data.title,
                                options
                            );
                            // link to page on clicking the notification
                            notification.onclick = (payload) => {
                                window.open(payload.data.url);
                            };
                        });
                    });
                }

            });
        }
    }
});
</script>
