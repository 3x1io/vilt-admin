<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900 font-main" :class="{'overflow-hidden': isSideMenuOpen}">
        <Aside></Aside>

        <MobileSide :open="isSideMenuOpen" @close="closeSidebar()"></MobileSide>

         <div class="flex flex-col flex-1 w-screen space-y-6 lg:pl-80 rtl:lg:pl-0 rtl:lg:pr-80 filament-main">
                <Header :isDark="dark" @switchTheme="themeSwitcher()" @openMobileSidebar="openSidebar()"></Header>
                <main class="h-full overflow-y-auto">
                    <slot></slot>
                </main>
            </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import Aside from '@/components/Aside.vue'
    import MobileSide from '@/components/MobileSide.vue'
    import Header from '@/components/Header.vue'
    import { Head, Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        props: {
            title: String,
        },

        components: {
            Aside,
            MobileSide,
            Header,
            Head,
            Link,
        },

        data() {
            return {
                showingNavigationDropdown: false,
                isSideMenuOpen: false,
                dark: false
            }
        },
        created() {
            let isDark = localStorage.getItem('dark');
            if(isDark){
                if(isDark === "true"){
                    this.dark = true;
                    document.querySelector('html').classList.add("theme-dark");
                }
                else {
                    this.dark = false;
                    document.querySelector('html').classList.remove("theme-dark");
                }

            }
        },
        methods: {

            themeSwitcher(){
                if(this.dark){
                    this.dark = false;
                    document.querySelector('html').classList.remove("theme-dark");
                    localStorage.setItem('dark', false)
                }
                else {
                    this.dark = true;
                    document.querySelector('html').classList.add("theme-dark");
                    localStorage.setItem('dark', true)
                }
            },
            openSidebar(){
               if( this.isSideMenuOpen){
                    this.isSideMenuOpen = false;
               }
               else {
                    this.isSideMenuOpen= true;
               }
            },
            closeSidebar(){
                if(this.isSideMenuOpen){
                    this.isSideMenuOpen = false;
                }
                else {
                    this.isSideMenuOpen = true;
                }
            },
            switchToTeam(team) {
                this.$inertia.put(route('current-team.update'), {
                    'team_id': team.id
                }, {
                    preserveState: false
                })
            },

            logout() {
                this.$inertia.post(route('logout'));
            },
        }
    })
</script>
