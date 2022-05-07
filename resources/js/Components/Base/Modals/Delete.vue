<template>
        <JetDialogModal :show="showModal" @close="showModal = !showModal">
            <template #content>
                <div class="text-center">
                    <h1 class="py-4 text-lg font-bold text-red-500">Delete</h1>
                    <h3 claass=" text-gray-400 text-center">
                        Do You When To Delete This Customer?
                    </h3>
                </div>
            </template>

            <template #footer>
                <JetButton
                    class="mr-3"
                    @click.prevent="destroyRecord(form.id)"
                >
                    Delete
                </JetButton>
                <JetSecondaryButton @click="showModal = !showModal">
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
        url: String,
        item: Object
    },
    data() {
        return {
            showModal: false,
            form: {},
        };
    },
    watch: {
        show(newValue, oldValue) {
            this.showModal = newValue;
        },
        item(newValue, oldValue) {
            this.form = newValue;
        },
    },
    methods: {
        close() {
            this.$emit("close", this.showModal);
        },
        destroyRecord(id) {
            this.form.submit("delete", this.route(this.url +".destory", id), {
                preserveScroll: true,
                onSuccess: () => {
                    this.form.reset();
                    this.$emit('success');
                },
            });
        },
    },
});
</script>
