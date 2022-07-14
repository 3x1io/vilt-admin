<template>
    <div
        class="flex h-screen dark:bg-gray-900 font-main"
        :class="{ 'overflow-hidden': isSideMenuOpen }"
    >
        <Aside :user="this.$page.props.user"></Aside>

        <MAside :open="isSideMenuOpen" @close="closeSidebar()"></MAside>

        <div
            class="flex flex-col flex-1 w-screen space-y-6 lg:pl-80 rtl:lg:pl-0 rtl:lg:pr-80 filament-main"
        >
            <Header
                :isDark="dark"
                @switchTheme="themeSwitcher()"
                @openMobileSidebar="openSidebar()"
            ></Header>
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import Aside from "@/Components/Themes/Main/Aside.vue";
import MAside from "@/Components/Themes/Main/MAside.vue";
import Header from "@/Components/Themes/Main/Header.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        title: String,
    },

    components: {
        Aside,
        MAside,
        Header,
        Head,
        Link,
    },

    data() {
        return {
            showingNavigationDropdown: false,
            isSideMenuOpen: false,
            dark: false,
        };
    },
    created() {
        let isDark = localStorage.getItem("dark");
        if (isDark) {
            if (isDark === "true") {
                this.dark = true;
                document.querySelector("html").classList.add("dark");
            } else {
                this.dark = false;
                document.querySelector("html").classList.remove("dark");
            }
        }
    },
    computed:{
        lang(){
            return this.$page.props.data.trans;
        }
    },
    methods: {
        trans(key){
            let getKey = this.lang[key] ? this.lang[key] : key;
            return getKey;
        },
        themeSwitcher() {
            if (this.dark) {
                this.dark = false;
                document.querySelector("html").classList.remove("dark");
                localStorage.setItem("dark", false);
            } else {
                this.dark = true;
                document.querySelector("html").classList.add("dark");
                localStorage.setItem("dark", true);
            }
        },
        openSidebar() {
            if (this.isSideMenuOpen) {
                this.isSideMenuOpen = false;
            } else {
                this.isSideMenuOpen = true;
            }
        },
        closeSidebar() {
            if (this.isSideMenuOpen) {
                this.isSideMenuOpen = false;
            } else {
                this.isSideMenuOpen = true;
            }
        },
        switchToTeam(team) {
            this.$inertia.put(
                route("current-team.update"),
                {
                    team_id: team.id,
                },
                {
                    preserveState: false,
                }
            );
        },

        logout() {
            this.$inertia.post(route("logout"));
        },
    },
});
</script>
