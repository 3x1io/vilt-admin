<template>
    <div class="py-2 px-2" v-if="view === 'input'">
        <label v-if="row.name" :for="row.name" class="text-sm font-normal capitalize">{{
                row.label ? row.label : row.name
            }}
            <span v-if="row.required" class="text-red-600 text-bold">*</span>
        </label>
        <br>
        <VSwatches v-model="value" show-fallback fallback-input-type="color" popover-x="left" :disabled="row.disabled" @input="$emit('update:modelValue', value)"></VSwatches>
        <small v-if="row.hint" class="text-gray-400 mx-2">{{row.hint}}</small>
        <JetInputError :message="message" class="mt-2" />
    </div>
    <div
        class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"
        v-if="view === 'view'"
    >
        <div>
            <p class="font-normals">{{ row.label ? row.label : row.name }}</p>
        </div>
        <div>
            <p class="bg-main-500 text-main-200 py-2 px-2">{{ modelValue }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import JetInputError from "@/Jetstream/InputError.vue";
import VSwatches from "vue3-swatches";

// Import the styles too, typically in App.vue or main.js
import 'vue-swatches/dist/vue-swatches.css'

export default defineComponent({
    components: {
        JetInputError,
        VSwatches,
    },
    data() {
        return {
            value: "",
        };
    },
    mounted() {
        if (this.modelValue) {
            this.value = this.modelValue;
        }
        if (this.row.default) {
            this.value = this.row.default;
        }
    },
    props: {
        modelValue: {},
        row: {
            Object,
            default: {},
        },
        view: {
            String,
            default: "input",
        },
        message: {
            String,
            default: null,
        },
    },
});
</script>
