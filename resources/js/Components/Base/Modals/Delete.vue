<template>
        <JetDialogModal :show="showModal" @end="close()">
            <template #content>
                <div class="text-center">
                    <h1 class="py-4 text-lg font-bold text-red-500">{{ trans('global.delete') }}</h1>
                    <h3 claass=" text-gray-400 text-center">
                        {{ trans('global.delete.message') }}
                    </h3>
                </div>
            </template>

            <template #footer>
                <button
                    class="inline-flex items-center justify-center px-4 mr-3 font-normal tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-danger-600 hover:bg-danger-500 focus:bg-danger-700 focus:ring-offset-danger-700 filament-page-button-action"
                    @click.prevent="destroyRecord(form.id)"
                >
                    Delete
                </button>
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
    computed:{
        lang(){
            return this.$page.props.data.trans;
        }
    },
    methods: {
        trans(key){
            return this.lang[key] ? this.lang[key] : key;
        },
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
