<template>
    <div class="py-2 px-2" v-if="view === 'input'">
        <label v-if="row.name" :for="row.name" class="text-sm font-normal capitalize">{{
                row.label ? row.label : row.name
            }}
            <span v-if="row.required" class="text-red-600 text-bold">*</span>
        </label>
        <div>
            <flat-pickr
                v-model="value"
                @on-change="$emit('update:modelValue', value)"
                :config="time"
                :placeholder="row.placeholder ? row.placeholder : row.name"
                class="w-full bg-white border border-gray-200 rounded-default text-14 dark:bg-dark_bg dark:border-dark_border"
                :class="row.className"
                :disabled="row.disabled"
            ></flat-pickr>
        </div>
        <small v-if="row.hint" class="text-gray-400 mx-2">{{row.hint}}</small>
        <JetInputError :message="message" />
    </div>
    <div class="flex justify-between my-4" v-if="view === 'view'">
        <div>
            <p class="font-bold">{{ label }}</p>
        </div>
        <div>
            <p>
                <i class="mx-2 bx bxs-time"></i> {{ timefilter(modelValue) }}
            </p>
        </div>
    </div>
    <div v-if="view === 'table'">
        <i class="mx-2 bx bxs-time"></i>
        <span> {{ timefilter(modelValue) }}</span>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import JetInputError from "@/Jetstream/InputError.vue";
import flatPickr from "vue-flatpickr-component";
import moment from "moment";

export default defineComponent({
    components: {
        JetInputError,
        flatPickr,
    },
    data() {
        return {
            value: "",
            time: {
                noCalendar: true,
                enableTime: true,
                enableSeconds: true,
                defaultHour: 12,
                locale: "ar", // locale for this instance only
                dateFormat: "H:i:S",
                altInput: true,
                altFormat: "h:i:S K",
            },
        };
    },
    beforeUpdate() {
        if (this.modelValue) {
            this.value = this.modelValue;
        }
    },
    mounted() {
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
    methods: {
        datetimefilter(value) {
            if (value) {
                return moment(String(value)).format("MM/DD/YYYY hh:mm A");
            }
        },
        datefilter(value) {
            if (value) {
                return moment(String(value)).format("MM/DD/YYYY");
            }
        },
        timefilter(value) {
            if (value) {
                return moment(String(value), "hh:mm:ss").format("hh:mm:ss A");
            }
        },
    },
});
</script>
