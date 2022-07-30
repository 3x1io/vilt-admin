<template>
    <div>
        <JetLabel :for="id" :value="label" />
        <Toggle
            :name="id"
            :id="id"
            :value="modelValue"
            :class="class"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <JetInputError :message="message" class="mt-2" />
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
    props: ["id", "modelValue", "label", "message", "class"],
    emits: ["update:modelValue"],
});
</script>
