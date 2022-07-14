<template>
    <app-layout :title="$attrs.lang.index">
        <div class="container grid px-6 mx-auto">
            <Header
                :canCreate="$attrs.canCreate"
                :title="$attrs.lang.index"
                :button="$attrs.lang.create"
                @buttonAction="create"
            >
                <a  v-for="(action, index) in $attrs.actions" :key="index"  :href="action.url ? action.url : '#'" @click.prevent="!action.url ? action.modal ? openModal(action.modal) : fireAction(action.action) : openUrl(action.url)" class="inline-flex items-center justify-center gap-1 px-4 mr-2 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow rlt:ml-2 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action">
                    <i :class="action.icon"></i>
                    {{ action.label }}
                </a>
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
                                            class="flex items-center w-full h-8 px-3 text-sm font-normal text-white bg-danger group whitespace-nowrap focus:outline-none"
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
                                                {{ $attrs.lang.bulk }}
                                            </span>
                                        </button>
                                    </Bulk>
                                    <Filters
                                        :showFilter="false"
                                        :setSearch="search"
                                        @getSearch="searchFilter"
                                        @reset="resetFilter"
                                        @filter="filter"
                                    >
                                        <!-- <JetLabel for="phone" value="Phone" />
                                        <JetInput
                                            id="phone"
                                            v-model="filters.phone"
                                            @change="
                                                filter('phone', filters.phone)
                                            "
                                            type="text"
                                            class="block w-full mt-1"
                                            autofocus
                                        /> -->
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
            :title="edit ? $attrs.lang.edit_title : $attrs.lang.create_title"
            :show="createModal"
            :edit="edit"
            :errors="errors"
            :item="form"
            :rows="rows"
            @close="createModal = !createModal"
            @success="success"
        />
        <ViewModal
            :title="$attrs.lang.view_title"
            :show="viewModal"
            :item="form"
            :rows="rows"
            @close="viewModal = !viewModal"
        />
        <DeleteModal
            :url="url"
            :title="$attrs.lang.delete_title"
            :show="deleteModal"
            :item="form"
            @close="deleteModal = !deleteModal"
            @success="success"
        />
        <BulkModal
            :url="url"
            :title="$attrs.lang.bulk_title"
            :action="bulkActionTitle"
            :bulk="bulk"
            :show="bulkModal"
            @close="bulkModal = !bulkModal"
            @success="success"
        />
        <JetDialogModal v-for="(item, key) in $attrs.modals" :key="key" :show="actionModal[item.name]" @end="actionModal[item.name] = !actionModal[item.name]">
                <template #title>
                    {{ item.title }}
                    <hr class="my-4" />
                </template>

                <template #content>
                    <ViltForm
                        v-model="modalAction[item.name]"
                        :rows = "item.rows"
                        :errors = "$page.props.errors"
                    />
                </template>

                <template #footer>
                    <JetButton v-for="(button, key) in item.buttons" :key="key" @click.prevent="modalActionRun(item.name, button.action)" class="mx-2">{{ button.label }}</JetButton>
                    <JetSecondaryButton @click="actionModal[item.name] = !actionModal[item.name]"> {{ trans('global.close') }} </JetSecondaryButton>
                </template>
        </JetDialogModal>
    </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import MixinVue from "@/Components/Base/Mixin.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetButton from "@/Jetstream/Button.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetDialogModal from "@/Jetstream/DialogModal.vue";
import ViltForm from "@/Components/Base/Rows/ViltForm.vue";


export default defineComponent({
    mixins: [MixinVue],
    components: {
        JetDialogModal,
        JetButton,
        JetSecondaryButton,
        ViltForm,
    },
    data() {
        return {
            form: this.$inertia.form({}),
            actionModal: {},
            modalAction: {}
        };
    },
    mounted(){
        for(let i=0;i<this.$attrs.modals.length; i++){
            this.actionModal[this.$attrs.modals[i].name] = false;
            this.modalAction[this.$attrs.modals[i].name] = {};
            for(let x=0;x<this.$attrs.modals[i].rows.length; x++){
                 if(this.$attrs.modals[i].rows[x].type === 'relation'){
                    this.modalAction[this.$attrs.modals[i].name][this.$attrs.modals[i].rows[x].field] = []
                 }
                 else {
                    this.modalAction[this.$attrs.modals[i].name][this.$attrs.modals[i].rows[x].field] = this.$attrs.modals[i].rows[x].default
                 }
           }
        }
        this.form = this.$inertia.form(this.getForm);
    },
    computed:{
        getForm(){
            let rowsArray = {};
            let rows = this.$page.props.rows;
            for(let i=0; i<rows.length; i++){
                if(rows[i].type === 'relation'){
                    rowsArray[rows[i].field] = [];
                }
                else {
                    rowsArray[rows[i].field] = rows[i].default;
                }
            }
            return rowsArray;
        }
    },
    methods: {
        openUrl(url){
            window.open(url);
        },
        modalActionRun(modal , action){
            this.$inertia.form(this.modalAction[modal]).submit("post",route(action) ,{
                preserveScroll: true,
                onSuccess: () => {
                    this.modalAction[modal].reset();
                    this.actionModal[modal] = false;
                    this.success();
                },
            });
        },
        fireAction(name){
            this.$inertia.post(route(name), {});
        },
        openModal(name){
            this.actionModal[name] = !this.actionModal[name];
        },
        create() {
            this.form = this.$inertia.form(this.getForm);
            this.edit = false;
            this.createModal = true;
        },
    },
});
</script>
