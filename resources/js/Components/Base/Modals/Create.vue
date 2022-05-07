<template>
    <JetDialogModal :show="showModal" @close="close">
        <template #title>
            {{ title }}
            <hr class="my-4" />
        </template>

        <template #content>
            <form action="" v-if="!edit">
                <div v-for="(field, key) in rows" :key="key">
                    <div v-if="field.type === 'image' && field.create">
                        <div class="py-2">
                            <div class="col-span-6 sm:col-span-4">
                                <!-- Profile Photo File Input -->
                                <input
                                    type="file"
                                    class="hidden"
                                    :ref="field.field"
                                    @change="updatePhotoPreview(field.field)"
                                />
                                <JetLabel
                                    :for="field.field"
                                    :value="field.label"
                                />
                                <!-- Current Profile Photo -->
                                <div class="mt-2" v-if="photoPreview[field.field]">
                                    <img
                                        :src="photoPreview[field.field]"
                                        class="object-cover w-20 h-20 rounded-full"
                                    />
                                </div>

                                <div class="mt-2" v-else>
                                    <div v-if="form[field.field]">
                                        <img
                                            :src="form[field.field]"
                                            class="object-cover w-20 h-20 rounded-full"
                                        />
                                    </div>
                                </div>

                                <jet-secondary-button
                                    class="mt-2 mr-2"
                                    type="button"
                                    @click.prevent="selectNewPhoto(field.field)"
                                >
                                    Select A New Photo
                                </jet-secondary-button>

                                <progress
                                    v-if="form.progress"
                                    :value="form.progress.percentage"
                                    max="100"
                                >
                                    {{ form.progress.percentage }}%
                                </progress>

                                <JetInputError
                                    :message="errors[field.field]"
                                    class="mt-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="py-2" v-if="field.create">
                            <JetLabel :for="field.field" :value="field.label" />
                            <JetInput
                                :id="field.field"
                                v-model="form[field.field]"
                                :type="field.type"
                                class="block w-full mt-1"
                                autofocus
                            />
                            <JetInputError
                                :message="errors[field.field]"
                                class="mt-2"
                            />
                        </div>
                    </div>
                </div>
            </form>
            <form action="" v-else>
                <div v-for="(field, key) in rows" :key="key">
                    <div v-if="field.type === 'image' && field.edit">
                        <div class="py-2">
                            <div class="col-span-6 sm:col-span-4">
                                <!-- Profile Photo File Input -->
                                <input
                                    type="file"
                                    class="hidden"
                                    :ref="field.field"
                                    @change="updatePhotoPreview(field.field)"
                                />
                                <JetLabel
                                    :for="field.field"
                                    :value="field.label"
                                />
                                <!-- Current Profile Photo -->
                                <div class="mt-2" v-if="photoPreview[field.field]">
                                    <img
                                        :src="photoPreview[field.field]"
                                        class="object-cover w-20 h-20 rounded-full"
                                    />
                                </div>

                                <div class="mt-2" v-else>
                                    <div v-if="form[field.field]">
                                        <img
                                            :src="form[field.field]"
                                            class="object-cover w-20 h-20 rounded-full"
                                        />
                                    </div>
                                </div>

                                <jet-secondary-button
                                    class="mt-2 mr-2"
                                    type="button"
                                    @click.prevent="selectNewPhoto(field.field)"
                                >
                                    Select A New Photo
                                </jet-secondary-button>

                                <progress
                                    v-if="form.progress"
                                    :value="form.progress.percentage"
                                    max="100"
                                >
                                    {{ form.progress.percentage }}%
                                </progress>

                                <JetInputError
                                    :message="errors[field.field]"
                                    class="mt-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="py-2" v-if="field.edit">
                            <JetLabel :for="field.field" :value="field.label" />
                            <JetInput
                                :id="field.field"
                                v-model="form[field.field]"
                                :type="field.type"
                                class="block w-full mt-1"
                                autofocus
                            />
                            <JetInputError
                                :message="errors[field.field]"
                                class="mt-2"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </template>

        <template #footer>
            <button
                v-if="!edit"
                @click.prevent="saveRecord()"
                class="inline-flex items-center justify-center px-4 mr-2 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action"
            >
                Save
            </button>
            <button
                v-else
                @click.prevent="updateRecord(form.id)"
                class="inline-flex items-center justify-center px-4 mr-2 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action"
            >
                Update
            </button>
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
        edit: Boolean,
        errors: Object,
        item: Object,
        title: String,
        url: String,
        rows: Array,
    },
    watch: {
        show(newValue, oldValue) {
            this.showModal = newValue;
        },
        item(newValue, oldValue) {
            this.form = newValue;
        },
    },
    data() {
        return {
            showModal: false,
            form: this.$inertia.form(this.item),
            photoPreview: {},
        };
    },
    methods: {
        close() {
            this.$emit("close", this.showModal);
        },
        success(id = null) {
            if (this.edit) {
                this.$emit("update", { form: this.form, id: id });
            } else {
                this.$emit("create", this.form);
            }
        },
        updatePhotoPreview(field) {
            const photo = this.$refs[field][0].files[0];

            if (!photo) return;

            const reader = new FileReader();

            reader.onload = (e) => {
                this.photoPreview[field] = e.target.result;
                this.form[field] = photo;
            };

            reader.readAsDataURL(photo);
        },
        selectNewPhoto(field) {
            this.$refs[field][0].click();
        },
        saveRecord() {
            this.form.submit("post", this.route(this.url + ".store"), {
                preserveScroll: true,
                onSuccess: () => {
                    this.form.reset();
                    this.$emit("success");
                },
            });
        },
        updateRecord(id) {
            this.form.submit("post", this.route(this.url + ".update", id), {
                preserveScroll: true,
                forceFormData: true,
                onSuccess: () => {
                    this.form.reset();
                    this.$emit("success");
                },
            });
        },
    },
});
</script>
