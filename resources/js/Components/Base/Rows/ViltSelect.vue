<template>
    <div class="py-2" v-if="view === 'input'">
        <label v-if="id" :for="id" class="text-sm font-normal">{{
            label
        }}</label>
        <multiselect
            v-if="type === 'select-value'"
            v-model="value"
            :options="options"
            :multiple="multi"
            :track-by="track_by_id"
            :label="track_by_name"
            :disabled="disabled"
            :class="className"
        />
        <multiselect
            v-else-if="type === 'select'"
            v-model="value"
            :options="options"
            :multiple="multi"
            :disabled="disabled"
            :class="className"
        />
        <multiselect
            v-else-if="type === 'hasOne' || type === 'relation'"
            v-model="value"
            :options="records"
            :multiple="multi"
            :track-by="track_by_id"
            :label="track_by_name"
            :disabled="disabled"
            :class="className"
            :loading="isLoading"
            :searchable="true"
            @search-change="asyncFind"
        />
        <JetInputError :message="message" class="mt-2" />
    </div>
</template>

<script>
import { defineComponent } from "vue";
import JetInputError from "@/Jetstream/InputError.vue";
import Multiselect from "@suadelabs/vue3-multiselect";

export default defineComponent({
    components: {
        JetInputError,
        Multiselect,
    },
    data() {
        return {
            value: "",
            records: [],
            isLoading: false,
        };
    },
    beforeUpdate() {
        if (this.default) {
            this.value = this.default;
        }
    },
    mounted() {
        let _this = this;
        if (this.modelValue) {
            if (this.type === "hasOne") {
                axios
                    .post(route("select"), {
                        model_type: this.model,
                        model_id: this.modelValue.id,
                    })
                    .then((response) => {
                        _this.value = response.data.data;
                        _this.isLoading = false;
                    });
            } else if (this.type === "relation" && this.multi === true) {
                let ids = [];
                for (let i = 0; i < this.modelValue.length; i++) {
                    ids.push(this.modelValue[i].id);
                }
                axios
                    .post(route("select"), {
                        model_type: this.model,
                        model_id: ids,
                    })
                    .then((response) => {
                        _this.value = response.data.data;
                        _this.isLoading = false;
                    });
            } else {
                this.value = this.modelValue;
            }
        }
        this.isLoading = true;

        if (this.model !== null) {
            axios
                .post(route("select"), {
                    model_type: this.model,
                })
                .then((response) => {
                    this.records = response.data.data.data;
                    this.isLoading = false;
                });
        }
    },
    methods: {
        asyncFind(query, key = null) {
            this.isLoading = true;
            let _this = this;
            if (!key) {
                key = this.track_by_name;
            }
            axios
                .post(route("select"), {
                    model_type: this.model,
                    query: true,
                    key: key,
                    value: query,
                })
                .then((response) => {
                    _this.records = response.data.data.data;
                    _this.isLoading = false;
                });
        },
    },
    watch: {
        value(oldValue, newValue) {
            this.$emit("update:modelValue", this.value);
            this.$emit("change");
        },
    },
    props: {
        modelValue: {},
        default: {},
        model: {
            String,
            default: null,
        },
        view: {
            String,
            default: "input",
        },
        type: {
            String,
            default: "select",
        },
        label: {
            String,
            default: "Select",
        },
        id: {
            String,
        },
        message: {
            String,
        },
        disabled: {
            Boolean,
            default: false,
        },
        multi: {
            Boolean,
            default: false,
        },
        className: {
            String,
        },
        track_by_id: {
            String,
        },
        track_by_name: {
            String,
        },
        options: {
            Array,
            default: [],
        },
    },
});
</script>
