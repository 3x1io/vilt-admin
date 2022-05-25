<template>
    <JetDialogModal :show="showModal" @end="close">
        <template #title>
            {{ title }}
            <hr class="my-4" />
        </template>

        <template #content>
            <form action="" v-if="!edit">
                <div v-for="(field, key) in rows" :key="key">
                    <div v-if="field.type === 'image' && field.create">
                        <div
                            v-if="
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <ViltMedia
                                v-model="form[field.field]"
                                :disabled="
                                    field.disabled === 'create' ? true : false
                                "
                                :label="field.label"
                                :id="field.field"
                                :multi="field.multi"
                                :message="errors[field.field]"
                                :preview="field.preview"
                                :placeholder="field.placeholder"
                            />
                        </div>
                    </div>
                    <div v-else-if="field.type === 'switch' && field.create">
                        <div
                            v-if="
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <ViltSwitch
                                :label="field.label"
                                :name="field.field"
                                :id="field.field"
                                v-model="form[field.field]"
                                :message="errors[field.field]"
                                :disabled="
                                    field.disabled === 'create' ? true : false
                                "
                                :className="field.className"
                            />
                        </div>
                    </div>
                    <div v-else-if="field.type === 'schema' && field.create">
                        <div
                            v-if="
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <div
                                v-for="(input, index) in field.options"
                                :key="index"
                                class="mt-2"
                            >
                                <JetLabel
                                    :for="input.field"
                                    :value="input.label"
                                />
                                <JetInput
                                    :id="input.field"
                                    v-model="form[field.field][input.field]"
                                    :type="input.type"
                                    class="block w-full mt-1"
                                    autofocus
                                />
                            </div>
                            <JetInputError
                                :message="errors[field.field]"
                                class="mt-2"
                            />
                        </div>
                    </div>
                    <div
                        v-else-if="
                            (field.type === 'datetime' ||
                                field.type === 'time' ||
                                field.type === 'date') &&
                            field.create
                        "
                    >
                        <div
                            v-if="
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <ViltDate
                                :type="field.type"
                                :label="field.label"
                                :placeholder="field.placeholder"
                                :disabled="
                                    field.disabled === 'create' ? true : false
                                "
                                :message="errors[field.field]"
                                v-model="form[field.field]"
                                :className="field.className"
                                :multi="field.multi"
                            />
                        </div>
                    </div>
                    <div
                        v-else-if="
                            (field.type === 'relation' ||
                                field.type === 'select-value' ||
                                field.type === 'hasOne' ||
                                field.type === 'select') &&
                            field.create
                        "
                    >
                        <div
                            v-if="
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <ViltSelect
                                :type="field.type"
                                :id="field.field"
                                v-model="form[field.field]"
                                :options="field.options"
                                :multi="field.multi"
                                :track_by_id="field.track_by_id"
                                :disabled="field.disabled === 'create' ? true : false"
                                :track_by_name="field.track_by_name"
                                :label="field.label"
                                :message="errors[field.field]"
                            />
                        </div>
                    </div>
                    <div v-else-if="field.type === 'textarea' && field.create">
                        <div class="py-2" v-if="field.create">
                            <div
                                v-if="
                                    (field.reactive && form[field.row]) ||
                                    !field.reactive
                                "
                            >
                                <ViltTextArea
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="errors[field.field]"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="field.create">
                            <div
                                v-if="
                                    (field.reactive && form[field.row]) ||
                                    !field.reactive
                                "
                            >
                                <ViltText
                                    v-if="field.type === 'icon'"
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    type="text"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="errors[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    autofocus
                                />
                                <ViltText
                                    v-else
                                    :id="field.field"
                                    :label="field.label"
                                    v-model="form[field.field]"
                                    :type="field.type"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="errors[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    autofocus
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <slot name="create"></slot>
            </form>
            <form action="" v-else>
                <div v-for="(field, key) in rows" :key="key">
                    <div v-if="field.type === 'image' && field.edit">
                        <div
                            v-if="
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <ViltMedia
                                v-model="form[field.field]"
                                :disabled="
                                    field.disabled === 'edit' ? true : false
                                "
                                :label="field.label"
                                :id="field.field"
                                :multi="field.multi"
                                :message="errors[field.field]"
                                :preview="field.preview"
                                :placeholder="field.placeholder"
                            />
                        </div>
                    </div>
                    <div v-else-if="field.type === 'switch' && field.edit">
                        <div
                            v-if="
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <ViltSwitch
                                :label="field.label"
                                :name="field.field"
                                :id="field.field"
                                v-model="form[field.field]"
                                :message="errors[field.field]"
                                :disabled="
                                    field.disabled === 'edit' ? true : false
                                "
                                :className="field.className"
                            />
                        </div>
                    </div>
                    <div v-else-if="field.type === 'schema' && field.edit">
                        <div
                            v-if="
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <div
                                v-for="(input, index) in field.options"
                                :key="index"
                                class="mt-2"
                            >
                                <JetLabel
                                    :for="input.field"
                                    :value="input.label"
                                />
                                <JetInput
                                    :id="input.field"
                                    v-model="form[field.field][input.field]"
                                    :type="input.type"
                                    class="block w-full mt-1"
                                    autofocus
                                />
                            </div>
                            <JetInputError
                                :message="errors[field.field]"
                                class="mt-2"
                            />
                        </div>
                    </div>
                    <div
                        v-else-if="
                            (field.type === 'datetime' ||
                                field.type === 'time' ||
                                field.type === 'date') &&
                            field.edit
                        "
                    >
                        <div
                            v-if="
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <ViltDate
                                :type="field.type"
                                :label="field.label"
                                :placeholder="field.placeholder"
                                :disabled="
                                    field.disabled === 'edit' ? true : false
                                "
                                :message="errors[field.field]"
                                v-model="form[field.field]"
                                :className="field.className"
                                :multi="field.multi"
                            />
                        </div>
                    </div>
                    <div
                        v-else-if="
                            (field.type === 'relation' ||
                                field.type === 'hasOne' ||
                                field.type === 'select-value' ||
                                field.type === 'select') &&
                            field.edit
                        "
                    >
                        <div
                            v-if="
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <ViltSelect
                                :type="field.type"
                                :id="field.field"
                                v-model="form[field.field]"
                                :options="field.options"
                                :multi="field.multi"
                                :track_by_id="field.track_by_id"
                                :track_by_name="field.track_by_name"
                                :disabled="field.disabled === 'edit' ? true : false"
                                :label="field.label"
                                :message="errors[field.field]"
                            />
                        </div>
                    </div>
                    <div v-else-if="field.type === 'textarea' && field.create">
                        <div class="py-2" v-if="field.edit">
                            <div
                                v-if="
                                    (field.reactive && form[field.row]) ||
                                    !field.reactive
                                "
                            >
                                <ViltTextArea
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="errors[field.field]"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'edit'
                                            ? true
                                            : false
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="field.edit">
                            <div
                                v-if="
                                    (field.reactive && form[field.row]) ||
                                    !field.reactive
                                "
                            >
                                <ViltText
                                    v-if="field.type === 'icon'"
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    type="text"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="errors[field.field]"
                                    :disabled="
                                        field.disabled === 'edit'
                                            ? true
                                            : false
                                    "
                                    autofocus
                                />
                                <ViltText
                                    v-else
                                    :id="field.field"
                                    :label="field.label"
                                    v-model="form[field.field]"
                                    :type="field.type"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="errors[field.field]"
                                    :disabled="
                                        field.disabled === 'edit'
                                            ? true
                                            : false
                                    "
                                    autofocus
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <slot name="edit"></slot>
            </form>
        </template>

        <template #footer>
            <button
                v-if="!edit"
                @click.prevent="saveRecord()"
                class="inline-flex items-center justify-center px-4 mr-2 font-normal tracking-tight text-white transition-colors border border-transparent rounded-lg shadow rtl:ml-2 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-main hover:bg-greenColor3 focus:bg-greenColor3 focus:ring-offset-greenColor3 filament-page-button-action"
            >
                Save
            </button>
            <button
                v-else
                @click.prevent="updateRecord(form.id)"
                class="inline-flex items-center justify-center px-4 mr-2 font-normal tracking-tight text-white transition-colors border border-transparent rounded-lg shadow rtl:ml-2 focus:outline-none filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-main hover:bg-bg-greenColor3 focus:bg-bg-greenColor3 filament-page-button-action"
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
import Multiselect from "@suadelabs/vue3-multiselect";
import Text from "@/Components/Base/Components/Text.vue";
import Switch from "@/Components/Base/Components/Switch.vue";
import Toggle from "@vueform/toggle";
import flatPickr from "vue-flatpickr-component";
import ViltMedia from "@/Components/Base/Rows/ViltMedia.vue";
import ViltText from "@/Components/Base/Rows/ViltText.vue";
import ViltSwitch from "@/Components/Base/Rows/ViltSwitch.vue";
import ViltDate from "@/Components/Base/Rows/ViltDate.vue";
import ViltSelect from "@/Components/Base/Rows/ViltSelect.vue";
import ViltTextArea from "@/Components/Base/Rows/ViltTextArea.vue";

export default defineComponent({
    components: {
        Link,
        JetDialogModal,
        JetSecondaryButton,
        JetButton,
        JetInput,
        JetInputError,
        JetLabel,
        Multiselect,
        Text,
        Switch,
        Toggle,
        flatPickr,
        ViltMedia,
        ViltText,
        ViltSwitch,
        ViltDate,
        ViltSelect,
        ViltTextArea,
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
