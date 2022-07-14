<template>
  <JetDialogModal :show="showModal" @end="close">
    <template #title>
      <span class="text-main">{{ title }}</span>
      <hr class="my-4" />
    </template>

    <template #content>
      <div class="print_area">
        <div v-for="(field, key) in rows" :key="key">
          <div v-if="field.view">
            <ViltMedia v-model="item[field.field]" view="view" :multi="field.multi" :label="field.label" v-if="field.type === 'image' && item[field.field]"/>
            <div
              v-else-if="field.type === 'schema'"
              class="flex justify-between pb-4 my-4 border-b-2 border-gray-100">
              <div>
                <p class="font-normal">{{ field.label }}</p>
              </div>
              <div class="grid grid-cols-3 gap-2">
                <div v-for="(rel, relIndex) in field.options" :key="relIndex">
                  <div
                    v-if="item[field.field][rel.field]"
                    class="
                      inline-flex
                      mx-2
                      items-center
                      justify-center
                      space-x-1
                      min-h-6
                      px-2
                      py-0.5
                      text-sm
                      font-normal
                      tracking-tight
                      rounded-xl
                      whitespace-normal
                      text-primary-700
                      bg-primary-500/10
                      dark:text-primary-500
                    "
                  >
                    <span>{{ item[field.field][rel.field] ? item[field.field][rel.field] : '' }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="field.url" class="flex justify-between pb-4 my-4 border-b-2 border-gray-100">
              <div>
                <p class="font-normal">{{ field.label }}</p>
              </div>
              <div>
                <a
                  target="_blank"
                  :href="item[field.field]"
                  class="
                    inline-flex
                    mx-2
                    items-center
                    justify-center
                    space-x-1
                    min-h-6
                    px-2
                    py-0.5
                    text-sm
                    font-normal
                    tracking-tight
                    rounded-xl
                    whitespace-normal
                    text-primary-700
                    bg-primary-500/10
                    dark:text-primary-500
                  "
                >
                  Open URL
                </a>
              </div>
            </div>
            <div
              v-else-if="field.type === 'color'"
              class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"
            >
              <div>
                <p class="font-normal">{{ field.label }}</p>
              </div>
              <div>
                <div
                  class="w-8 h-8 rounded-full"
                  :style="'background-color: ' + item[field.field]"
                ></div>
              </div>
            </div>
            <div
              v-else-if="field.type === 'icon'"
              class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"
            >
              <div>
                <p class="font-normal">{{ field.label }}</p>
              </div>
              <div class="text-3xl">
                <i :class="item[field.field]"></i>
              </div>
            </div>
            <div
              v-else-if="field.type === 'switch'"
              class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"
            >
              <div>
                <p class="font-normal">{{ field.label }}</p>
              </div>
              <div>
                <div
                  class="w-10 h-10 p-2 text-lg text-center text-white bg-green-500 rounded-full "
                  v-if="item[field.field] == '1'"
                >
                  <i class="bx bx-check"></i>
                </div>
                <div
                  class="w-10 h-10 p-2 text-lg text-center text-white rounded-full bg-danger-500"
                  v-else
                >
                  <i class="bx bx-x"></i>
                </div>
              </div>
            </div>
            <div
              v-else-if="field.type === 'hasOne'"
              class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"
            >
              <div>
                <p class="font-normal">{{ field.label }}</p>
              </div>
              <div class="grid grid-cols-1 gap-2">
                <div
                  class="
                    inline-flex
                    mx-2
                    items-center
                    justify-center
                    space-x-1
                    min-h-6
                    px-2
                    py-0.5
                    text-sm
                    font-normal
                    tracking-tight
                    rounded-xl
                    whitespace-normal
                    text-primary-700
                    bg-primary-500/10
                    dark:text-primary-500
                  "
                >
                  {{ item[field.field][field.track_by_name] ? item[field.field][field.track_by_name] : '' }}
                </div>
              </div>
            </div>
            <div
              v-else-if="field.type === 'select-value'"
              class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"
            >
              <div>
                <p class="font-normal">{{ field.label }}</p>
              </div>
              <div class="grid grid-cols-1 gap-2">
                <div
                  class="
                    inline-flex
                    mx-2
                    items-center
                    justify-center
                    space-x-1
                    min-h-6
                    px-2
                    py-0.5
                    text-sm
                    font-normal
                    tracking-tight
                    rounded-xl
                    whitespace-normal
                    text-primary-700
                    bg-primary-500/10
                    dark:text-primary-500
                  "
                >
                  {{ item[field.field][field.track_by_name] ? item[field.field][field.track_by_name] : '' }}
                </div>
              </div>
            </div>
            <div
              v-else-if="field.type === 'relation'"
              class="flex justify-between pb-4 my-4 border-b-2 border-gray-100"
            >
              <div>
                <p class="font-normal">{{ field.label }}</p>
              </div>
              <div class="grid grid-cols-3 gap-2">
                <div
                  class="
                    inline-flex
                    mx-2
                    items-center
                    justify-center
                    space-x-1
                    min-h-6
                    px-2
                    py-0.5
                    text-sm
                    font-normal
                    tracking-tight
                    rounded-xl
                    whitespace-normal
                    text-primary-700
                    bg-primary-500/10
                    dark:text-primary-500
                  "
                  v-for="(rel, relIndex) in item[field.field]"
                  :key="relIndex"
                >
                  {{ rel[field.track_by_name] ? rel[field.track_by_name] : '' }}
                </div>
              </div>
            </div>
            <div v-else class="flex justify-between pb-4 my-4 border-b-2 border-gray-100">
              <div>
                <p class="font-normals">{{ field.label }}</p>
              </div>
              <div class="text-14">
                {{ item[field.field] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <slot></slot>
      <JetSecondaryButton @click="close"> {{ trans('global.close') }} </JetSecondaryButton>
    </template>
  </JetDialogModal>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import JetDialogModal from "@/Jetstream/DialogModal.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetButton from "@/Jetstream/Button.vue";
import ViltMedia from "@/Components/Base/Rows/ViltMedia.vue";
import ViltText from "@/Components/Base/Rows/ViltText.vue";
import ViltSwitch from "@/Components/Base/Rows/ViltSwitch.vue";
import ViltDate from "@/Components/Base/Rows/ViltDate.vue";

export default defineComponent({
  components: {
    Link,
    JetDialogModal,
    JetSecondaryButton,
    JetButton,
    ViltMedia
  },
  props: {
    show: Boolean,
    item: Object,
    rows: Array,
    title: String,
  },
  watch: {
    show(newValue, oldValue) {
      this.showModal = newValue;
    },
  },
    computed:{
        lang(){
            return this.$page.props.data.trans;
        }
    },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
      trans(key){
            return this.lang[key] ? this.lang[key] : key;
        },
    close() {
      this.$emit("close", this.showModal);
    },
  },
});
</script>
