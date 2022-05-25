<template>
    <div class="py-2" v-if="view === 'input'">
        <label v-if="id" :for="id" class="text-sm font-medium">{{
            label
        }}</label>

        <JetInputError :message="message" class="mt-2" />
    </div>
    <div
        class="p-4 my-4 border rounded-lg"
        v-for="(value, index) in main"
        :key="index"
    >
        <div class="flex justify-end">
            <button @click.prevent="removeItem(value)" class="text-danger-500">
                <i class="bx bx-trash"></i>
            </button>
        </div>
        <div v-for="(field, key) in options" :key="key">
            <div v-if="field.type === 'image' && field.create">
                <div
                    v-if="
                        (field.reactive && value[field.row]) || !field.reactive
                    "
                >
                    <ViltMedia
                        v-model="value[field.field]"
                        :default="field.default"
                        :disabled="field.disabled === 'create' ? true : false"
                        :label="field.label"
                        :id="field.field + '_' + index"
                        :multi="field.multi"
                        :preview="field.preview"
                        :placeholder="field.placeholder"
                        @update:modelValue="update"
                    />
                </div>
            </div>
            <div v-else-if="field.type === 'switch' && field.create">
                <div
                    v-if="
                        (field.reactive && value[field.row]) || !field.reactive
                    "
                >
                    <ViltSwitch
                        :default="field.default"
                        :label="field.label"
                        :name="field.field"
                        :id="field.field + '_' + index"
                        v-model="value[field.field]"
                        :disabled="field.disabled === 'create' ? true : false"
                        :className="field.className"
                        @update:modelValue="update"
                    />
                </div>
            </div>
            <div v-else-if="field.type === 'repeater' && field.create">
                <div
                    v-if="
                        (field.reactive && value[field.row]) || !field.reactive
                    "
                >
                    <ViltRepeater
                        :default="field.default"
                        :label="field.label"
                        :name="field.field"
                        :id="field.field + '_' + index"
                        :options="field.options"
                        v-model="value[field.field]"
                        :disabled="field.disabled === 'create' ? true : false"
                        :className="field.className"
                        @update:modelValue="update"
                    />
                </div>
            </div>
            <div v-else-if="field.type === 'schema' && field.create">
                <div
                    v-if="
                        (field.reactive && value[field.row]) || !field.reactive
                    "
                >
                    <div
                        v-for="(input, index) in field.options"
                        :key="index"
                        class="mt-2"
                    >
                        <label
                            v-if="input.field"
                            :for="input.field"
                            class="text-sm font-medium"
                            >{{ input.label }}</label
                        >
                        <JetInput
                            :id="input.field"
                            v-model="value[field.field][input.field]"
                            :type="input.type"
                            class="block w-full mt-1"
                            autofocus
                        />
                    </div>
                    <JetInputError class="mt-2" />
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
                        (field.reactive && value[field.row]) || !field.reactive
                    "
                >
                    <ViltDate
                        :default="field.default"
                        :type="field.type"
                        :label="field.label"
                        :placeholder="field.placeholder"
                        :disabled="field.disabled === 'create' ? true : false"
                        v-model="value[field.field]"
                        :className="field.className"
                        :multi="field.multi"
                        @update:modelValue="update"
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
                        (field.reactive && value[field.row]) || !field.reactive
                    "
                >
                    <ViltSelect
                        :default="field.default"
                        :type="field.type"
                        :id="field.field + '_' + index"
                        v-model="value[field.field]"
                        :options="field.options"
                        :multi="field.multi"
                        :track_by_id="field.track_by_id"
                        :disabled="field.disabled === 'create' ? true : false"
                        :track_by_name="field.track_by_name"
                        :label="field.label"
                        @update:modelValue="update"
                    />
                </div>
            </div>
            <div v-else-if="field.type === 'textarea' && field.create">
                <div class="py-2" v-if="field.create">
                    <div
                        v-if="
                            (field.reactive && value[field.row]) ||
                            !field.reactive
                        "
                    >
                        <ViltTextArea
                            :default="field.default"
                            :label="field.label"
                            :id="field.field + '_' + index"
                            v-model="value[field.field]"
                            :className="field.className"
                            :placeholder="field.placeholder"
                            :disabled="
                                field.disabled === 'create' ? true : false
                            "
                            @update:modelValue="update"
                        />
                    </div>
                </div>
            </div>
            <div v-else>
                <div v-if="field.create">
                    <div
                        v-if="
                            (field.reactive && value[field.row]) ||
                            !field.reactive
                        "
                    >
                        <ViltText
                            v-if="field.type === 'icon'"
                            :default="field.default"
                            :label="field.label"
                            :id="field.field + '_' + index"
                            v-model="value[field.field]"
                            type="text"
                            :className="field.className"
                            :placeholder="field.placeholder"
                            :disabled="
                                field.disabled === 'create' ? true : false
                            "
                            @update:modelValue="update"
                        />
                        <ViltText
                            v-else
                            :id="field.field + '_' + index"
                            :default="field.default"
                            :label="field.label"
                            v-model="value[field.field]"
                            :type="field.type"
                            :className="field.className"
                            :placeholder="field.placeholder"
                            :disabled="
                                field.disabled === 'create' ? true : false
                            "
                            @update:modelValue="update"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button
        @click.prevent="addItem()"
        class="inline-flex items-center justify-center px-4 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action"
    >
        Add New Item
    </button>
    <div class="flex justify-between my-4" v-if="view === 'view'">
        <div>
            <p class="font-bold">{{ label }}</p>
        </div>
        <div>
            <p>{{ modelValue }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import JetInputError from "@/Jetstream/InputError.vue";
import ViltText from "@/Components/Base/Rows/ViltText.vue";
import ViltSwitch from "@/Components/Base/Rows/ViltSwitch.vue";
import ViltDate from "@/Components/Base/Rows/ViltDate.vue";
import ViltSelect from "@/Components/Base/Rows/ViltSelect.vue";
import ViltTextArea from "@/Components/Base/Rows/ViltTextArea.vue";

export default defineComponent({
    components: {
        JetInputError,
        ViltText,
        ViltSwitch,
        ViltDate,
        ViltSelect,
        ViltTextArea,
    },
    data() {
        return {
            main: [{}],
        };
    },
    mounted() {
        if (this.default) {
            this.main = this.default;
        }
        if (this.modelValue) {
            this.main = this.modelValue;
        }
    },
    props: {
        modelValue: {},
        default: {},
        view: {
            String,
            default: "input",
        },
        options: {
            Array,
            default: [],
        },
        label: {
            String,
            default: "Text",
        },
        id: {
            String,
        },
        name: {
            String,
        },
        message: {
            String,
        },
        disabled: {
            Boolean,
            default: false,
        },
        className: {
            String,
        },
    },
    methods: {
        addItem() {
            this.main.push({});
            this.$emit("update:modelValue", this.main);
        },
        removeItem(value) {
            this.main.splice(this.main.indexOf(value), 1);
            this.$emit("update:modelValue", this.main);
        },
        update() {
            this.$emit("update:modelValue", this.main);
        },
    },
});
</script>
