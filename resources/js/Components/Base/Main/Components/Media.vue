<template>
    <div class="py-2">
        <div class="col-span-6 sm:col-span-4">
            <!-- Profile Photo File Input -->
            <input
                v-if="id"
                type="file"
                class="hidden"
                :ref="id"
                @change="updatePhotoPreview()"
                :multiple="multi"
            />
            <label v-if="id" :for="id" class="h-40 text-sm font-normal">{{
                label
            }}</label>

            <!-- Current Profile Photo -->
            <div v-if="photoPreview.length && preview">
                <div
                    class="flex justify-center mt-2 space-x-2"
                    v-if="multi && photoPreview.length"
                >
                    <div v-for="(item, key) in photoPreview" :key="key">
                        <img
                            :src="item"
                            class="object-cover w-20 h-20 mx-auto rounded-full"
                        />
                    </div>
                </div>
                <div class="mt-2" v-else>
                    <img
                        :src="photoPreview[0]"
                        class="object-cover w-20 h-20 mx-auto rounded-full"
                    />
                </div>
            </div>

            <div class="mt-2" v-else-if="preview">
                <div v-if="modelValue && multi">
                    <div v-for="(item, key) in modelValue" :key="key">
                        <img
                            :src="item"
                            class="object-cover w-20 h-20 mx-auto rounded-full"
                        />
                    </div>
                </div>
                <div v-else-if="modelValue">
                    <img
                        :src="modelValue"
                        class="object-cover w-20 h-20 mx-auto rounded-full"
                    />
                </div>
            </div>

            <button
                class="w-full px-4 py-2 mt-2 mr-2 text-xs font-semibold tracking-widest text-center text-gray-700 uppercase transition bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25"
                type="button"
                @click.prevent="selectNewPhoto()"
            >
                Select A New Photo
            </button>
        </div>
        <JetInputError :message="message" class="mt-2" />
    </div>
</template>

<script>
import { defineComponent } from "vue";
import JetInputError from "@/Jetstream/InputError.vue";

export default defineComponent({
    components: {
        JetInputError,
    },
    props: ["label", "id", "modelValue", "multi", "message", "preview"],
    data() {
        return {
            photoPreview: [],
            images: [],
        };
    },
    mounted(){
        if(this.modelValue){
            this.photoPreview.push(this.modelValue);
        }
    },
    methods: {
        updatePhotoPreview() {
            const photo = this.$refs[this.id].files[0];

            if (!photo) return;

            const reader = new FileReader();

            reader.onload = (e) => {
                if (this.multi) {
                    this.photoPreview.push(e.target.result);
                    this.images.push(photo);
                    this.$emit("update:modelValue", this.images);
                } else {
                    this.photoPreview[0] = e.target.result;
                    this.$emit("update:modelValue", photo);
                }
            };

            reader.readAsDataURL(photo);
        },
        selectNewPhoto() {
            this.$refs[this.id].click();
        },
    },
});
</script>
