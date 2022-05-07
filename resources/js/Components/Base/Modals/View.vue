<template>
    <JetDialogModal :show="showModal" @close="close">
        <template #title>
            {{ title }}
            <hr class="my-4" />
        </template>

        <template #content>
            <div class="print_area">
                <div v-for="(field, key) in rows" :key="key">
                    <div v-if="field.view">
                        <div
                            class="my-4"
                            v-if="field.type === 'image' && item[field.field]"
                        >
                            <img
                                :src="item[field.field]"
                                class="object-cover w-20 h-20 mx-auto rounded-full"
                            />
                        </div>
                        <div v-else class="flex justify-between my-4">
                            <div>
                                <p class="font-bold">{{ field.label }}</p>
                            </div>
                            <div>
                                {{ item[field.field] }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template #footer>
            <JetSecondaryButton @click="close"> Close </JetSecondaryButton>
        </template>
    </JetDialogModal>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import JetDialogModal from "@/Jetstream/DialogModal.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetButton from "@/Jetstream/Button.vue";

export default defineComponent({
    components: {
        Link,
        JetDialogModal,
        JetSecondaryButton,
        JetButton,
    },
    props: {
        show: Boolean,
        item: Object,
        rows: Array,
        title: String,
    },
    watch: {
        show(newValue, oldValue) {
            this.showModal = newValue;
        },
    },
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        close() {
            this.$emit("close", this.showModal);
        },
    },
});
</script>
