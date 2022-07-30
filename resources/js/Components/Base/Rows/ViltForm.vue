<template>
    <div>
        <div v-if="!edit">
            <div v-for="(field, key) in rows" :key="key">
                <div v-if="(field.type === 'image' || field.type === 'file') && field.create">
                    <div
                        v-if="
                            (field.reactive && form[field.row]) ||
                            !field.reactive
                        "
                    >
                        <ViltMedia
                            v-model="form[field.field]"
                            :default="field.default"
                            :disabled="
                                field.disabled === 'create' ? true : false
                            "
                            :label="field.label"
                            :id="field.field"
                            :multi="field.multi"
                            :message="errors[field.field]"
                            :preview="field.preview"
                            :placeholder="field.placeholder"
                            @update:modelValue="update"
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
                            :default="field.default"
                            :label="field.label"
                            :name="field.field"
                            :id="field.field"
                            v-model="form[field.field]"
                            :message="errors[field.field]"
                            :disabled="
                                field.disabled === 'create' ? true : false
                            "
                            :className="field.className"
                            @update:modelValue="update"
                        />
                    </div>
                </div>
                <div v-else-if="field.type === 'repeater' && field.create">
                    <div
                        v-if="
                            (field.reactive && form[field.row]) ||
                            !field.reactive
                        "
                    >
                        <ViltRepeater
                            :default="field.default"
                            :label="field.label"
                            :name="field.field"
                            :id="field.field"
                            :options="field.options"
                            v-model="form[field.field]"
                            :message="errors[field.field]"
                            :disabled="
                                field.disabled === 'create' ? true : false
                            "
                            :className="field.className"
                            @update:modelValue="update"
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
                            <label
                                v-if="input.field"
                                :for="input.field"
                                class="text-sm font-medium"
                                >{{ input.label }}</label
                            >
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
                            :default="field.default"
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
                            (field.reactive && form[field.row]) ||
                            !field.reactive
                        "
                    >
                        <ViltSelect
                            :default="field.default"
                            :type="field.type"
                            :id="field.field"
                            v-model="form[field.field]"
                            :options="field.options"
                            :multi="field.multi"
                            :track_by_id="field.track_by_id"
                            :disabled="
                                field.disabled === 'create' ? true : false
                            "
                            :track_by_name="field.track_by_name"
                            :label="field.label"
                            :message="errors[field.field]"
                            @update:modelValue="update"
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
                                :default="field.default"
                                :label="field.label"
                                :id="field.field"
                                v-model="form[field.field]"
                                :message="errors[field.field]"
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
                                (field.reactive && form[field.row]) ||
                                !field.reactive
                            "
                        >
                            <ViltText
                                v-if="field.type === 'icon'"
                                :default="field.default"
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
                                @update:modelValue="update"
                            />
                            <ViltText
                                v-else
                                :id="field.field"
                                :default="field.default"
                                :label="field.label"
                                v-model="form[field.field]"
                                :type="field.type"
                                :className="field.className"
                                :placeholder="field.placeholder"
                                :message="errors[field.field]"
                                :disabled="
                                    field.disabled === 'create' ? true : false
                                "
                                @update:modelValue="update"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <slot name="create"></slot>
        </div>
        <div v-else>
            <div v-for="(field, key) in rows" :key="key">
                <div v-if="(field.type === 'image' || field.type === 'file') && field.edit">
                    <div
                        v-if="
                            (field.reactive && form[field.row]) ||
                            !field.reactive
                        "
                    >
                        <ViltMedia
                            v-model="form[field.field]"
                            :default="field.default"
                            :disabled="
                                field.disabled === 'edit' ? true : false
                            "
                            :label="field.label"
                            :id="field.field"
                            :multi="field.multi"
                            :message="errors[field.field]"
                            :preview="field.preview"
                            :placeholder="field.placeholder"
                            @update:modelValue="update"
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
                            :default="field.default"
                            :label="field.label"
                            :name="field.field"
                            :id="field.field"
                            v-model="form[field.field]"
                            :message="errors[field.field]"
                            :disabled="
                                field.disabled === 'edit' ? true : false
                            "
                            :className="field.className"
                            @update:modelValue="update"
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
                            <label
                                v-if="input.field"
                                :for="input.field"
                                class="text-sm font-medium"
                                >{{ input.label }}</label
                            >
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
                            :default="field.default"
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
                            @update:modelValue="update"
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
                            :default="field.default"
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
                            @update:modelValue="update"
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
                                :default="field.default"
                                :label="field.label"
                                :id="field.field"
                                v-model="form[field.field]"
                                :message="errors[field.field]"
                                :className="field.className"
                                :placeholder="field.placeholder"
                                :disabled="
                                    field.disabled === 'edit' ? true : false
                                "
                                @update:modelValue="update"
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
                                :default="field.default"
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
                                @update:modelValue="update"
                            />
                            <ViltText
                                v-else
                                :default="field.default"
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
                                @update:modelValue="update"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <slot name="edit"></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import JetInputError from "@/Jetstream/InputError.vue";
import ViltMedia from "@/Components/Base/Rows/ViltMedia.vue";
import ViltText from "@/Components/Base/Rows/ViltText.vue";
import ViltSwitch from "@/Components/Base/Rows/ViltSwitch.vue";
import ViltDate from "@/Components/Base/Rows/ViltDate.vue";
import ViltSelect from "@/Components/Base/Rows/ViltSelect.vue";
import ViltTextArea from "@/Components/Base/Rows/ViltTextArea.vue";
import ViltRepeater from "@/Components/Base/Rows/ViltRepeater.vue";

export default defineComponent({
    components: {
        JetInputError,
        ViltMedia,
        ViltText,
        ViltSwitch,
        ViltDate,
        ViltSelect,
        ViltTextArea,
        ViltRepeater,
    },
    data() {
        return {
            form: {},
        };
    },
    props: {
        modelValue: {},
        rows: {
            Array,
            default: [],
        },
        errors: {
            Object,
            default: {},
        },
        edit: {
            Boolean,
            default: false,
        },
    },
    computed:{
        formRows(){
            let rows = this.$props.rows;
            let getRows = {};
            for(let i=0; i<rows.length; i++){
                getRows[rows[i].field] = rows[i].default;
            }

            return getRows;
        }
    },
    mounted(){
        this.form = this.$inertia.form(this.formRows);
    },
    methods: {
        update(){
            this.$emit('update:modelValue',this.$inertia.form(this.form))
        }
    }
});
</script>
