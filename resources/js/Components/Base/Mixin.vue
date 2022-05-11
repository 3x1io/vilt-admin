<template>

</template>
<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Filters from "@/Components/Base/Filters.vue";
import Header from "@/Components/Base/Header.vue";
import Bulk from "@/Components/Base/Bulk.vue";
import List from "@/Components/Base/Table.vue";
import Pagination from "@/Components/Base/Pagination.vue";
import CreateModal from "@/Components/Base/Modals/Create.vue";
import ViewModal from "@/Components/Base/Modals/View.vue";
import DeleteModal from "@/Components/Base/Modals/Delete.vue";
import BulkModal from "@/Components/Base/Modals/Bulk.vue";

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
        };
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
        trans(key){
            console.log(key)
            // return this.$attrs.trans[key];
        },
        searchFilter(search) {
            this.search = search;
            this.reload(1, "search");
        },
        resetFilter() {
            this.reload(1);
        },
        filter(filterBy, filterValue) {
            let url = "/" + this.url + "?" + filterBy + "=" + filterValue;
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
        success() {
            this.$toast.success(this.$attrs.message, {
                position: "top",
            });
            this.edit = false;
            this.createModal = false;
            this.deleteModal = false;
            this.reload(1, "orderBy", "id", "desc");
        },
        reload(index = 1, type = "main", orderBy = null, dir = false) {
            let url = "/" + this.url + "?";
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
});
</script>
