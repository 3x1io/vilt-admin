<template>
    <div class="py-2" v-if="view === 'input'">
        <label v-if="id" :for="id" class="text-sm font-normal">{{
            label
        }}</label>
        <multiselect
            v-if="type === 'select-value'"
            v-model="value"
            @select="onSelect"
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
            @select="onSelect"
            :options="options"
            :multiple="multi"
            :disabled="disabled"
            :class="className"
        />
        <multiselect
            v-else
            v-model="value"
            @select="onSelect"
            :options="options"
            :multiple="multi"
            :track-by="track_by_id"
            :label="track_by_name"
            :disabled="disabled"
            :class="className"
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
        };
    },
    mounted(){
        if(this.default){
            this.value = this.default
        }
        if(this.modelValue){
            this.value = this.modelValue
        }
    },
    created() {
        this.value = this.$props.modelValue;
    },
    props: {
        modelValue: {},
        default: {},
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
    methods: {
        onSelect(select){
            this.$emit('update:modelValue', select)
        }
    }
});
</script>