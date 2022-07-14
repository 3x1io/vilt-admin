<template>
    <app-layout :title="trans('roles.title')">
        <div class="container grid px-6 mx-auto">
            <Header
                :canCreate="$attrs.canCreate"
                :title="trans('roles.title')"
                :button="trans('roles.create')"
                @buttonAction="create"
            >
                <button @click.prevent="permssionsModal = !permssionsModal" class="inline-flex items-center justify-center px-4 mx-2 font-normal tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-main hover:opacity-75 focus:bg-main hover:transition-all filament-page-button-action">
                    {{ trans('roles.generate') }}
                </button>
            </Header>
            <div class="flex-1 w-full overflow-hidden mx-autofilament-main-content">
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
                                        :showFilter="false"
                                        :setSearch="search"
                                        @search="searchFilter"
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
                                        :canEdit="$attrs.canEdit"
                                        :canDelete="$attrs.canDelete"
                                        :canDeleteAny="$attrs.canDeleteAny"
                                        :canView="$attrs.canView"
                                        :canViewAny="$attrs.canViewAny"
                                        @reload="reloadList"
                                        @view="viewItem"
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
            :url="url"
            :title="edit? trans('roles.edit.title') : trans('roles.create.title')"
            :show="createModal"
            :edit="edit"
            :errors="errors"
            :item="form"
            :rows="rows"
            @close="createModal = !createModal"
            @success="success"
        />
        <ViewModal
            :title="trans('roles.view')"
            :show="viewModal"
            :item="form"
            :rows="rows"
            @close="viewModal = !viewModal"
        />
        <DeleteModal
            :url="url"
            :title="trans('roles.delete')"
            :show="deleteModal"
            :item="form"
            @close="deleteModal = !deleteModal"
            @success="success"
        />
        <BulkModal
            :url="url"
            :title="trans('roles.bulk')"
            :action="bulkActionTitle"
            :bulk="bulk"
            :show="bulkModal"
            @close="bulkModal = !bulkModal"
            @success="success"
        />
        <JetDialogModal :show="permssionsModal" @end="permssionsModal = !permssionsModal">
                <template #title>
                    {{ roles.generate.title }}
                    <hr class="my-4" />
                </template>

                <template #content>
                    <div class="py-2">
                        <JetLabel for="guard_name" :value="trans('roles.generate.guard')" />
                        <JetInput
                            id="guard_name"
                            v-model="permissions.guard_name"
                            type="text"
                            class="block w-full mt-1"
                            autofocus
                        />
                        <JetInputError
                            :message="permissions.errors.guard_name"
                            class="mt-2"
                        />
                    </div>
                    <div class="mt-2">
                        <JetLabel for="permissions" :value="trans('roles.generate.permissions')" />
                        <multiselect v-model="permissions.permissions" :options="$attrs.tables" :multiple="true" :track-by="name" :label="id"></multiselect>
                        <JetInputError
                            :message="permissions.errors.permissions"
                            class="mt-2"
                        />
                    </div>
                </template>

                <template #footer>
                    <JetButton @click.prevent="generatePermssions" class="mx-2">{{ trans('roles.generate.button') }}</JetButton>
                    <JetSecondaryButton @click="permssionsModal = !permssionsModal"> {{ trans('global.close') }} </JetSecondaryButton>
                </template>
            </JetDialogModal>
    </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import MixinVue from "@/Components/Base/Mixin.vue";
import JetDialogModal from "@/Jetstream/DialogModal.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetButton from "@/Jetstream/Button.vue";
import Multiselect from "@suadelabs/vue3-multiselect";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";

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
    },
    data() {
        return {
            permissions: this.$inertia.form({
                guard_name: "",
                permissions: [],
            }),
            permssions: [],
            permssionsModal: false,
            form: this.$inertia.form({
                name: "",
                guard_name: "",
                permissions: [],
            }),
        };
    },
    methods: {
        generatePermssions(){
            this.permissions.submit("post", this.route(this.url + ".generate"), {
                preserveScroll: true,
                forceFormData: true,
                onSuccess: () => {
                    this.permissions.reset();
                    this.$toast.success(this.$attrs.message, {
                        position: "top",
                    });
                    this.permssionsModal = false;
                },
            });
        },
        create() {
            this.form = this.$inertia.form({
                name: "",
                guard_name: "",
                permissions: [],
            });
            this.edit = false;
            this.createModal = true;
        },
    },
});
</script>
