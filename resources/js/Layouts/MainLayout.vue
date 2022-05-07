<template>
    <div>
        <Sidebar :open="isSideMenuOpen" @close="closeSidebar()"/>
        <div
            class="flex flex-col flex-1 w-screen space-y-6 lg:pl-80 rtl:lg:pl-0 rtl:lg:pr-80 filament-main"
        >
            <Header :isDark="dark" @switchTheme="themeSwitcher()" @openMobileSidebar="openSidebar()" />
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import Sidebar from "@/components/Main/Sidebar.vue";
import MobileSide from "@/components/MobileSide.vue";
import Header from "@/components/Main/Header.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        title: String,
    },

    components: {
        Sidebar,
        MobileSide,
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
                document.querySelector("html").classList.add("theme-dark");
            } else {
                this.dark = false;
                document.querySelector("html").classList.remove("theme-dark");
            }
        }
    },
    methods: {
        themeSwitcher() {
            if (this.dark) {
                this.dark = false;
                document.querySelector("html").classList.remove("theme-dark");
                localStorage.setItem("dark", false);
            } else {
                this.dark = true;
                document.querySelector("html").classList.add("theme-dark");
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
