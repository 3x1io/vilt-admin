<template>
    <app-layout :title="$attrs.lang.index">
        <vue-easy-lightbox
            :visible="visible"
            :imgs="imgs"
            :index="index"
            @hide="handleHide"
        ></vue-easy-lightbox>
        <div class="px-6 pt-6 mx-auto">
            <Header
                :canCreate="$attrs.canCreate"
                :title="$attrs.lang.index"
                :button="$attrs.lang.create"
                @buttonAction="create"
            >
                <a
                    v-for="(action, index) in $attrs.actions"
                    :key="index"
                    :href="action.url ? action.url : '#'"
                    @click.prevent="
                        !action.url
                            ? action.modal
                                ? openModal(action.modal)
                                : fireAction(action.action)
                            : openUrl(action.url)
                    "
                    class="mx-2 relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-main rounded group active:bg-blue-500 focus:outline-none focus:ring"
                >
                  <span class="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                      <i class=" bx-sm mt-2 " :class="action.icon"></i>
                  </span>

                    <span class="text-sm font-medium transition-all group-hover:ml-4">
                    {{ action.label }}
                  </span>
                </a>
            </Header>
            <div class="bg-white dark:bg-gray-800 dark:border-gray-600  rounded-lg border">
                <div
                    class="flex justify-between p-4"
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
                            class="flex items-center w-full h-8 px-3 text-sm font-normal text-danger bg-danger group whitespace-nowrap focus:outline-none"
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
                        :showFilter="
                                            $attrs.table.filters.length
                                        "
                        :setSearch="search"
                        @getSearch="searchFilter"
                        @reset="resetFilter"
                        @filter="filter"
                    >
                        <ViltForm
                            v-for="(filter, key) in $attrs.table
                                                .filters"
                            v-model="filtersObj[filter.name]"
                            :rows="filter.rows"
                            @update:modelValue="
                                                setFilter(filter)
                                            "
                        />
                    </Filters>
                </div>
                <div
                    class="relative overflow-y-auto dark:border-gray-800"
                >
                    <List
                        :canEdit="$attrs.canEdit"
                        :type="$attrs.table"
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
                        <template #actions="{ id }">
                            <div
                                v-for="(action, index) in $attrs
                                                    .table.actions"
                                :key="index"
                            >
                                <button
                                    v-if="action.can"
                                    @click.prevent="
                                                        !action.url
                                                            ? action.modal
                                                                ? openModal(
                                                                      action.modal,
                                                                      id
                                                                  )
                                                                : fireAction(
                                                                      action.action,
                                                                      id
                                                                  )
                                                            : openUrl(
                                                                  action.url
                                                              )
                                                    "
                                    style="padding: 5px 8px"
                                    class="inline-flex items-center justify-center text-sm font-normal filament-tables-link  filament-tables-link-action"
                                    :class="'text-'+action.type+'-700 hover:text-'+action.type+'-600'"
                                    role="button"
                                >
                                    <i
                                        class="text-[16px]"
                                        :class="action.icon"
                                    ></i>
                                    <div class="table_tooltip">
                                        {{ action.label }}
                                    </div>
                                </button>
                            </div>
                        </template>
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
        <br/>
        <br/>
        <CreateModal
            :url="url"
            :title="edit ? $attrs.lang.edit_title : $attrs.lang.create_title"
            :show="createModal"
            :edit="edit"
            :item="form"
            :rows="rows"
            :type="$attrs.form"
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
        <JetDialogModal
            v-for="(item, key) in $attrs.modals"
            :key="key"
            :show="actionModal[item.name]"
            @end="actionModal[item.name] = !actionModal[item.name]"
        >
            <template #title>
                <div class="flex justify-between">
                    {{ item.title }}
                </div>
            </template>

            <template #content>
                <form action="">
                    <ViltForm
                        v-model="modalAction[item.name]"
                        :rows="item.rows"
                        :errors="modalAction[item.name].errors"
                    />
                </form>
            </template>

            <template #footer>
                <JetButton
                    v-for="(button, key) in item.buttons"
                    :key="key"
                    @click.prevent="modalActionRun(item.name, button.action)"
                    class="mx-2"
                >{{ button.label }}
                </JetButton
                >
                <JetSecondaryButton
                    @click="actionModal[item.name] = !actionModal[item.name]"
                >
                    {{ trans("global.close") }}
                </JetSecondaryButton>
            </template>
        </JetDialogModal>
    </app-layout>
</template>

<script>
import {defineComponent} from "vue";
import MixinVue from "@/Components/Base/Mixin.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetButton from "@/Jetstream/Button.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetDialogModal from "@/Jetstream/DialogModal.vue";
import ViltForm from "@/Components/Base/Rows/ViltForm.vue";
import VueEasyLightbox from "vue-easy-lightbox";

export default defineComponent({
    mixins: [MixinVue],
    components: {
        JetDialogModal,
        JetButton,
        JetSecondaryButton,
        ViltForm,
        VueEasyLightbox,
    },
    data() {
        return {
            form: this.$inertia.form({}),
            actionModal: {},
            modalAction: {},
            selectedID: null,
            filtersObj: {},
        };
    },
    mounted() {
        for (let i = 0; i < this.$attrs.modals.length; i++) {
            this.actionModal[this.$attrs.modals[i].name] = false;
            this.modalAction[this.$attrs.modals[i].name] = {};
            for (let x = 0; x < this.$attrs.modals[i].rows.length; x++) {
                if (this.$attrs.modals[i].rows[x].type === "relation") {
                    this.modalAction[this.$attrs.modals[i].name][
                        this.$attrs.modals[i].rows[x].field
                        ] = [];
                } else {
                    this.modalAction[this.$attrs.modals[i].name][
                        this.$attrs.modals[i].rows[x].field
                        ] = this.$attrs.modals[i].rows[x].default;
                }
            }
        }
        this.form = this.$inertia.form(this.getForm);
    },
    computed: {
        getForm() {
            let rowsArray = {};
            let rows = this.$page.props.rows;
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].type === "relation") {
                    rowsArray[rows[i].field] = [];
                } else {
                    rowsArray[rows[i].field] = rows[i].default;
                }
            }
            return rowsArray;
        },
    },
    methods: {
        setFilter(filter) {
            console.log(this.filtersObj[filter.name][filter.name].id);
            this.filter(
                filter.name,
                this.filtersObj[filter.name][filter.name].id
            );
        },
        openUrl(url) {
            window.open(url);
        },
        modalActionRun(modal, action) {
            if (this.selectedID) {
                this.modalAction[modal].id = this.selectedID;
            }
            this.$inertia
                .form(this.modalAction[modal])
                .submit("post", route(action), {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.modalAction[modal].reset();
                        this.actionModal[modal] = false;
                        this.success();
                    },
                });
        },
        fireAction(name, id = null) {
            this.$inertia.post(route(name), {
                id: id ? id : this.selectedID,
            });
        },
        openModal(name, id = null) {
            this.selectedID = id;
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
