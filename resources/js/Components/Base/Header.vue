<template>
    <div class="flex justify-between my-6">
        <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            {{ title }}
        </h2>
        <div>
            <a
                v-if="$attrs.canCreate"
                href="#"
                @click.prevent="buttonAction()"
                class="inline-flex items-center justify-center px-4 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action"
                >{{ button }}</a
            >
            <slot></slot>
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
        title: String,
        button: String,
    },
    methods: {
        buttonAction() {
            this.$emit("buttonAction");
        },
    },
});
</script>
