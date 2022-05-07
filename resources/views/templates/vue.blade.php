<template>
    <app-layout title="@php echo " {{" @endphp $title }}">
        <div class="container grid px-6 mx-auto">
            <Header title="{{ $model }}" button="Create {{ $model }}" @buttonAction="create">
            </Header>
            <div class="flex-1 w-full mx-autofilament-main-content max-w-7xl">
                <div class="filament-page filament-resources-list-records-page">
                    <div class="space-y-6">
                        <div class="filament-tables-component">
                            <div
                                class="bg-white border border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-800 rounded-xl filament-tables-container">
                                <div class="flex items-center justify-between p-2 h-14">
                                    <Bulk :bulk="bulk" :show="showBluk" :collection="collection"
                                        @close="showBluk= !showBluk">
                                        <button type="button"
                                            class="flex items-center w-full h-8 px-3 text-sm font-medium group whitespace-nowrap focus:outline-none hover:text-white focus:text-white hover:bg-danger-600 focus:bg-danger-700"
                                            @click="bulkAction('delete')">
                                            <svg class="flex-shrink-0 w-6 h-6 mr-2 -ml-1 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-danger-500"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                </path>
                                            </svg>
                                            <span class="truncate">
                                                Delete selected
                                            </span>
                                        </button>
                                    </Bulk>
                                    <Filters :setSearch="search" @search="searchFilter" @reset="resetFilter"
                                        @filter="filter">
                                        <JetLabel for="phone" value="Phone" />
                                        <JetInput id="phone" v-model="filters.phone" @change="
                                                filter('phone', filters.phone)
                                            " type="text" class="block w-full mt-1" autofocus />
                                    </Filters>
                                </div>
                                <div class="relative overflow-y-auto border-t">
                                    <List @reload="reloadList" @view="viewItem" @edit="editItem" @delete="deleteItem"
                                        @all="bulkAll" :rows="rows" :orderBy="orderBy" :collection="collection"
                                        :bulk="bulk" :url="url" :desc="desc">
                                    </List>
                                </div>
                                <div class="p-2 border-t">
                                    <Pagination :per_page="per_page" :collection="collection" :url="url"
                                        @reload="reloadList" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CreateModal :url="url" title="{{ $model }}" :show="createModal" :edit="edit" :errors="errors" :item="form"
            :rows="rows" @close="createModal = !createModal" @success="success" />
        <ViewModal title="View {{ $model }}" :show="viewModal" :item="form" :rows="rows"
            @close="viewModal = !viewModal" />
        <DeleteModal :url="url" title="Delete {{ $model }}" :show="deleteModal" :item="form"
            @close="deleteModal = !deleteModal" @success="success" />
        <BulkModal :url="url" title="Bulk Action On {{ $model }}" :action="bulkActionTitle" :bulk="bulk"
            :show="bulkModal" @close="bulkModal = !bulkModal" @success="success" />
    </app-layout>
</template>

<script>
    import { defineComponent } from "vue"
import AppLayout from "@/Layouts/AppLayout.vue"
import { Link } from "@inertiajs/inertia-vue3"
import Filters from "../../Components/Base/Filters.vue"
import Header from "../../Components/Base/Header.vue"
import Bulk from "../../Components/Base/Bulk.vue"
import List from "../../Components/Base/Table.vue"
import Pagination from "../../Components/Base/Pagination.vue"
import CreateModal from "../../Components/Base/Modals/Create.vue"
import ViewModal from "../../Components/Base/Modals/View.vue"
import DeleteModal from "../../Components/Base/Modals/Delete.vue"
import BulkModal from "../../Components/Base/Modals/Bulk.vue"

@php
    $form = "";
    foreach($cols as $col){
        if($col['name'] === 'id'){

        }
        elseif($col['name'] === 'created_at'){

        }
        elseif($col['name'] === 'updated_at'){

        }
        elseif($col['name'] === 'deleted_at'){

        }
        else {
            $form .=$col['name'] . ':"",'."\n";
        }
    }
    echo '
    export default defineComponent({
    components: {
        AppLayout,
        Link,
        Filters,
        Header,
        Bulk,
        List,
        Pagination,
        CreateModal,
        ViewModal,
        DeleteModal,
        BulkModal,
    },
    props: {
        errors: Object,
        rows: Array,
        collection: Object,
        url: String,
    },
    data() {
        return {
            createModal: false,
            viewModal: false,
            deleteModal: false,
            bulkModal: false,
            form: this.$inertia.form({
            '.$form.'
            }),
            goNext: true,
            goBack: true,
            search: "",
            per_page: 10,
            orderBy: "id",
            desc: true,
            last_page: 0,
            edit: false,
            showFilter: false,
            filters: {},
            bulk: {},
            showBluk: false,
            bulkActionTitle: "",
            view: {},
            photoPreview: null,
        }
    },
    mounted() {
        this.search = this.$attrs.search;
        this.per_page = this.$attrs.per_page;
        this.orderBy = this.$attrs.orderBy;
        if (this.$attrs.desc === "desc") {
            this.desc = false;
        } else {
            this.desc = true;
        }
        this.last_page = this.collection.last_page;
        this.filters = this.$attrs.filters;
        this.createModal = this.$attrs.create;
    },
    methods: {
        searchFilter(search) {
            this.search = search;
            this.reload(1, "search");
        },
        resetFilter() {
            this.reload(1);
        },
        filter(filterBy, filterValue) {
            let url = "/"+this.url+"?" + filterBy + "=" + filterValue;
            this.$inertia.get(url);
        },
        viewItem(item) {
            this.form = this.$inertia.form(item);
            this.viewModal = true;
        },
        editItem(item) {
            this.form = this.$inertia.form(item);
            this.createModal = true;
            this.edit = true;
        },
        deleteItem(item) {
            this.form = this.$inertia.form(item);
            this.deleteModal = true;
        },
        reloadList(url) {
            this.$inertia.get(url);
        },
        create() {
            this.form = this.$inertia.form({
            '.$form.'
            });
            this.edit = false;
            this.createModal = true;
        },
        bulkAction(action) {
            this.bulkActionTitle = action;
            this.bulkModal = true;
            this.showBluk = false;
        },
        bulkAll() {
            if (Object.keys(this.bulk).length) {
                this.bulk = {};
            } else {
                for (let i = 0; i < this.collection.data.length; i++) {
                    this.bulk[this.collection.data[i].id] = true;
                }
            }
        },
        applyFilters(name) {
            this.reload(1, "filters", null, false, name);
        },
        resetFilters() {
            this.filters = [];
            this.reload();
        },
        success(){
            this.$toast.success(this.$attrs.message, {
                position: "top",
            })
            this.edit = false;
            this.createModal = false;
            this.deleteModal = false;
            this.reload(1, "orderBy", "id", "desc");
        },
        reload(index = 1, type = "main", orderBy = null, dir = false) {
            let url = "/"+this.url+"?";
            url += "page=" + index;
            if (type === "search") {
                url += "&search=" + this.search;
            }
            if (type === "per_page") {
                url += "&per_page=" + this.per_page;
            }
            if (type === "orderBy") {
                url += "&orderBy=" + orderBy;
                if (dir) {
                    url += "&orderDirection=" + dir;
                } else {
                    if (this.desc) {
                        url += "&orderDirection=desc";
                    } else {
                        url += "&orderDirection=asc";
                    }
                }
            }

            this.$inertia.get(url);
        },

    },
});'
@endphp
</script>
