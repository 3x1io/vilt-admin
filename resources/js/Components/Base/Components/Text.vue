<template>
    <div>
        <label :for="id" class="h-40 text-sm font-normal">{{ label }}</label>

        <div class="relative mt-1">
            <input
                :type="type"
                :name="id"
                :id="id"
                :value="modelValue"
                :placeholder="placeholder"
                :readonly="readonly"
                @input="$emit('update:modelValue', $event.target.value)"
                class="w-full h-40 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:border-main focus:ring-0 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
            />
        </div>
        <JetInputError :message="message" class="mt-2" />

    </div>
</template>

<script>
import { defineComponent } from "vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";

export default defineComponent({
    components: {
        JetInputError,
        JetLabel,
    },
    props: [
        "label",
        "type",
        "value",
        "class",
        "id",
        "icon",
        "placeholder",
        "message",
        "modelValue",
        "readonly"
    ],
    emits: ["update:modelValue"],
});
</script>
