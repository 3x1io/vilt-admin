<template>
    <div class="mt-2" v-if="view === 'input'">
        <label v-if="id" :for="id" class="text-sm font-medium">{{
            label
        }}</label>
        <br>
        <Toggle
            :name="id"
            :id="id"
            v-model="value"
            @change="$emit('update:modelValue', value)"
            :class="className"
            :disabled="disabled"
        />
        <JetInputError :message="message" class="mt-2" />
    </div>
    <div v-if="view === 'view'" class="flex justify-between my-4">
        <div>
            <p class="font-bold">{{ label }}</p>
        </div>
        <div>
            <div
                class="w-10 h-10 p-2 text-lg text-center text-white bg-green-500 rounded-full"
                v-if="modelValue == 1"
            >
                <i class="bx bx-check"></i>
            </div>
            <div
                class="w-10 h-10 p-2 text-lg text-center text-white rounded-full bg-danger-500"
                v-else
            >
                <i class="bx bx-x"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import Toggle from "@vueform/toggle";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";

export default defineComponent({
    components: {
        Toggle,
        JetInputError,
        JetLabel,
    },
    data() {
        return {
            value: false
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
    created() {
        this.value = this.$props.modelValue;
    },
    props: {
        modelValue: {
            Boolean,
            default: false,
        },
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
});
</script>
