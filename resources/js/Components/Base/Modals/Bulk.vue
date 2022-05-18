<template>
    <JetDialogModal :show="showModal" @close="close()">
        <template #content>
            <h1 class="py-4 text-3xl text-center text-red-500"></h1>
            <div class="text-center">
                <h1 class="py-4 text-lg font-bold text-red-500">
                    {{ title }}
                </h1>
                <h3 claass=" text-gray-400 text-center">
                    global.bulk.message
                </h3>
            </div>
        </template>

        <template #footer>
            <JetButton
                class="mr-3"
                @click.prevent="bulkActionRun()"
            >
                Run
            </JetButton>
            <JetSecondaryButton @click="close()">
                Close
            </JetSecondaryButton>
        </template>
    </JetDialogModal>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import JetDialogModal from "@/Jetstream/DialogModal.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetButton from "@/Jetstream/Button.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";

export default defineComponent({
    components: {
        Link,
        JetDialogModal,
        JetSecondaryButton,
        JetButton,
        JetInput,
        JetInputError,
        JetLabel,
    },
    props: {
        show: Boolean,
        title: String,
        url: String,
        bulk: Object,
        action: String
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
        trans(key){
            return this.$attrs.langs[key];
        },
        close() {
            this.$emit("close", this.showModal);
        },
        bulkActionRun() {
            this.$inertia.post(
                this.route(this.url+".bulk"),
                { action: this.action, ids: this.bulk },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.$emit('success');
                    },
                }
            );
        },
    },
});
</script>
