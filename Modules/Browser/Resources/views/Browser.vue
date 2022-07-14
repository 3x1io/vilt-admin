<template>
    <app-layout :title="trans('browser.title')">
        <div class="container px-8 mx-auto">
            <div class="flex justify-between my-6">
                <div>
                    <h2
                        class="text-2xl font-semibold text-gray-700 dark:text-gray-200"
                    >
                        {{ trans("browser.title") }}
                    </h2>
                </div>
                <div>
                    <button
                        @click.prevent="uploadModal = !uploadModal"
                        class="inline-flex items-center justify-center gap-2 px-4 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action"
                    >
                        <i class="bx bx-cloud bx-sm"></i>
                        {{ trans("browser.upload") }}
                    </button>
                </div>
            </div>
            <div class="mb-6">
                <div class="flex justify-start py-4 space-x-2">
                    <button
                        @click="goHome()"
                        class="inline-flex items-center justify-center gap-2 px-4 font-medium tracking-tight text-white transition rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 h-9 focus:ring-white"
                    >
                        <i class="bx bx-home"></i>
                        {{ trans("browser.home") }}
                    </button>
                    <button
                        @click="goBack()"
                        class="inline-flex items-center justify-center gap-2 px-4 font-medium tracking-tight text-white transition rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 h-9 focus:ring-white"
                    >
                        <i class="bx bx-arrow-back"></i>
                        {{ trans("browser.back") }}
                    </button>
                </div>
                <div v-if="fileContent" class="font-sans">
                    <Codemirror
                        v-model:value="fileContent"
                        ref="cmEditor"
                        width="100%"
                        :options="cmOptions"
                        border
                    />
                    <br />
                    <button
                        @click="saveFile()"
                        class="inline-flex items-center justify-center px-4 font-medium tracking-tight text-white transition rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 h-9 focus:ring-white"
                    >
                        <i class="w-6 h-6 p-1 item-center bx bx-user"></i>
                        {{ trans("browser.save") }}
                    </button>
                </div>
                <div v-else-if="imagePath">
                    <img :src="imagePath" />
                </div>
                <div v-else>
                    <div class="grid gap-1 md:grid-cols-6 sm:grid-cols-2">
                        <div v-for="(folder, key) in folders" :key="key">
                            <button
                                @click="getFolder(folder)"
                                class="flex flex-col items-center justify-center w-full p-4 font-medium text-center border rounded"
                            >
                                <i
                                    class="item-center text-primary-500 bx bxs-folder bx-lg"
                                ></i>
                                {{ folder.name.substring(0, 20) }}
                            </button>
                        </div>
                        <div v-for="(file, key) in files" :key="key">
                            <button
                                @click="getFile(file)"
                                class="flex flex-col items-center justify-center w-full p-4 font-medium text-center border rounded"
                            >
                                <i
                                    v-if="
                                        file.ex == 'png' ||
                                        file.ex == 'jpg' ||
                                        file.ex == 'jpeg' ||
                                        file.ex == 'svg' ||
                                        file.ex == 'webp'
                                    "
                                    class="item-center text-primary-500 bx bxs-image bx-lg"
                                ></i>

                                <i
                                    v-else
                                    class="item-center bx bx-lg"
                                    :class="[
                                        file.ex == 'md'
                                            ? 'bxs-file-md'
                                            : 'bxs-file',
                                        file.ex == 'js'
                                            ? 'bxs-file-js'
                                            : 'bxs-file',
                                        file.ex == 'json'
                                            ? 'bxs-file-json'
                                            : 'bxs-file',
                                    ]"
                                ></i>
                                {{ file.name.substring(0, 20) }}
                            </button>
                        </div>
                    </div>
                    <div v-if="!folders.length && !files.length">
                        <div class="px-4 py-4">
                            <i
                                class="mx-auto my-2 bx bx-search bx-lg item-center text-primary-500"
                            ></i>
                            <h1 class="text-3xl font-bold text-center">
                                Sorry No Folders or Files!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <JetDialogModal
                :show="uploadModal"
                @close="uploadModal = !uploadModal"
            >
                <template #title>
                    Please Select The File And Upload It
                    <hr class="my-4" />
                </template>

                <template #content>
                    <div class="py-2">
                        <ViltMedia
                            id="file"
                            name="file"
                            v-model="form.file"
                            :preview="false"
                            :message="form.errors.file ? form.errors.file : ''"
                            :multi="true"
                        />
                    </div>
                </template>

                <template #footer>
                    <JetButton @click.prevent="uploadFile" class="mx-2"
                        >Upload</JetButton
                    >
                    <JetSecondaryButton @click="uploadModal = !uploadModal">
                        Close
                    </JetSecondaryButton>
                </template>
            </JetDialogModal>
        </div>
    </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import JetDialogModal from "@/Jetstream/DialogModal.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetButton from "@/Jetstream/Button.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import ViltMedia from "@/Components/Base/Rows/ViltMedia.vue";

import "codemirror/lib/codemirror.css";
import "codemirror/mode/php/php.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/mode/xml/xml.js";
import "codemirror/theme/base16-dark.css";
import "codemirror/mode/clike/clike.js";

import Codemirror from "codemirror-editor-vue3";

export default defineComponent({
    components: {
        AppLayout,
        JetDialogModal,
        JetSecondaryButton,
        JetButton,
        JetInput,
        JetInputError,
        JetLabel,
        ViltMedia,
        Codemirror,
    },
    data() {
        return {
            uploadModal: false,
            cmOptions: {
                tabSize: 4,
                mode: "application/x-httpd-php",
                theme: "base16-dark",
                lineNumbers: true,
                line: true,
                matchBrackets: true,
                indentUnit: 4,
                indentWithTabs: true,
                lineWrapping: true,
            },
            imagePath: false,
            form: this.$inertia.form({
                file: null,
                path: "",
            }),
        };
    },
    computed: {
        getMessage() {
            return this.$page.props.data.message;
        },
        lang() {
            return this.$page.props.data.trans;
        },
        files() {
            return this.$page.props.files;
        },
        folders() {
            return this.$page.props.folders;
        },
        history() {
            return this.$page.props.history;
        },
        path() {
            return this.$page.props.path;
        },
        fileContent() {
            let fileContent = false;
            if (this.$page.props.ex) {
                if (this.$page.props.ex == "php") {
                    this.cmOptions.mode = "application/x-httpd-php";
                    fileContent = this.$page.props.file;
                } else if (
                    this.$page.props.ex == "js" ||
                    this.$page.props.ex == "json" ||
                    this.$page.props.ex == "lock"
                ) {
                    this.cmOptions.mode = {
                        name: "javascript",
                        json: true,
                    };
                    fileContent = this.$page.props.file;
                } else if (this.$page.props.ex == "css") {
                    this.cmOptions.mode = "text/css";
                    fileContent = this.$page.props.file;
                } else if (
                    this.$page.props.ex == "webp" ||
                    this.$page.props.ex == "svg" ||
                    this.$page.props.ex == "png" ||
                    this.$page.props.ex == "jpg" ||
                    this.$page.props.ex == "jpeg" ||
                    this.$page.props.ex == "tif" ||
                    this.$page.props.ex == "gif" ||
                    this.$page.props.ex == "ico"
                ) {
                    this.imagePath =
                        "data:image/png;base64," + this.$page.props.file;
                } else {
                    fileContent = this.$page.props.file;
                }
            }
            return fileContent;
        },
    },
    methods: {
        uploadFile() {
            this.form.path = this.history.current_path;
            this.form.post(route("browser.upload"), {
                onSuccess: () => {
                    this.form.reset();
                    this.uploadModal = !this.uploadModal;
                    if (typeof this.getMessage === "object") {
                        if (this.getMessage.type === "error") {
                            this.$toast.error(this.getMessage.message, {
                                position: "top",
                                style: {
                                    background: "rgba(210, 45, 61, .8)",
                                    "border-radius": "0.25rem",
                                },
                            });
                        } else if (this.getMessage.type === "success") {
                            this.$toast.success(this.getMessage.message, {
                                position: "top",
                                style: {
                                    background: "#7e3af2",
                                    "border-radius": "0.25rem",
                                },
                            });
                        }
                    } else {
                        this.$toast.success(this.getMessage, {
                            position: "top",
                            style: {
                                background: "#7e3af2",
                                "border-radius": "0.25rem",
                            },
                        });
                    }
                },
            });
        },
        trans(key) {
            let getKey = this.lang[key] ? this.lang[key] : key;
            return getKey;
        },
        getFolder(data) {
            this.$inertia.post(route("browser.post"), {
                folder_path: data.path,
                folder_name: data.name,
                type: "folder",
            });
        },
        getFile(data) {
            this.$inertia.post(route("browser.post"), {
                file_path: data.path,
                file_name: data.name,
                type: "file",
            });
        },
        goHome() {
            this.fileContent = false;
            this.imagePath = false;
            this.$inertia.get(route("browser"));
        },
        goBack() {
            this.fileContent = false;
            this.imagePath = false;
            this.$inertia.post(route("browser.post"), {
                folder_path: this.history.back_path,
                folder_name: this.history.back_name,
                type: "back",
            });
        },
        saveFile() {
            this.fileContent = false;
            this.imagePath = false;
            this.$inertia.post(
                route("browser.post"),
                {
                    path: this.path,
                    content: this.fileContent,
                    type: "save",
                },
                {
                    onSuccess: () => {
                        if (typeof this.getMessage === "object") {
                            if (this.getMessage.type === "error") {
                                this.$toast.error(this.getMessage.message, {
                                    position: "top",
                                    style: {
                                        background: "rgba(210, 45, 61, .8)",
                                        "border-radius": "0.25rem",
                                    },
                                });
                            } else if (this.getMessage.type === "success") {
                                this.$toast.success(this.getMessage.message, {
                                    position: "top",
                                    style: {
                                        background: "#7e3af2",
                                        "border-radius": "0.25rem",
                                    },
                                });
                            }
                        } else {
                            this.$toast.success(this.getMessage, {
                                position: "top",
                                style: {
                                    background: "#7e3af2",
                                    "border-radius": "0.25rem",
                                },
                            });
                        }
                    },
                }
            );
        },
    },
});
</script>
