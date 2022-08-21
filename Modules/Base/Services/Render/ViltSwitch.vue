<template>
    <div class="py-2 px-2" v-if="view === 'input'">
        <label v-if="row.name" :for="row.name" class="text-sm font-normal capitalize">{{
                row.label ? row.label : row.name
            }}
            <span v-if="row.required" class="text-red-600 text-bold">*</span>
        </label>
        <br>
        <Toggle
            :name="row.name"
            :id="row.name"
            v-model="value"
            @change="$emit('update:modelValue', value)"
            :classes="{
              container: 'inline-block rounded-full outline-none focus:ring focus:ring-'+row.color+'-500 focus:ring-opacity-30',
              toggle: 'flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
              toggleOn: 'bg-'+row.color+'-500 border-'+row.color+'-500 justify-start text-white',
              toggleOff: 'bg-gray-200 border-gray-200 justify-end text-gray-700',
              toggleOnDisabled: 'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
              toggleOffDisabled: 'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
              handle: 'inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all',
              handleOn: 'left-full transform -translate-x-full',
              handleOff: 'left-0',
              handleOnDisabled: 'bg-gray-100 left-full transform -translate-x-full',
              handleOffDisabled: 'bg-gray-100 left-0',
              label: 'text-center w-8 border-box whitespace-nowrap select-none',
            }"
            :disabled="row.disabled"
        />
        <small v-if="row.hint" class="text-gray-400 mx-2">{{row.hint}}</small>
        <JetInputError :message="message" class="mt-2" />
    </div>
    <div v-if="view === 'view'" class="flex justify-between my-4">
        <div>
            <p class="font-bold">{{ row.label ? row.label : row.name }}</p>
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
        if(this.row.default){
            this.value = this.row.default
        }
        if(this.modelValue){
            this.value = this.modelValue
        }
    },
    created() {
        this.value = this.$props.modelValue;
    },
    props: {
        modelValue: false,
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
