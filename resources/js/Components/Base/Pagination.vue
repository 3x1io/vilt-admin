<template>
    <nav
        role="navigation"
        aria-label="Pagination Navigation"
        class="flex items-center justify-between filament-tables-pagination"
        v-if="collection.data.length"
    >
        <div
            class="flex items-center justify-center flex-col md:flex-row md:items-center md:justify-between flex-1 mb-0 md:mb-4"
        >
            <div class="flex items-center">
                <div
                    class="text-sm font-normal dark:text-white mt-1 mt-[10px] mb-[20px] md:mt-0 md:mb-0"
                >
                    {{ trans("global.show") }} {{ collection.from }}
                    {{ trans("global.to") }} {{ collection.to }}
                    {{ trans("global.of") }}
                    {{ collection.total }}
                    {{ trans("global.results") }}
                </div>
            </div>
            <div class="flex flex-col items-center md:flex-row">
                <div
                    class="flex items-start space-x-2 rtl:space-x-reverse filament-tables-pagination-records-per-page-selector mb-[20px] md:mb-0"
                >
                    <div class="flex items-center">
                        <select
                            v-model="setPerPage"
                            id="tableRecordsPerPageSelect"
                            @change="reload(1, 'per_page')"
                            class="h-[38px] pr-[30px] rtl:pl-[10px] rtl:pr-[30px] text-sm leading-none transition duration-75 border-slate-300 rounded-default shadow-sm focus:border-main focus:ring-1 focus:ring-inset focus:ring-main dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>

                        <label
                            for="tableRecordsPerPageSelect"
                            class="text-sm font-normal mx-2"
                        >
                            {{ trans("global.per_page") }}
                        </label>
                    </div>
                </div>

                <div
                    class="flex items-center justify-end mb-6 ml-0 rtl:ml-0 rtl:mr-3 md:mb-0 md:ml-4"
                    v-if="collection.total > collection.per_page"
                >
                    <div
                        class="py-3 border border-none rounded-default dark:border-none"
                    >
                        <ol
                            class="flex items-center text-sm text-gray-500 dark:text-gray-400"
                        >
                            <li>
                                <!-- v-show="collection.current_page !== 1" -->
                                <button
                                    @click.prevent="back()"
                                    :class="
                                        collection.current_page !== 1
                                            ? ''
                                            : 'text-gray-300 pointer-events-none'
                                    "
                                    type="button"
                                    class="flex items-center justify-center font-normal min-w-[2rem] px-3 py-2 focus:outline-none filament-tables-pagination-item border border-transparent hover:border-main transition-all text-gray-800 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 focus:outline-none focus:ring-0 border border-slate-300 relative right-[-1px] rtl:right-[0px] rtl:left-[-1px] border-r-transparent rtl:border-r-slate-300 rtl:border-l-transparent rounded-l-default rtl:rounded-l-0 rtl:rounded-r-default dark:hover:bg-main dark:hover:text-white"
                                    aria-label="Previous"
                                    rel="prev"
                                >
                                    {{ trans("pagination.previous") }}
                                </button>
                            </li>
                            <li
                                v-for="(page, key) in getNumbers(
                                    start_page,
                                    last_page
                                )"
                                :key="key"
                            >
                                <button
                                    v-if="collection.current_page === page"
                                    @click.prevent="reload(page)"
                                    type="button"
                                    class="flex items-center justify-center font-normal w-[38px] px-3 py-2 focus:outline-none filament-tables-pagination-item transition-all bg-main text-white focus:underline border border-main relative right-[-1px] dark:bg-main dark:text-white"
                                    aria-label="Go to page 1"
                                >
                                    <span>{{ page }}</span>
                                </button>
                                <button
                                    v-else
                                    @click.prevent="reload(page)"
                                    type="button"
                                    class="flex items-center justify-center font-normal w-[38px] px-3 py-2 focus:outline-none filament-tables-pagination-item border border-transparent text-gray-800 hover:border-main focus:bg-green_white focus:ring-2 transition dark:border-gray-700 dark:bg-gray-800 dark:text-white border-y border-slate-300 border-x-transparent relative right-[-1px] rtl:right-[0px] rtl:left-[-1px] dark:hover:bg-main"
                                    aria-label="Go to page 2"
                                >
                                    <span>{{ page }}</span>
                                </button>
                            </li>
                            <li>
                                <!-- v-show="
                                        collection.current_page !==
                                        collection.last_page
                                    " -->
                                <button
                                    @click.prevent="next()"
                                    :class="
                                        collection.current_page !==
                                        collection.last_page
                                            ? ''
                                            : 'text-gray-300 pointer-events-none'
                                    "
                                    type="button"
                                    class="flex items-center justify-center font-normal min-w-[2rem] px-3 py-2 focus:outline-none filament-tables-pagination-item border border-transparent hover:border-main transition-all text-gray-800 dark:border-gray-700 focus:outline-none focus:ring-0 border border-slate-300 border-l-transparent rtl:border-l-slate-300 rtl:border-r-transparent rounded-r-default rtl:rounded-r-0 rtl:rounded-l-default dark:hover:bg-main dark:text-white dark:bg-gray-800"
                                    aria-label="Next"
                                    rel="next"
                                >
                                    {{ trans("pagination.next") }}
                                </button>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    components: {
        Link,
    },
    props: {
        collection: Object,
        per_page: Number,
        url: String,
    },
    watch: {
        per_page(newValue, oldValue) {
            this.setPerPage = newValue;
        },
    },
    data() {
        return {
            setPerPage: 10,
            start_page: 0,
            last_page: 1,
        };
    },
    mounted() {
        if (this.collection.total >= 5 && this.collection.current_page > 3) {
            this.start_page = this.collection.current_page - 2;
        } else {
            this.start_page = 1;
        }
        if (this.collection.last_page == this.start_page) {
            this.last_page = this.start_page + 1;
        } else if (this.start_page + 5 <= this.collection.last_page) {
            this.last_page = this.start_page + 5;
        } else {
            let get_last = this.collection.last_page - this.start_page;
            this.last_page = this.start_page + get_last + 1;
        }
    },
    computed: {
        lang() {
            return this.$page.props.data.trans;
        },
    },
    methods: {
        trans(key) {
            return this.lang[key] ? this.lang[key] : key;
        },
        getNumbers(start, stop) {
            return new Array(stop - start).fill(start).map((n, i) => n + i);
        },
        reload(page, type) {
            let url = {};
            url.page = page;
            url.per_page = this.setPerPage;
            this.$emit("reload", url);
        },
        next() {
            if (this.collection.current_page === this.last_page) {
                this.reload(this.last_page);
            } else {
                this.reload(this.collection.current_page + 1);
            }
        },
        back() {
            if (this.collection.current_page === 1) {
                this.reload(1);
            } else {
                this.reload(this.collection.current_page - 1);
            }
        },
    },
});
</script>
