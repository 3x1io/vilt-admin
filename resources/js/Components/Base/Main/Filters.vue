<template>
    <div class="flex items-center justify-end w-full gap-2 md:max-w-md">
        <div class="flex-1">
            <div class="filament-tables-search-input">
                <label for="tableSearchQueryInput" class="sr-only">
                    Search
                </label>

                <div class="relative group">
                    <span
                        class="absolute inset-y-0 left-0 flex items-center justify-center text-gray-400 pointer-events-none w-9 h-9 group-focus-within:text-primary-500"
                    >
                        <svg
                            class="w-5 h-5"
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
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </span>
                    <form @submit.prevent="searchFilter()">
                        <input
                            @change.prevent="searchFilter()"
                            v-model="search"
                            id="tableSearchQueryInput"
                            placeholder="Search By Name"
                            type="search"
                            autocomplete="off"
                            class="block w-full placeholder-gray-400 transition duration-75 border-gray-300 rounded-lg shadow-sm dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 h-9 pl-9 focus:border-primary-600 focus:ring-1 focus:ring-inset focus:ring-primary-600"
                        />
                    </form>
                </div>
            </div>
        </div>
        <div class="relative inline-block filament-tables-filters shrink-0" v-if="showFilter">
            <button
                @click.prevent="showFilter = !showFilter"
                type="button"
                class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-500/5 focus:outline-none filament-tables-icon-button text-primary-500 focus:bg-primary-500/10 hover:bg-gray-300/5 filament-tables-filters-trigger"
            >
                <span class="sr-only"> Filter </span>

                <svg
                    class="w-5 h-5 filament-tables-icon-button-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#3a9251"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    ></path>
                </svg>
            </button>

            <div
                class="absolute right-0 z-10 w-screen max-w-sm pl-12 mt-2 transition dark:text-white top-full rtl:right-auto rtl:left-0 rtl:pl-0 rtl:pr-12"
                v-show="showFilter"
            >
                <div class="px-6 py-4 space-y-6 bg-white border shadow-xl rounded-xl dark:bg-gray-700 border-1">
                    <button
                        @click.prevent="showFilter = false"
                        type="button"
                        class="absolute flex items-center justify-center w-10 h-10 text-gray-500 rounded-full hover:bg-gray-500/5 focus:outline-none filament-tables-icon-button focus:bg-gray-500/10 hover:bg-gray-300/5 top-3 right-3 rtl:right-auto rtl:left-3 shrink-0"
                    >
                        <span class="sr-only"> Close </span>

                        <svg
                            class="w-5 h-5 filament-tables-icon-button-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="#24262d"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>

                    <div class="grid grid-cols-1 gap-6 filament-forms-component-container lg:grid-cols-1">
                        <div class="col-span-1">
                            <div class="grid grid-cols-1 gap-6 filament-forms-component-container">
                                <div class="col-span-1">
                                    <div class="filament-forms-field-wrapper">
                                        <div class="space-y-2">
                                            <div class="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                                                <div class="w-full">
                                                    <slot></slot>
                                                    <button
                                                        type="button"
                                                        class="inline-flex items-center justify-center text-sm font-normal hover:underline focus:outline-none focus:underline filament-tables-link text-danger-600 hover:text-danger-500 dark:text-danger-500 dark:hover:text-danger-400"
                                                        @click.prevent="resetFilter()"
                                                    >
                                                        Reset filters
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  components: {
    Link,
  },
  props: {
    setSearch: String,
    showFilter: Boolean,
  },
  computed: {
    lang() {
      return this.$page.props.trans;
    },
  },
  watch: {
    setSearch(newValue, oldValue) {
      this.search = newValue;
    },
    per_page(newValue, oldValue) {
      this.setPerPage = newValue;
    },
  },
  data() {
    return {
      search: "",
      filters: {},
      activeFilter: false,
      setPerPage: 25,
      start_page: 0,
      last_page: 1,
    };
  },
  methods: {
    trans(key) {
      return this.lang[key] ? this.lang[key] : key;
    },
    searchFilter() {
      let search = this.search;
      this.$emit("getSearch", search);
    },
    resetFilter() {
      this.$emit("reset");
    },
    filter(filterBy, filterValue) {
      let filter = {};
      filter[filterBy] = filterValue;
      this.$emit("filter", filter);
    },
    reload(page, type) {
      let url = {};
      url.page = page;
      url.per_page = this.setPerPage;
      this.$emit("reload", url);
    },
  },
});
</script>
