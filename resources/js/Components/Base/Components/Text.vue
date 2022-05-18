<template>
    <div>
        <label :for="id" class="h-40 text-sm font-medium">{{ label }}</label>

        <div class="relative mt-1">
            <input
                :type="type"
                :name="id"
                :id="id"
                :value="modelValue"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)"
                class="w-full h-40 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            />

            <span class="absolute inset-y-0 inline-flex items-center right-4">
                <i v-if="icon" class="text-gray-400 bx-sm" :class="icon"></i>
                <i v-else class="text-gray-400 bx-sm bx bx-circle"></i>
            </span>
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
    ],
    emits: ["update:modelValue"],
});
</script>
