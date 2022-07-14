<template>
    <div>
        <label for="phone" class="h-40 text-sm font-normal">{{ label }}</label>

        <div class="relative mt-1">
            <textarea
                rows="5"
                :type="type"
                :name="id"
                :id="id"
                :value="modelValue"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)"
                class="w-full h-122 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
            ></textarea>
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
        "message",
        "placeholder",
        "modelValue",
    ],
    emits: ["update:modelValue"],
});
</script>
