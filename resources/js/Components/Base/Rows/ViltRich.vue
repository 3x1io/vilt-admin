<template>
    <div class="py-2" v-if="view === 'input'">
        <label v-if="id" :for="id" class="text-sm font-normal">{{
            label
        }}</label>
        <QuillEditor
            :name="id"
            :id="id"
            theme="snow"
            v-model:content="value"
            @textChange="$emit('update:modelValue', value)"
            :placeholder="placeholder"
            contentType="html"
            :enable="disabled"
            toolbar="full"
        />
        <JetInputError :message="message" class="mt-2" />
    </div>
    <div class="flex justify-between my-4" v-if="view === 'view'">
        <div>
            <p class="font-bold">{{ label }}</p>
        </div>
        <div>
            <p v-html="modelValue"></p>
        </div>
    </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import JetInputError from "@/Jetstream/InputError.vue";
import BlotFormatter from "quill-blot-formatter";

export default {
    components: {
        JetInputError,
        QuillEditor,
    },
    data() {
        return {
            value: "",
        };
    },
    created() {
        if (this.modelValue) {
            this.value = this.modelValue;
        }
    },
    mounted() {
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
    },
};
</script>
