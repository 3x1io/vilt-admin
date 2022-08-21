<template>
    <div class="py-2 px-2" v-if="view === 'input'">
        <label v-if="row.name" :for="row.name" class="text-sm font-normal capitalize">{{
                row.label ? row.label : row.name
            }}
            <span v-if="row.required" class="text-red-600 text-bold">*</span>
        </label>
        <textarea
            rows="5"
            :name="row.name"
            :id="row.named"
            :disabled="row.disabled"
            v-model="value"
            :placeholder="row.placeholder"
            @input="$emit('update:modelValue', value)"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
        ></textarea>
        <small v-if="row.hint" class="text-gray-400 mx-2">{{row.hint}}</small>
        <JetInputError :message="message" class="mt-2" />
    </div>

    <div class="flex justify-between my-4" v-if="view === 'view'">
        <div>
            <p class="font-bold">{{ row.label ? row.label : row.name }}</p>
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
        if(this.row.default){
            this.value = this.row.default
        }
        if(this.modelValue){
            this.value = this.modelValue
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
