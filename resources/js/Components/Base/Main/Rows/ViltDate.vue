<template>
    <div class="my-2" v-if="view === 'input'">
        <JetLabel :for="id" :value="label" />
        <div>
            <flat-pickr
                v-if="type === 'date'"
                v-model="value"
                @on-change="$emit('update:modelValue', value)"
                :config="date"
                :placeholder="placeholder"
                class="w-full p-3 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                :class="className"
                :disabled="disabled"
            ></flat-pickr>
            <flat-pickr
                v-if="type === 'datetime'"
                v-model="value"
                @on-change="$emit('update:modelValue', value)"
                :config="datetime"
                :placeholder="placeholder"
                class="w-full p-3 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                :class="className"
                :disabled="disabled"
            ></flat-pickr>
            <flat-pickr
                v-if="type === 'time'"
                v-model="value"
                @on-change="$emit('update:modelValue', value)"
                :config="time"
                :placeholder="placeholder"
                class="w-full p-3 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                :class="className"
                :disabled="disabled"
            ></flat-pickr>
        </div>
        <JetInputError :message="message" class="mt-2" />
    </div>
    <div class="flex justify-between my-4" v-if="view === 'view'">
        <div>
            <p class="font-bold">{{ label }}</p>
        </div>
        <div>
            <p v-if="type === 'time'">
                <i class="mx-2 bx bxs-time"></i> {{ timefilter(modelValue) }}
            </p>
            <p v-else-if="type === 'date'">
                <i class="mx-2 bx bxs-calendar"></i>
                {{ datefilter(modelValue) }}
            </p>
            <p v-else-if="type === 'datetime'">
                <i class="mx-2 bx bxs-calendar"></i>
                {{ datetimefilter(modelValue) }}
            </p>
        </div>
    </div>
    <div v-if="view === 'table'">
        <p v-if="type === 'time'">
            <i class="mx-2 bx bxs-time"></i>
            <span> {{ timefilter(modelValue) }}</span>
        </p>
        <p v-else-if="type === 'date'">
            <i class="mx-2 bx bxs-calendar"></i>
            <span> {{ datefilter(modelValue) }}</span>
        </p>
        <p v-else-if="type === 'datetime'">
            <i class="mx-2 bx bxs-calendar"></i>
            <span> {{ datetimefilter(modelValue) }}</span>
        </p>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import flatPickr from "vue-flatpickr-component";
import moment from "moment";

export default defineComponent({
    components: {
        JetInputError,
        JetLabel,
        flatPickr,
    },
    data() {
        return {
            value: "",
            date: {
                defaultHour: 12,
                locale: "ar", // locale for this instance only
                dateFormat: "Y-m-d H:i:S",
                altInput: true,
                altFormat: "d-m-Y",
            },
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
            datetime: {
                enableTime: true,
                enableSeconds: true,
                defaultHour: 12,
                locale: "ar", // locale for this instance only
                dateFormat: "Y-m-d H:i:S",
                altInput: true,
                altFormat: "d-m-Y h:i:S K",
            },
        };
    },
    beforeUpdate(){
        if(this.modelValue){
            this.value = this.modelValue
        }
    },
    mounted(){
        if(this.default){
            this.value = this.default
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
            default: "datetime",
        },
        label: {
            String,
            default: "Date",
        },
        id: {
            String,
        },
        message: {
            String,
        },
        placeholder: {
            String,
            default: "Input Your Date",
        },
        disabled: {
            Boolean,
            default: false,
        },
        className: {
            String,
        },
        multi: {
            Boolean,
            default: false,
        },
    },
    mounted() {
        this.value = this.modelValue;
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
