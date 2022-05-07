<template>
    <div>
        <div
            class="relative filament-tables-bulk-actions md:mr-2"
            v-if="Object.keys(this.bulk).length"
        >
            <button
                @click="close()"
                type="button"
                class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-500/5 focus:outline-none filament-tables-icon-button text-primary-500 focus:bg-primary-500/10 filament-tables-bulk-actions-trigger"
            >
                <span class="sr-only"> Open actions </span>

                <svg
                    class="w-5 h-5 filament-tables-icon-button-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                </svg>
            </button>

            <div
                v-show="showBluk"
                class="absolute z-10 mt-2 shadow-xl rounded-xl w-52 top-full"
            >
                <ul
                    class="py-1 space-y-1 overflow-hidden bg-white shadow rounded-xl"
                >
                    <li>
                        <slot></slot>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    components: {
        Link,
    },
    props: {
        bulk: Object,
        show: Boolean,
        collection: Object
    },
    watch: {
        show(newValue, oldValue){
            this.showBluk = newValue;
        }
    },
    data() {
        return {
            showBluk: false,
        };
    },
    methods: {
        close() {
            this.$emit("close", this.showBluk);
        },
    },
});
</script>
