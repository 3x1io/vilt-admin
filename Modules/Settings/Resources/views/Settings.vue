<template>
    <app-layout :title="$attrs.lang.index">
          <div class="container px-6 mx-auto">
            <div class="flex justify-between my-6">
                <div>
                    <h2
                    class="text-2xl font-semibold text-gray-700 dark:text-gray-200"
                    >
                        {{ $attrs.lang.index }}
                    </h2>
                </div>
                <div>
                    <a  v-for="(action, index) in $attrs.actions" :key="index"  :href="action.url ? action.url : '#'" @click.prevent="!action.url ? action.modal ? openModal(action.modal) : fireAction(action.action) : openUrl(action.url)" class="inline-flex items-center justify-center gap-1 px-4 mr-2 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow rlt:ml-2 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action">
                        <i :class="action.icon"></i>
                        {{ action.label }}
                    </a>
                </div>
            </div>
            <form action="" @submit.prevent="onSubmit">
                <div class="bg-white border border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-800 rounded-xl filament-tables-container">
                <div class="p-4">
                    <ViltForm
                    v-model="form"
                    :rows = "$attrs.rows"
                    :errors = "form.errors"
                />
                </div>
            </div>
            <div class="flex justify-end my-5">
                <div>
                    <button type="submit" class="inline-flex items-center justify-center px-4 my-2 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action">
                        {{ trans('global.save') }}
                    </button>
                </div>
            </div>
            </form>

          </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import JetDialogModal from "@/Jetstream/DialogModal.vue";
    import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
    import JetButton from "@/Jetstream/Button.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import JetInputError from "@/Jetstream/InputError.vue";
    import JetLabel from "@/Jetstream/Label.vue";
    import ViltForm from "@/Components/Base/Rows/ViltForm.vue";

    export default defineComponent({
        components: {
            AppLayout,
            JetDialogModal,
            JetSecondaryButton,
            JetButton,
            JetInput,
            JetInputError,
            JetLabel,
            ViltForm,
        },
        computed:{
            formRows(){
                let rows = this.$attrs.rows;
                let getRows = {};
                for(let i=0; i<rows.length; i++){
                    getRows[rows[i].field] = rows[i].default;
                }

                return getRows;
            },
            lang(){
                return this.$page.props.data.trans;
            },
            getMessage(){
                return this.$page.props.data.message;
            }
        },
        data(){
            return {
                errors: {},
                form: {},
                actionModal: {},
                modalAction: {}
            }
        },
        mounted(){
            this.form = this.$inertia.form(this.formRows);
        },
        methods: {
            openUrl(url){
                window.open(url);
            },
            modalActionRun(modal , action){
                this.$inertia.form(this.modalAction[modal]).submit("post",route(action) ,{
                    preserveScroll: true,
                    onSuccess: () => {
                        this.modalAction[modal].reset();
                        this.actionModal[modal] = false;
                        this.success();
                    },
                });
            },
            fireAction(name){
                this.$inertia.post(route(name), {});
            },
            openModal(name){
                this.actionModal[name] = !this.actionModal[name];
            },
            trans(key){
                return this.lang[key] ? this.lang[key] : key
            },
            onSubmit(){
                this.form.submit("post", route('admin.settings.' + this.$attrs.table + '.store'), {
                    onSuccess: () => {
                        if (typeof this.getMessage === "object") {
                            if (this.getMessage.type === "error") {
                                this.$toast.error(this.getMessage.message, {
                                    position: "top",
                                    style: {
                                        background: "rgba(210, 45, 61, .8)",
                                        "border-radius": "0.25rem",
                                    },
                                });
                            } else if (this.getMessage.type === "success") {
                                this.$toast.success(this.getMessage.message, {
                                    position: "top",
                                    style: {
                                        background: "#7e3af2",
                                        "border-radius": "0.25rem",
                                    },
                                });
                            }
                        } else {
                            this.$toast.success(this.getMessage, {
                                position: "top",
                                style: {
                                    background: "#7e3af2",
                                    "border-radius": "0.25rem",
                                },
                            });
                        }
                    },
                })
            },
        }
    })
</script>
