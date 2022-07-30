<template>
    <JetDialogModal :show="showModal" @end="close">
        <template #title>
            {{ title }}
        </template>

        <template #content>
            <form
                class="grid grid-cols-1 gap-3 lg:grid-cols-1"
                action=""
                v-if="!edit"
            >
                <slot name="create-top"></slot>
                <div
                    v-for="(field, key) in rowFilterCreate"
                    :key="key"
                    class=""
                >
                    <div
                        v-if="
                            (field.type === 'image' || field.type === 'file') &&
                            field.create
                        "
                    >
                        <div>
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
                    <div
                        v-else-if="field.type === 'switch' && field.create"
                        class="px-6"
                    >
                        <div>
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
                    <div
                        v-else-if="
                            (field.type === 'schema' ||
                                field.type === 'schema-area') &&
                            field.create
                        "
                    >
                        <div>
                            <div class="">
                                <JetLabel
                                    :for="field.field"
                                    :value="field.label"
                                />
                                <div
                                    class="px-4 py-4 mt-2 border rounded-default"
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
                                            v-if="field.type === 'schema'"
                                            :id="input.field"
                                            v-model="
                                                form[field.field][input.field]
                                            "
                                            :type="input.type"
                                            class="block w-full mt-1"
                                            autofocus
                                        />
                                        <textarea
                                            v-else
                                            :id="input.field"
                                            v-model="
                                                form[field.field][input.field]
                                            "
                                            rows="5"
                                            class="w-full p-4 text-sm border-gray-200 shadow-sm rounded-default"
                                            autofocus
                                        >
                                        </textarea>
                                    </div>
                                </div>

                                <JetInputError
                                    :message="errors[field.field]"
                                    class="mt-2"
                                />
                            </div>
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
                        <div>
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
                        <div>
                            <ViltSelect
                                :type="field.type"
                                :id="field.field"
                                v-model="form[field.field]"
                                :options="field.options"
                                :multi="field.multi"
                                :model="field.model"
                                :track_by_id="field.track_by_id"
                                :disabled="
                                    field.disabled === 'create' ? true : false
                                "
                                :track_by_name="field.track_by_name"
                                :label="field.label"
                                :message="errors[field.field]"
                            />
                        </div>
                    </div>
                    <div v-else-if="field.type === 'textarea' && field.create">
                        <div class="py-2" v-if="field.create">
                            <div>
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
                    <div v-else-if="field.type === 'rich' && field.create">
                        <div class="py-2" v-if="field.create">
                            <div>
                                <ViltRich
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="errors[field.field]"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else-if="field.type === 'tel' && field.create">
                        <div class="py-2" v-if="field.create">
                            <div>
                                <ViltTel
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="errors[field.field]"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else-if="field.type === 'trans' && field.create">
                        <div>
                            <ViltText
                                :label="field.label"
                                :id="field.field"
                                v-model="form[field.field]"
                                type="text"
                                :className="field.className"
                                :placeholder="field.placeholder"
                                :message="errors[field.field]"
                                :disabled="
                                    field.disabled === 'create' ? true : false
                                "
                                autofocus
                            />
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="field.create">
                            <div>
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
            <form
                class="grid grid-cols-1 gap-3 md:grid-cols-1"
                action=""
                v-else
            >
                <slot name="edit-top"></slot>
                <div v-for="(field, key) in rowFilterEdit" :key="key" class="">
                    <div
                        v-if="
                            (field.type === 'image' || field.type === 'file') &&
                            field.edit
                        "
                    >
                        <div>
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
                    <div
                        v-else-if="field.type === 'switch' && field.edit"
                        class="px-6"
                    >
                        <div>
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
                    <div
                        v-else-if="
                            (field.type === 'schema' ||
                                field.type === 'schema-area') &&
                            field.edit
                        "
                    >
                        <div>
                            <div class="px-4">
                                <JetLabel
                                    :for="field.field"
                                    :value="field.label"
                                />
                                <div
                                    class="px-4 pb-3 mt-2 border rounded-default"
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
                                            v-if="field.type === 'schema'"
                                            :id="input.field"
                                            v-model="
                                                form[field.field][input.field]
                                            "
                                            :type="input.type"
                                            class="block w-full mt-1"
                                            autofocus
                                        />
                                        <textarea
                                            v-else
                                            :id="input.field"
                                            v-model="
                                                form[field.field][input.field]
                                            "
                                            rows="5"
                                            class="w-full p-4 text-sm border-gray-200 shadow-sm rounded-default"
                                            autofocus
                                        >
                                        </textarea>
                                    </div>
                                </div>

                                <JetInputError
                                    :message="errors[field.field]"
                                    class="mt-2"
                                />
                            </div>
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
                        <div>
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
                        <div>
                            <ViltSelect
                                :type="field.type"
                                :id="field.field"
                                :model="field.model"
                                v-model="form[field.field]"
                                :options="field.options"
                                :multi="field.multi"
                                :track_by_id="field.track_by_id"
                                :track_by_name="field.track_by_name"
                                :disabled="
                                    field.disabled === 'edit' ? true : false
                                "
                                :label="field.label"
                                :message="errors[field.field]"
                            />
                        </div>
                    </div>
                    <div v-else-if="field.type === 'textarea' && field.edit">
                        <div class="py-2" v-if="field.edit">
                            <div>
                                <ViltTextArea
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="errors[field.field]"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else-if="field.type === 'rich' && field.edit">
                        <div class="py-2" v-if="field.edit">
                            <div>
                                <ViltRich
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="errors[field.field]"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else-if="field.type === 'tel' && field.edit">
                        <div class="py-2" v-if="field.edit">
                            <div>
                                <ViltTel
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="errors[field.field]"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else-if="field.type === 'trans' && field.edit">
                        <div>
                            <ViltText
                                :label="field.label"
                                :id="field.field"
                                v-model="form[field.field]"
                                type="text"
                                :className="field.className"
                                :placeholder="field.placeholder"
                                :message="errors[field.field]"
                                :disabled="
                                    field.disabled === 'edit' ? true : false
                                "
                                autofocus
                            />
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="field.edit">
                            <div>
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
                                        field.disabled === 'edit' ? true : false
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
                                        field.disabled === 'edit' ? true : false
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
            <slot name="footer-button"></slot>

            <div class="flex justify-start gap-2">
                <JetButton
                    :disabled="isDisabledBtn"
                    v-if="!edit"
                    @click.prevent="saveRecord()"
                >
                    {{ trans("global.update") }}
                </JetButton>
                <JetButton
                    :disabled="isDisabledBtn"
                    v-else
                    @click.prevent="updateRecord(form.id)"
                >
                    {{ trans("global.update") }}
                </JetButton>
                <JetSecondaryButton @click="close">
                    {{ trans("global.close") }}
                </JetSecondaryButton>
            </div>
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
import ViltRich from "@/Components/Base/Rows/ViltRich.vue";
import ViltTel from "@/Components/Base/Rows/ViltTel.vue";

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
        ViltRich,
        ViltTel,
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
    computed: {
        lang() {
            return this.$page.props.data.trans;
        },
        rowFilterCreate() {
            let rows = this.$props.rows;
            let rowValue = [];
            for (let i = 0; i < rows.length; i++) {
                if (
                    this.arraysEqual(
                        rows[i].reactive,
                        this.form[rows[i].row]
                    ) &&
                    rows[i].create
                ) {
                    rowValue.push(rows[i]);
                } else if (!rows[i].reactive && rows[i].create) {
                    rowValue.push(rows[i]);
                }
            }

            return rowValue;
        },
        rowFilterEdit() {
            let rows = this.$props.rows;
            let rowValue = [];
            for (let i = 0; i < rows.length; i++) {
                if (
                    this.arraysEqual(
                        rows[i].reactive,
                        this.form[rows[i].row]
                    ) &&
                    rows[i].edit
                ) {
                    rowValue.push(rows[i]);
                } else if (!rows[i].reactive && rows[i].edit) {
                    rowValue.push(rows[i]);
                }
            }

            return rowValue;
        },
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
            isDisabledBtn: false,
            showModal: false,
            form: this.$inertia.form(this.item),
        };
    },
    mounted() {
        this.$inertia.on("start", () => (this.isDisabledBtn = true));
        this.$inertia.on("finish", () => (this.isDisabledBtn = false));
    },
    methods: {
        trans(key) {
            return this.lang[key] ? this.lang[key] : key;
        },
        close() {
            this.$emit("close", this.showModal);
        },
        success(id = null) {
            if (this.edit) {
                this.$emit("update", { form: thitrues.form, id: id });
                this.isDisabledBtn = false;
            } else {
                this.$emit("create", this.form);
                this.isDisabledBtn = false;
            }
        },
        saveRecord() {
            this.form.submit("post", this.route(this.url + ".store"), {
                preserveScroll: true,
                onSuccess: () => {
                    this.form.reset();
                    this.$emit("success");
                    this.isDisabledBtn = false;
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
                    this.isDisabledBtn = false;
                },
            });
        },
        arraysEqual(a, b) {
            return JSON.stringify(a) == JSON.stringify(b);
        },
    },
});
</script>
