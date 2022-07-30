<template>
    <div class="py-2" v-if="view === 'input'">
        <label v-if="id" :for="id" class="text-sm font-normal">{{
            label
        }}</label>
        <input
            :type="type"
            :name="id"
            :id="id"
            :disabled="disabled"
            :value="modelValue"
            v-model="value"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', value)"
            class="w-full h-10 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            :class="className"
        />
        <JetInputError :message="message" class="mt-2" />
    </div>
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
import URL from "vue-weblineindia-url";

export default defineComponent({
    components: {
        JetInputError,
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
        if (this.default) {
            this.value = this.default;
        }
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
            default: "text",
        },
        label: {
            String,
            default: "Text",
        },
        id: {
            String,
        },
        message: {
            String,
        },
        placeholder: {
            String,
            default: "Text",
        },
        disabled: {
            Boolean,
            default: false,
        },
        className: {
            String,
        },
    },
});
</script>
