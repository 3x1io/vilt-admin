<template>
    <JetLabel :for="id" :value="label" />
    <div v-for="(input, index) in options" :key="index" class="mt-2">
        <JetLabel :for="input.field" :value="input.label" />
        <JetInput
            :id="input.field"
            :value="modelValue[id][input.field]"
            @input="$emit('update:modelValue', $event.target.value)"
            :type="input.type"
            :class="class"
            class="block w-full mt-1"
            autofocus
        />
    </div>
    <JetInputError :message="message" class="mt-2" />
</template>

<script>
import { defineComponent } from "vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetInput from "@/Jetstream/Input.vue";

export default defineComponent({
    components: {
        JetLabel,
        JetInput,
        JetInputError,
    },
    props: ["id", "modelValue", "label", "message", "options", "class"],
    emits: ["update:modelValue"],
});
</script>
