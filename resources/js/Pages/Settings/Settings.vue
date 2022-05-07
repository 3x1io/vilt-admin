<template>
    <app-layout title="Dashboard">
          <div class="container grid px-6 mx-auto">
            <div class="flex justify-between my-6">
                <div>
                    <h2
                    class="text-2xl font-semibold text-gray-700 dark:text-gray-200"
                    >
                        Settings
                    </h2>
                </div>
                <div>
                    <button class="inline-flex items-center justify-center px-4 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action">
                        Generate Sitemap
                    </button>
                </div>
            </div>
            <div class="bg-white border border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-800 rounded-xl filament-tables-container">
                <div class="px-4 py-4">
                    <div class="py-2">
                    <JetLabel for="site_name" value="Site Name" />
                    <JetInput
                        id="site_name"
                        v-model="form.site_name"
                        type="text"
                        class="block w-full mt-1"
                        autofocus
                    />
                    <JetInputError
                        :message="errors.site_name"
                        class="mt-2"
                    />
                </div>
                </div>
            </div>


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

    export default defineComponent({
        components: {
            AppLayout,
            JetDialogModal,
            JetSecondaryButton,
            JetButton,
            JetInput,
            JetInputError,
            JetLabel,
        },
        data(){
            return {
                errors: {},
                form: {}
            }
        }
    })
</script>
