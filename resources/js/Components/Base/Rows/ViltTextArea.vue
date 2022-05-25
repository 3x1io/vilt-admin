<template>
    <div class="py-2" v-if="view === 'input'">
        <label v-if="id" :for="id" class="text-sm font-normal">{{
            label
        }}</label>
        <textarea
            rows="5"
            :name="id"
            :id="id"
            :disabled="disabled"
            v-model="value"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', value)"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
        ></textarea>
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

export default defineComponent({
    components: {
        JetInputError,
    },
    data(){
        return {
            value: ""
        }
    },
    mounted(){
        if(this.default){
            this.value = this.default
        }
        if(this.modelValue){
            this.value = this.modelValue
        }
    },
    props: {
        modelValue: {},
        default: {},
        view: {
            String,
            default: "input",
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
