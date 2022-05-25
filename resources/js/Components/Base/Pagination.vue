<template>
    <nav
        role="navigation"
        aria-label="Pagination Navigation"
        class="flex items-center justify-between filament-tables-pagination"
    >
        <div class="flex items-center justify-between flex-1">
            <div class="flex items-center">
                <div class="pl-2 text-sm font-normal dark:text-white">
                    Showing {{ collection.from }} to {{ collection.to }} of
                    {{ collection.total }}
                    results
                </div>
            </div>

            <div
                class="flex items-center space-x-2 rtl:space-x-reverse filament-tables-pagination-records-per-page-selector"
            >
                <select
                    v-model="setPerPage"
                    id="tableRecordsPerPageSelect"
                    @change="reload(1, 'per_page')"
                    class="h-8 px-6 text-sm leading-none transition duration-75 border-gray-300 rounded-lg shadow-sm focus:border-primary-600 focus:ring-1 focus:ring-inset focus:ring-primary-600 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>

                <label
                    for="tableRecordsPerPageSelect"
                    class="text-sm font-normal"
                >
                    per page
                </label>
            </div>

            <div class="flex items-center justify-end" v-if="collection.total > collection.per_page">
                <div
                    class="py-3 border rounded-lg dark:border-gray-600"
                >
                    <ol
                        class="flex items-center text-sm text-gray-500 divide-x divide-gray-300 dark:text-gray-400"
                    >
                        <li>
                            <button
                                @click.prevent="back()"
                                v-show="collection.current_page !== 1"
                                type="button"
                                class="relative flex items-center justify-center font-normal min-w-[2rem] px-1.5 h-8 -my-3 rounded-md focus:outline-none filament-tables-pagination-item hover:bg-gray-500/5 focus:bg-primary-500/10 focus:ring-2 focus:ring-primary-500 dark:hover:bg-gray-400/5 transition text-primary-600"
                                aria-label="Previous"
                                rel="prev"
                            >
                                <svg
                                    class="w-5 h-5 rtl:scale-x-[-1]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span></span>
                            </button>
                        </li>
                        <li
                            v-for="(page, key) in  getNumbers(start_page, last_page)"
                            :key="key"
                        >
                            <button
                                v-if="collection.current_page === page"
                                @click.prevent="reload(page)"
                                type="button"
                                class="flex items-center justify-center font-normal min-w-[2rem] px-1.5 h-8 -my-3 rounded-md focus:outline-none filament-tables-pagination-item transition text-primary-600 focus:underline bg-primary-500/10 ring-2 ring-primary-500"
                                aria-label="Go to page 1"
                            >
                                <span>{{ page }}</span>
                            </button>
                            <button
                                v-else
                                @click.prevent="reload(page)"
                                type="button"
                                class="flex items-center justify-center font-normal min-w-[2rem] px-1.5 h-8 -my-3 rounded-md focus:outline-none filament-tables-pagination-item hover:bg-gray-500/5 focus:bg-primary-500/10 focus:ring-2 focus:ring-primary-500 dark:hover:bg-gray-400/5 focus:text-primary-600 transition"
                                aria-label="Go to page 2"
                            >
                                <span>{{ page }}</span>
                            </button>
                        </li>
                        <li>
                            <button
                                @click.prevent="next()"
                                v-show="
                                    collection.current_page !==
                                    collection.last_page
                                "
                                type="button"
                                class="flex items-center justify-center font-normal min-w-[2rem] px-1.5 h-8 -my-3 rounded-md focus:outline-none filament-tables-pagination-item hover:bg-gray-500/5 focus:bg-primary-500/10 focus:ring-2 focus:ring-primary-500 dark:hover:bg-gray-400/5 transition text-primary-600"
                                aria-label="Next"
                                rel="next"
                            >
                                <svg
                                    class="w-5 h-5 rtl:scale-x-[-1]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span></span>
                            </button>
                        </li>
                    </ol>
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
        }
    },
    data() {
        return {
            setPerPage: 10,
            start_page: 0,
            last_page: 1
        };
    },
    mounted(){
        this.start_page = this.collection.current_page;

        if(this.collection.last_page == this.start_page){
            this.last_page = this.start_page+1
        }
        else if((this.start_page +10) <= this.collection.last_page){
            this.last_page = this.start_page + 10;
        }
        else {
            let get_last = this.collection.last_page - this.start_page;
            this.last_page = this.start_page + get_last +1;
        }


    },
    methods: {
        getNumbers(start,stop){
            return new Array(stop-start).fill(start).map((n,i)=>n+i);
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
