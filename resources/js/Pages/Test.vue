<template>
    <app-layout title="Welcome">
        <form action="" class="px-2">
            <div v-for="(item, key) in rows" :key="key">
                <ViltText v-if="item.vue === 'ViltText.vue'" :row="item" v-model="form[item.name]"/>
                <ViltEmail v-if="item.vue === 'ViltEmail.vue'" :row="item" v-model="form[item.name]"/>
                <ViltTel v-if="item.vue === 'ViltTel.vue'" :row="item" v-model="form[item.name]"/>
                <ViltTextArea v-if="item.vue === 'ViltTextArea.vue'" :row="item" v-model="form[item.name]"/>
                <ViltNumber v-if="item.vue === 'ViltNumber.vue'" :row="item" v-model="form[item.name]"/>
                <ViltSelect v-if="item.vue === 'ViltSelect.vue'" :row="item" v-model="form[item.name]"/>
                <ViltSwitch v-if="item.vue === 'ViltSwitch.vue'" :row="item" v-model="form[item.name]"/>
                <ViltColor v-if="item.vue === 'ViltColor.vue'" :row="item" v-model="form[item.name]"/>
                <ViltDate v-if="item.vue === 'ViltDate.vue'" :row="item" v-model="form[item.name]"/>
                <ViltDateTime v-if="item.vue === 'ViltDateTime.vue'" :row="item" v-model="form[item.name]"/>
                <ViltTime v-if="item.vue === 'ViltTime.vue'" :row="item" v-model="form[item.name]"/>
            </div>

            <button class="mx-2 py-2 px-4 bg-blue-700 hover:bg-blue-600 rounded-lg text-white">Save</button>
        </form>
    </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import ViltText from '$$/ViltText.vue'
import ViltTel from '$$/ViltTel.vue'
import ViltTextArea from "$$/ViltTextArea.vue";
import ViltNumber from "$$/ViltNumber.vue";
import ViltSelect from "$$/ViltSelect.vue";
import ViltSwitch from "$$/ViltSwitch.vue";
import ViltColor from "$$/ViltColor.vue";
import ViltEmail from "$$/ViltEmail.vue";
import ViltDate from "$$/ViltDate.vue";
import ViltDateTime from "$$/ViltDateTime.vue";
import ViltTime from "$$/ViltTime.vue";

export default defineComponent({
    props: {
        rows: {
            Array,
            default: [],
        }
    },
    components: {
        ViltTextArea,
        AppLayout,
        ViltText,
        ViltTel,
        ViltNumber,
        ViltSelect,
        ViltSwitch,
        ViltColor,
        ViltEmail,
        ViltDate,
        ViltDateTime,
        ViltTime,
    },
    data() {
        return {
            form: {}
        }
    },
})
</script>
