<template>
    <div
        class="relative flex justify-center min-h-screen bg-gray-100 items-top dark:bg-gray-900 sm:items-center sm:pt-0"
    >
        <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
            <div class="flex justify-center py-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-24 h-24 text-danger-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                </svg>
            </div>
            <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
                <div
                    class="px-4 text-lg tracking-wider text-gray-500 border-r border-gray-400"
                >
                    403
                </div>

                <div
                    class="ml-4 text-lg tracking-wider text-gray-500 uppercase"
                >
                    This Action Not Authorized
                </div>
            </div>
            <div class="flex justify-center py-4">
                <Link
                    class="inline-flex items-center justify-center px-4 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-danger-600 hover:bg-danger-500 focus:bg-danger-700 focus:ring-offset-danger-700 filament-page-button-action"
                    :href="route('login')"
                >
                    Back To Home
                </Link>
            </div>
        </div>
    </div>
</template>
<script>
import { Link } from "@inertiajs/inertia-vue3";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Link,
    },
});
</script>
