<template>
    <div class="py-2" v-if="view === 'input'">
        <label v-if="id" :for="id" class="text-sm font-normal">{{
            label
        }}</label>
        <VueTelInput
            :disabled="disabled"
            v-model="value"
            @input="$emit('update:modelValue', value)"
            :class="className"
            :inputOptions="{
                placeholder: placeholder,
                name: id,
                id: id,
                styleClasses: 'h-10 border-gray-200 rounded-lg',
            }"
        />
        <JetInputError :message="message" class="mt-2" />
    </div>
    <div
        class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"
        v-if="view === 'view'"
    >
        <div>
            <p class="font-normals">{{ label }}</p>
        </div>
        <div>
            <p class="bg-main-500 text-main-200 py-2 px-2">{{ modelValue }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import JetInputError from "@/Jetstream/InputError.vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

export default defineComponent({
    components: {
        JetInputError,
        VueTelInput,
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
