<template>
    <table
        class="w-full text-left divide-y table-auto xl:rtl:text-right filament-tables-table "
        v-if="collection.total"
    >
        <thead>
            <tr class="bg-tableHead text-main dark:bg-gray-800 dark:text-white">
                <th
                    class="w-4 px-4 py-4 whitespace-nowrap filament-tables-checkbox-cell"
                >
                    <input
                        @change="bulkAll()"
                        class="block border-gray-300 rounded shadow-sm text-primary-600 focus:border-primary-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                        type="checkbox"
                    />
                </th>
                 <th class="px-2 filament-tables-header-cell" v-for="(item, key) in listRows" :key="key">
                    <button
                        v-if="item.sorting"
                        @click.prevent="reload(1, 'orderBy', item.field)"
                        :class="{
                            'font-bold': orderBy == item.field,
                        }"
                        class="flex items-center w-full px-0 py-2 space-x-1 text-sm font-normal cursor-default text-main dark:text-white whitespace-nowrap rtl:space-x-reverse"
                    >
                        <span v-if="orderBy == item.field">
                            <i class="bx bx-sort-a-z" v-if="desc"></i>
                            <i class="bx bx-sort-z-a" v-else></i>
                        </span>
                        {{ item.label }}
                    </button>
                    <span v-else class="flex items-center w-full px-4 py-2 space-x-1 text-sm font-normal cursor-default dark:text-white whitespace-nowrap rtl:space-x-reverse">
                        {{ item.label }}
                    </span>
                </th>
                <slot name="th"></slot>

                <th class="w-5">
                    <span class="text-sm font-normal">{{trans('global.actions')}}</span>
                </th>
            </tr>
        </thead>
        <tbody class="divide-y whitespace-nowrap">
            <tr
                class="hover:bg-primary-500/5 dark:hover:bg-primary-500/5 filament-tables-row"
                v-for="(item, key) in collection.data"
                :key="key"
            >
                <th
                    class="w-4 px-4 whitespace-nowrap filament-tables-checkbox-cell rtl:text-right"
                >
                    <input
                        @input="bulk[item.id] = !bulk[item.id]"
                        :checked="bulk[item.id]"
                        class="block border-gray-300 rounded shadow-sm text-primary-600 focus:border-primary-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50 table-row-checkbox"
                        value="1"
                        type="checkbox"
                    />
                </th>
                <td class="px-2 rtl:text-right text-14" v-for="(field, index) in listRows" :key="index">
                    <div v-if="field.type === 'relation'" class="grid grid-cols-3 gap-2">
                        <div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500" v-for="(rel, relIndex) in item[field.field]" :key="relIndex">{{rel[field.track_by_name] ? rel[field.track_by_name] : ''}}</div>
                    </div>
                    <div v-else-if="field.url" >
                        <a :href="item[field.field]" target="_blank" class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500">
                            Open URL
                        </a>
                    </div>
                    <div v-else-if="field.type === 'image'">
                        <ViltMedia v-model="item[field.field]" :multi="field.multi" view="table" />
                    </div>
                    <div v-else-if="field.type === 'color'">
                        <div class="w-8 h-8 rounded-full" :style="'background-color: '+item[field.field]"></div>
                    </div>
                    <div v-else-if="field.type === 'hasOne'">
                        <div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500">{{item[field.field] ? item[field.field][field.track_by_name] : ''}}</div>
                    </div>
                    <div v-else-if="field.type === 'select-value'">
                        <div class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500">{{item[field.field] ? item[field.field][field.track_by_name] : ''}}</div>
                    </div>
                    <div v-else-if="field.type === 'switch'">
                        <div class="w-10 h-10 p-2 text-lg text-center text-white bg-green-500 rounded-full" v-if="item[field.field] == true"><i class="bx bx-check"></i></div>
                        <div class="w-10 h-10 p-2 text-lg text-center text-white rounded-full bg-danger-500" v-else><i class="bx bx-x"></i></div>
                    </div>
                    <ViltDate v-else-if="field.type === 'date' || field.type === 'datetime' || field.type === 'time' " view="table" v-model="item[field.field]" :type="field.type" :label="field.label" />

                    <div v-else-if="field.type === 'icon'">
                        <div class="text-3xl"><i :class="item[field.field]"></i></div>
                    </div>
                    <div v-else-if="field.type === 'schema'" class="grid grid-cols-3 gap-2">
                        <div v-for="(rel, relIndex) in field.options" :key="relIndex">
                            <div v-if="item[field.field][rel.field]" class="inline-flex mx-2 items-center justify-center space-x-1 min-h-6 px-2 py-0.5 text-sm font-normal tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500" >
                                <span>{{item[field.field][rel.field]}}</span>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        {{ item[field.field] }}
                    </div>
                    <slot name="td"></slot>

                </td>

                <td
                    class="px-4 py-3 whitespace-nowrap filament-tables-actions-cell"
                >
                    <div class="flex items-center justify-end gap-4 my-4">
                        <slot name="actions"></slot>
                        <div>
                            <a
                                v-if="$attrs.canView || $attrs.canViewAny"
                                @click.prevent="viewItem(item)"
                                class="inline-flex items-center justify-center text-sm font-normal filament-tables-link text-main hover:text-greenColor3 filament-tables-link-action"
                                href="#"
                                title="Edit"
                                role="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-4 h-4 mr-1 -ml-2 filament-button-icon rtl:ml-1 rtl:-mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                                {{ trans('global.view') }}
                            </a>
                        </div>
                        <div>
                            <a
                                v-if="$attrs.canEdit"
                                @click.prevent="editItem(item)"
                                class="inline-flex items-center justify-center text-sm font-normal hover:underline focus:outline-none focus:underline filament-tables-link text-main hover:text-greenColor3 filament-tables-link-action"
                                href="#"
                                title="Edit"
                                role="button"
                            >
                                <svg
                                    class="w-4 h-4 mr-1 -ml-2 filament-button-icon rtl:ml-1 rtl:-mr-2"
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
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    ></path>
                                </svg>
                                {{ trans('global.edit') }}
                            </a>
                        </div>
                        <form>
                            <button
                                v-if="$attrs.canDelete || $attrs.canDeleteAny"
                                @click.prevent="deleteItem(item)"
                                type="submit"
                                class="inline-flex items-center justify-center text-sm font-normal hover:underline focus:outline-none focus:underline filament-tables-link text-danger-600 hover:text-danger-500 filament-tables-link-action"
                                title="Delete"
                            >
                                <svg
                                    class="w-4 h-4 mr-1 -ml-2 filament-button-icon rtl:ml-1 rtl:-mr-2"
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
                                {{ trans('global.delete') }}
                            </button>
                        </form>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="relative overflow-y-auto" v-else>
        <div class="flex items-center justify-center p-4">
            <div
                class="flex flex-col items-center justify-center flex-1 p-6 mx-auto space-y-6 text-center bg-white filament-tables-empty-state dark:bg-gray-900/70"
            >
                <div
                    class="flex items-center justify-center w-16 h-16 rounded-full text-primary-500 bg-tableHead"
                >
                    <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#3A9252"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </div>

                <div class="max-w-xs space-y-1">
                    <h2
                        class="font-normal tracking-tight text-md filament-tables-empty-state-heading"
                    >
                        {{ trans('global.empty') }}
                    </h2>

                    <p
                        class="text-sm font-normal text-gray-500 filament-tables-empty-state-description"
                    ></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import ViltDate from "@/Components/Base/Rows/ViltDate.vue";
import ViltMedia from "@/Components/Base/Rows/ViltMedia.vue";

export default defineComponent({
    components: {
        Link,
        ViltDate,
        ViltMedia,
    },
    props: {
        rows: Array,
        collection: Object,
        url: String,
        bulk: Object,
        desc: Boolean,
        orderBy: String,
    },
    data() {
        return {};
    },
    computed: {
        listRows() {
            let list = [];
            for (let i = 0; i < this.rows.length; i++) {
                if (this.rows[i].list) {
                    list.push(this.rows[i]);
                }
            }

            return list;
        },
        lang() {
            return this.$page.props.data.trans;
        },
    },
    methods: {
        money(item) {
            if (localStorage.getItem("lang")) {
                    let lang = JSON.parse(localStorage.getItem("lang"));
                    if (lang.id === "ar") {
                        return item.toLocaleString("en-US", {
                            style: "currency",
                            currency: "EGP",
                        });
                    } else if (lang.id === "en") {
                        return item.toLocaleString("ar-EG", {
                            style: "currency",
                            currency: "EGP",
                        });
                    }
                }
        },
        trans(key) {
            return this.lang[key] ? this.lang[key] : key;
        },
        bulkAll() {
            this.$emit("all");
        },
        reload(index = 1, type = "main", orderBy = null, dir = false) {
            let getDir = "";
            if (dir) {
                getDir = dir;
            } else {
                if (this.desc) {
                    getDir = "desc";
                } else {
                    getDir = "asc";
                }
            }

            let url = {};
            url.page = index;
            this.search ? (url.search = this.search) : "";
            url.per_page = this.per_page;
            orderBy ? (url.orderBy = orderBy) : "";
            url.orderDirection = getDir;

            this.$emit("reload", url);
        },
        viewItem(item) {
            this.$emit("view", item);
        },
        editItem(item) {
            this.$emit("edit", item);
        },
        deleteItem(item) {
            this.$emit("delete", item);
        },
        transItem(item, key) {
            if(item[key].hasOwnProperty('ar') && item[key].hasOwnProperty('en')){
                if (localStorage.getItem("lang")) {
                    let lang = JSON.parse(localStorage.getItem("lang"));
                    if (lang.id === "ar") {
                        return item[key].en;
                    } else if (lang.id === "en") {
                        return item[key].ar;
                    }
                }
            }
            else {
                return item[key];
            }
        },
    },
});
</script>

