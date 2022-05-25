<template>
    <app-layout :title="trans('translation.title')">
        <div class="px-6 mx-auto">
            <Header
                :langs="$attrs.langs"
                :canCreate="$attrs.canCreate"
                :title="trans('translation.title')"
                :button="trans('translation.scan')"
                @buttonAction="scan"
            >
                <button @click="switchLanguagesModel = !switchLanguagesModel" class="inline-flex items-center justify-center px-4 mx-2 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action">
                    {{ trans('translation.switch.language') }}
                </button>
                 <a :href="route('translations.export')" target="_blank" class="inline-flex items-center justify-center px-4 mx-1 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action">
                    {{ trans('translation.export') }}
                </a>
                 <button @click="showImport = !showImport" class="inline-flex items-center justify-center px-4 ml-1 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action">
                    {{ trans('translation.import') }}
                </button>
            </Header>
            <div class="flex-1 w-full mx-autofilament-main-content">
                <div class="filament-page filament-resources-list-records-page">
                    <div class="space-y-6">
                        <div class="filament-tables-component">
                            <div
                                class="bg-white border border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-800 rounded-xl filament-tables-container"
                            >
                                <div
                                    class="flex items-center justify-between p-2 h-14"
                                >
                                    <Bulk
                                        :langs="$attrs.langs"
                                        :bulk="bulk"
                                        :show="showBluk"
                                        :collection="collection"
                                        @close="showBluk = !showBluk"
                                    >
                                        <button
                                            v-if="$attrs.canDeleteAny"
                                            type="button"
                                            class="flex items-center w-full h-8 px-3 text-sm font-normal group whitespace-nowrap focus:outline-none hover:text-white focus:text-white hover:bg-danger-600 focus:bg-danger-700"
                                            @click="bulkAction('delete')"
                                        >
                                            <svg
                                                class="flex-shrink-0 w-6 h-6 mr-2 -ml-1 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-danger-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                ></path>
                                            </svg>
                                            <span class="truncate">
                                                Delete selected
                                            </span>
                                        </button>
                                    </Bulk>
                                    <Filters
                                        :langs="$attrs.langs"
                                        :showFilter="false"
                                        :setSearch="search"
                                        @getSearch="searchFilter"
                                        @reset="resetFilter"
                                        @filter="filter"
                                    >
                                        <JetLabel for="phone" value="Phone" />
                                        <JetInput
                                            id="phone"
                                            v-model="filters.phone"
                                            @change="
                                                filter('phone', filters.phone)
                                            "
                                            type="text"
                                            class="block w-full mt-1"
                                            autofocus
                                        />
                                    </Filters>
                                </div>
                                <div class="relative overflow-y-auto border-t">
                                    <List
                                        :langs="$attrs.langs"
                                        :canEdit="$attrs.canEdit"
                                        :canDelete="$attrs.canDelete"
                                        :canDeleteAny="$attrs.canDeleteAny"
                                        :canView="$attrs.canView"
                                        :canViewAny="$attrs.canViewAny"
                                        @reload="reloadList"
                                        @view="viewItem"
                                        @sub="subItem"
                                        @edit="editItem"
                                        @delete="deleteItem"
                                        @all="bulkAll"
                                        :rows="rows"
                                        :orderBy="orderBy"
                                        :collection="collection"
                                        :bulk="bulk"
                                        :url="url"
                                        :desc="desc"
                                    >
                                    </List>
                                </div>
                                <div class="p-2 border-t">
                                    <Pagination
                                        :langs="$attrs.langs"
                                        :per_page="per_page"
                                        :collection="collection"
                                        :url="url"
                                        @reload="reloadList"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <CreateModal
            :langs="$attrs.langs"
            :url="url"
            title="Users"
            :show="createModal"
            :edit="edit"
            :errors="errors"
            :item="form"
            :rows="rows"
            @close="createModal = !createModal"
            @success="success"
        />
        <ViewModal
            :langs="$attrs.langs"
            title="View User"
            :show="viewModal"
            :item="form"
            :rows="rows"
            @close="viewModal = !viewModal"
        />
        <DeleteModal
            :langs="$attrs.langs"
            :url="url"
            title="Delete User"
            :show="deleteModal"
            :item="form"
            @close="deleteModal = !deleteModal"
            @success="success"
        />
        <BulkModal
            :langs="$attrs.langs"
            :url="url"
            title="Bulk Action On User"
            :action="bulkActionTitle"
            :bulk="bulk"
            :show="bulkModal"
            @close="bulkModal = !bulkModal"
            @success="success"
        />
        <JetDialogModal :show="switchLanguagesModel" @end="switchLanguagesModel = !switchLanguagesModel">
            <template #title>
                Switch Lanaguage
                <hr class="my-4" />
            </template>

            <template #content>
                <div class="mt-2">
                    <JetLabel for="language" value="Language" />
                    <multiselect v-model="translation.language" :options="$attrs.locals" :multiple="false" track-by="id" label="name"></multiselect>
                    <JetInputError
                        :message="translation.errors.language"
                        class="mt-2"
                    />
                </div>
            </template>

            <template #footer>
                <JetButton @click.prevent="switchLanguages" class="mx-2 bg-main hover:bg-main hover:opacity-75 focus:bg-main hover:transition-all">Switch</JetButton>
                <JetSecondaryButton @click="switchLanguagesModel = !switchLanguagesModel"> Close </JetSecondaryButton>
            </template>
        </JetDialogModal>
        <JetDialogModal :show="showImport" @end="showImport = !showImport">
            <template #title>
                Import Languages
                <hr class="my-4" />
            </template>

            <template #content>
                <div class="mt-2">
                    <Media v-model="importExcel.excel" id="excel" label="Upload Excel File same as download file" :message="importExcel.errors.excel" :preview="false"/>
                </div>
            </template>

            <template #footer>
                <JetButton @click.prevent="importExcelFn" class="mx-2 bg-main hover:bg-main hover:opacity-75 focus:bg-main hover:transition-all">Import</JetButton>
                <JetSecondaryButton @click="showImport = !showImport"> Close </JetSecondaryButton>
            </template>
        </JetDialogModal>
    </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import MixinVue from "../../Components/Base/Mixin.vue";
import JetDialogModal from "@/Jetstream/DialogModal.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetButton from "@/Jetstream/Button.vue";
import Multiselect from "@suadelabs/vue3-multiselect";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import Media from "../../Components/Base/Components/Media.vue";

export default defineComponent({
    mixins: [MixinVue],
    components: {
    JetDialogModal,
    JetSecondaryButton,
    JetButton,
    Multiselect,
    JetInput,
    JetInputError,
    JetLabel,
    Media
},
    data() {
        return {
            showImport: false,
            switchLanguagesModel: false,
            form: this.$inertia.form({
                text: {},
                group: "",
                namespace: "",
                key: "",
            }),
            translation: this.$inertia.form({
                language: "",
            }),
            importExcel: this.$inertia.form({
                excel: null,
            }),
        };
    },
    mounted(){
        this.translation.language = this.$attrs.local;
    },
    methods: {
        importExcelFn(){
            this.importExcel.submit("post", this.route(this.url + ".import"), {
                preserveScroll: true,
                forceFormData: true,
                onSuccess: () => {
                    this.importExcel.reset();
                    this.showImport = false;
                    this.$toast.success(this.$attrs.message, {
                        position: "top",
                    });
                },
            });
        },
        switchLanguages(){
            this.translation.submit("post", this.route(this.url + ".switch"), {
                preserveScroll: true,
                forceFormData: true,
                onSuccess: () => {
                    this.translation.reset();
                    this.switchLanguagesModel = false;
                    if(this.$attrs.local.id === "ar"){
                        document.dir = "rtl"
                        this.reload()
                    }
                    else {
                        document.dir = "ltr"
                        this.reload()
                    }
                    this.$toast.success(this.$attrs.message, {
                        position: "top",
                    });

                },
            });
        },
        scan() {
            this.$inertia.get(this.route(this.url + ".scan"), {
                preserveScroll: true,
                onSuccess: () => {
                    this.form.reset();
                    this.$toast.success(this.$attrs.message, {
                        position: "top",
                    });
                },
            });
        },
    },
});
</script>
