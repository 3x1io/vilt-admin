<template>
    <div>
        <div
            class="relative filament-tables-bulk-actions md:mr-2"
            v-if="Object.keys(this.bulk).length"
        >
            <div
                class="flex justify-start gap-2"
            >
                <slot></slot>
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
