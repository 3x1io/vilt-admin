<template>
    <app-layout title="Welcome">
        <form action="" class="px-2">
            <div v-for="(item, key) in rows" :key="key">
                <Text v-if="item.vue === 'Text.vue'" :row="item" v-model="form[item.name]"/>
            </div>

            <button class="mx-2 py-2 px-4 bg-blue-700 hover:bg-blue-600 rounded-lg text-white">Save</button>
        </form>
    </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import Text from '$$/Text.vue'

export default defineComponent({
    props: {
        rows: {
            Array,
            default: [],
        }
    },
    components: {
        AppLayout,
        Text
    },
    data() {
        return {
            form: {}
        }
    },
})
</script>
