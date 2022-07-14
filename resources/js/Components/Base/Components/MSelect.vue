<template>
    <div>
        <JetLabel :for="id" :value="label" />
        <multiselect
            :options="options"
            :multiple="multi"
            :track-by="track_by_id"
            :label="track_by_name"
            :value="modelValue"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)"
        ></multiselect>
        <JetInputError :message="message" class="mt-2" />
    </div>
</template>
<script>
import { defineComponent } from "vue";
import Multiselect from "@suadelabs/vue3-multiselect";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";

export default defineComponent({
    components: {
        Multiselect,
        JetInputError,
        JetLabel,
    },
    props: [
        "id",
        "modelValue",
        "label",
        "message",
        "placeholder",
        "track_by_id",
        "track_by_name",
        "multi",
        "options"
    ],
    emits: ["update:modelValue"],
});
</script>
