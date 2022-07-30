<template>
    <JetDialogModal :show="showModal" @end="close">
        <template #title>
            {{ title }}
        </template>

        <template #content>
            <div v-if="type.type === 'modal'">
                <form
                    class="grid grid-cols-1 gap-3 lg:grid-cols-1"
                    action=""
                    v-if="!edit"
                >
                    <slot name="create-top"></slot>
                    <div
                        v-for="(field, key) in rowFilterCreate"
                        :key="key"
                        class=""
                    >
                        <div
                            v-if="
                                (field.type === 'image' ||
                                    field.type === 'file') &&
                                field.create
                            "
                        >
                            <div>
                                <ViltMedia
                                    v-model="form[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    :label="field.label"
                                    :id="field.field"
                                    :multi="field.multi"
                                    :message="form.errors[field.field]"
                                    :preview="field.preview"
                                    :placeholder="field.placeholder"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="field.type === 'switch' && field.create"
                            class="px-6"
                        >
                            <div>
                                <ViltSwitch
                                    :label="field.label"
                                    :name="field.field"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    :className="field.className"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'repeater' && field.create
                            "
                        >
                            <div
                                v-if="
                                    (field.reactive && form[field.row]) ||
                                    !field.reactive
                                "
                            >
                                <ViltRepeater
                                    :default="field.default"
                                    :label="field.label"
                                    :name="field.field"
                                    :id="field.field"
                                    :options="field.options"
                                    v-model="form[field.field]"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    :className="field.className"
                                />
                                <div class="mb-4" v-if="field.hint">
                                    <span class="text-primary-500 text-xs">{{
                                        field.hint
                                    }}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'schema' ||
                                    field.type === 'schema-area') &&
                                field.create
                            "
                        >
                            <div>
                                <div class="">
                                    <JetLabel
                                        :for="field.field"
                                        :value="field.label"
                                    />
                                    <div
                                        class="px-4 py-4 mt-2 border rounded-default"
                                    >
                                        <div
                                            v-for="(
                                                input, index
                                            ) in field.options"
                                            :key="index"
                                            class="mt-2"
                                        >
                                            <JetLabel
                                                :for="input.field"
                                                :value="input.label"
                                            />
                                            <JetInput
                                                v-if="field.type === 'schema'"
                                                :id="input.field"
                                                v-model="
                                                    form[field.field][
                                                        input.field
                                                    ]
                                                "
                                                :type="input.type"
                                                class="block w-full mt-1"
                                                autofocus
                                            />
                                            <textarea
                                                v-else
                                                :id="input.field"
                                                v-model="
                                                    form[field.field][
                                                        input.field
                                                    ]
                                                "
                                                rows="5"
                                                class="w-full p-4 text-sm border-gray-200 shadow-sm rounded-default"
                                                autofocus
                                            >
                                            </textarea>
                                        </div>
                                    </div>

                                    <JetInputError
                                        :message="form.errors[field.field]"
                                        class="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'datetime' ||
                                    field.type === 'time' ||
                                    field.type === 'date') &&
                                field.create
                            "
                        >
                            <div>
                                <ViltDate
                                    :type="field.type"
                                    :label="field.label"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    :message="form.errors[field.field]"
                                    v-model="form[field.field]"
                                    :className="field.className"
                                    :multi="field.multi"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'relation' ||
                                    field.type === 'select-value' ||
                                    field.type === 'hasOne' ||
                                    field.type === 'select') &&
                                field.create
                            "
                        >
                            <div>
                                <ViltSelect
                                    :type="field.type"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :options="field.options"
                                    :multi="field.multi"
                                    :model="field.model"
                                    :track_by_id="field.track_by_id"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    :track_by_name="field.track_by_name"
                                    :label="field.label"
                                    :message="form.errors[field.field]"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'textarea' && field.create
                            "
                        >
                            <div class="py-2" v-if="field.create">
                                <div>
                                    <ViltTextArea
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'create'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-else-if="field.type === 'rich' && field.create">
                            <div class="py-2" v-if="field.create">
                                <div>
                                    <ViltRich
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-else-if="field.type === 'tel' && field.create">
                            <div class="py-2" v-if="field.create">
                                <div>
                                    <ViltTel
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-else-if="field.type === 'trans' && field.create">
                            <div>
                                <ViltText
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    type="text"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'color' &&
                                field.create &&
                                field.tab === item.key
                            "
                        >
                            <div>
                                <ViltColor
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    type="text"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div v-else>
                            <div v-if="field.create">
                                <div>
                                    <ViltText
                                        v-if="field.type === 'icon'"
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        type="text"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :message="form.errors[field.field]"
                                        :disabled="
                                            field.disabled === 'create'
                                                ? true
                                                : false
                                        "
                                        autofocus
                                    />
                                    <ViltText
                                        v-else
                                        :id="field.field"
                                        :label="field.label"
                                        v-model="form[field.field]"
                                        :type="field.type"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :message="form.errors[field.field]"
                                        :disabled="
                                            field.disabled === 'create'
                                                ? true
                                                : false
                                        "
                                        autofocus
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <slot name="create"></slot>
                </form>
                <form
                    class="grid grid-cols-1 gap-3 md:grid-cols-1"
                    action=""
                    v-else
                >
                    <slot name="edit-top"></slot>
                    <div
                        v-for="(field, key) in rowFilterEdit"
                        :key="key"
                        class=""
                    >
                        <div
                            v-if="
                                (field.type === 'image' ||
                                    field.type === 'file') &&
                                field.edit
                            "
                        >
                            <div>
                                <ViltMedia
                                    v-model="form[field.field]"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    :label="field.label"
                                    :id="field.field"
                                    :multi="field.multi"
                                    :message="form.errors[field.field]"
                                    :preview="field.preview"
                                    :placeholder="field.placeholder"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="field.type === 'switch' && field.edit"
                            class="px-6"
                        >
                            <div>
                                <ViltSwitch
                                    :label="field.label"
                                    :name="field.field"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    :className="field.className"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="field.type === 'repeater' && field.edit"
                        >
                            <div
                                v-if="
                                    (field.reactive && form[field.row]) ||
                                    !field.reactive
                                "
                            >
                                <ViltRepeater
                                    :default="field.default"
                                    :label="field.label"
                                    :name="field.field"
                                    :id="field.field"
                                    :options="field.options"
                                    v-model="form[field.field]"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    :className="field.className"
                                />
                                <div class="mb-4" v-if="field.hint">
                                    <span class="text-primary-500 text-xs">{{
                                        field.hint
                                    }}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'schema' ||
                                    field.type === 'schema-area') &&
                                field.edit
                            "
                        >
                            <div>
                                <div class="px-4">
                                    <JetLabel
                                        :for="field.field"
                                        :value="field.label"
                                    />
                                    <div
                                        class="px-4 pb-3 mt-2 border rounded-default"
                                    >
                                        <div
                                            v-for="(
                                                input, index
                                            ) in field.options"
                                            :key="index"
                                            class="mt-2"
                                        >
                                            <JetLabel
                                                :for="input.field"
                                                :value="input.label"
                                            />
                                            <JetInput
                                                v-if="field.type === 'schema'"
                                                :id="input.field"
                                                v-model="
                                                    form[field.field][
                                                        input.field
                                                    ]
                                                "
                                                :type="input.type"
                                                class="block w-full mt-1"
                                                autofocus
                                            />
                                            <textarea
                                                v-else
                                                :id="input.field"
                                                v-model="
                                                    form[field.field][
                                                        input.field
                                                    ]
                                                "
                                                rows="5"
                                                class="w-full p-4 text-sm border-gray-200 shadow-sm rounded-default"
                                                autofocus
                                            >
                                            </textarea>
                                        </div>
                                    </div>

                                    <JetInputError
                                        :message="form.errors[field.field]"
                                        class="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'datetime' ||
                                    field.type === 'time' ||
                                    field.type === 'date') &&
                                field.edit
                            "
                        >
                            <div>
                                <ViltDate
                                    :type="field.type"
                                    :label="field.label"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    :message="form.errors[field.field]"
                                    v-model="form[field.field]"
                                    :className="field.className"
                                    :multi="field.multi"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'relation' ||
                                    field.type === 'hasOne' ||
                                    field.type === 'select-value' ||
                                    field.type === 'select') &&
                                field.edit
                            "
                        >
                            <div>
                                <ViltSelect
                                    :type="field.type"
                                    :id="field.field"
                                    :model="field.model"
                                    v-model="form[field.field]"
                                    :options="field.options"
                                    :multi="field.multi"
                                    :track_by_id="field.track_by_id"
                                    :track_by_name="field.track_by_name"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    :label="field.label"
                                    :message="form.errors[field.field]"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="field.type === 'textarea' && field.edit"
                        >
                            <div class="py-2" v-if="field.edit">
                                <div>
                                    <ViltTextArea
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-else-if="field.type === 'rich' && field.edit">
                            <div class="py-2" v-if="field.edit">
                                <div>
                                    <ViltRich
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-else-if="field.type === 'tel' && field.edit">
                            <div class="py-2" v-if="field.edit">
                                <div>
                                    <ViltTel
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-else-if="field.type === 'trans' && field.edit">
                            <div>
                                <ViltText
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    type="text"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                        field.type === 'color' &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                        >
                            <div>
                                <ViltColor
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    type="text"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                                field.disabled === 'edit'
                                                    ? true
                                                    : false
                                            "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div v-else>
                            <div v-if="field.edit">
                                <div>
                                    <ViltText
                                        v-if="field.type === 'icon'"
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        type="text"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :message="form.errors[field.field]"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                        autofocus
                                    />
                                    <ViltText
                                        v-else
                                        :id="field.field"
                                        :label="field.label"
                                        v-model="form[field.field]"
                                        :type="field.type"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :message="form.errors[field.field]"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                        autofocus
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <slot name="edit"></slot>
                </form>
            </div>
            <div v-else-if="type.type === 'tabs'">
                <form
                    class="grid grid-cols-1 lg:grid-cols-1"
                    action=""
                    v-if="!edit"
                >
                    <slot name="create-top"></slot>
                    <div
                        v-for="(field, key) in rowFilterCreate"
                        :key="key"
                        class=""
                    >
                        <div
                            v-if="
                                (field.type === 'image' ||
                                    field.type === 'file') &&
                                field.create &&
                                field.tab === null
                            "
                        >
                            <div>
                                <ViltMedia
                                    v-model="form[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    :label="field.label"
                                    :id="field.field"
                                    :multi="field.multi"
                                    :message="form.errors[field.field]"
                                    :preview="field.preview"
                                    :placeholder="field.placeholder"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'switch' &&
                                field.create &&
                                field.tab === null
                            "
                            class="px-6"
                        >
                            <div>
                                <ViltSwitch
                                    :label="field.label"
                                    :name="field.field"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    :className="field.className"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'repeater' &&
                                field.create &&
                                field.tab === null
                            "
                        >
                            <div
                                v-if="
                                    (field.reactive && form[field.row]) ||
                                    !field.reactive
                                "
                            >
                                <ViltRepeater
                                    :default="field.default"
                                    :label="field.label"
                                    :name="field.field"
                                    :id="field.field"
                                    :options="field.options"
                                    v-model="form[field.field]"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    :className="field.className"
                                />
                                <div class="mb-4" v-if="field.hint">
                                    <span class="text-primary-500 text-xs">{{
                                        field.hint
                                    }}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'schema' ||
                                    field.type === 'schema-area') &&
                                field.create &&
                                field.tab === null
                            "
                        >
                            <div>
                                <div class="">
                                    <JetLabel
                                        :for="field.field"
                                        :value="field.label"
                                    />
                                    <div
                                        class="px-4 py-4 mt-2 border rounded-default"
                                    >
                                        <div
                                            v-for="(
                                                input, index
                                            ) in field.options"
                                            :key="index"
                                            class="mt-2"
                                        >
                                            <JetLabel
                                                :for="input.field"
                                                :value="input.label"
                                            />
                                            <JetInput
                                                v-if="field.type === 'schema'"
                                                :id="input.field"
                                                v-model="
                                                    form[field.field][
                                                        input.field
                                                    ]
                                                "
                                                :type="input.type"
                                                class="block w-full mt-1"
                                                autofocus
                                            />
                                            <textarea
                                                v-else
                                                :id="input.field"
                                                v-model="
                                                    form[field.field][
                                                        input.field
                                                    ]
                                                "
                                                rows="5"
                                                class="w-full p-4 text-sm border-gray-200 shadow-sm rounded-default"
                                                autofocus
                                            >
                                            </textarea>
                                        </div>
                                    </div>

                                    <JetInputError
                                        :message="form.errors[field.field]"
                                        class="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'datetime' ||
                                    field.type === 'time' ||
                                    field.type === 'date') &&
                                field.create &&
                                field.tab === null
                            "
                        >
                            <div>
                                <ViltDate
                                    :type="field.type"
                                    :label="field.label"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    :message="form.errors[field.field]"
                                    v-model="form[field.field]"
                                    :className="field.className"
                                    :multi="field.multi"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'relation' ||
                                    field.type === 'select-value' ||
                                    field.type === 'hasOne' ||
                                    field.type === 'select') &&
                                field.create &&
                                field.tab === null
                            "
                        >
                            <div>
                                <ViltSelect
                                    :type="field.type"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :options="field.options"
                                    :multi="field.multi"
                                    :model="field.model"
                                    :track_by_id="field.track_by_id"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    :track_by_name="field.track_by_name"
                                    :label="field.label"
                                    :message="form.errors[field.field]"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'textarea' &&
                                field.create &&
                                field.tab === null
                            "
                        >
                            <div class="py-2" v-if="field.create">
                                <div>
                                    <ViltTextArea
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'create'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'rich' &&
                                field.create &&
                                field.tab === null
                            "
                        >
                            <div class="py-2" v-if="field.create">
                                <div>
                                    <ViltRich
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'tel' &&
                                field.create &&
                                field.tab === null
                            "
                        >
                            <div class="py-2" v-if="field.create">
                                <div>
                                    <ViltTel
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'trans' &&
                                field.create &&
                                field.tab === null
                            "
                        >
                            <div>
                                <ViltText
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    type="text"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'color' &&
                                field.create &&
                                field.tab === item.key
                            "
                        >
                            <div>
                                <ViltColor
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    type="text"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'create'
                                            ? true
                                            : false
                                    "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div v-else>
                            <div v-if="field.create && field.tab === null">
                                <div>
                                    <ViltText
                                        v-if="field.type === 'icon'"
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        type="text"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :message="form.errors[field.field]"
                                        :disabled="
                                            field.disabled === 'create'
                                                ? true
                                                : false
                                        "
                                        autofocus
                                    />
                                    <ViltText
                                        v-else
                                        :id="field.field"
                                        :label="field.label"
                                        v-model="form[field.field]"
                                        :type="field.type"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :message="form.errors[field.field]"
                                        :disabled="
                                            field.disabled === 'create'
                                                ? true
                                                : false
                                        "
                                        autofocus
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <slot name="create"></slot>
                </form>
                <form class="grid grid-cols-1 md:grid-cols-1" action="" v-else>
                    <slot name="edit-top"></slot>
                    <div
                        v-for="(field, key) in rowFilterEdit"
                        :key="key"
                        class=""
                    >
                        <div
                            v-if="
                                (field.type === 'image' ||
                                    field.type === 'file') &&
                                field.edit &&
                                field.tab === null
                            "
                        >
                            <div>
                                <ViltMedia
                                    v-model="form[field.field]"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    :label="field.label"
                                    :id="field.field"
                                    :multi="field.multi"
                                    :message="form.errors[field.field]"
                                    :preview="field.preview"
                                    :placeholder="field.placeholder"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'switch' &&
                                field.edit &&
                                field.tab === null
                            "
                            class="px-6"
                        >
                            <div>
                                <ViltSwitch
                                    :label="field.label"
                                    :name="field.field"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    :className="field.className"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'repeater' &&
                                field.edit &&
                                field.tab === null
                            "
                        >
                            <div
                                v-if="
                                    (field.reactive && form[field.row]) ||
                                    !field.reactive
                                "
                            >
                                <ViltRepeater
                                    :default="field.default"
                                    :label="field.label"
                                    :name="field.field"
                                    :id="field.field"
                                    :options="field.options"
                                    v-model="form[field.field]"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    :className="field.className"
                                />
                                <div class="mb-4" v-if="field.hint">
                                    <span class="text-primary-500 text-xs">{{
                                        field.hint
                                    }}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'schema' ||
                                    field.type === 'schema-area') &&
                                field.edit &&
                                field.tab === null
                            "
                        >
                            <div>
                                <div class="px-4">
                                    <JetLabel
                                        :for="field.field"
                                        :value="field.label"
                                    />
                                    <div
                                        class="px-4 pb-3 mt-2 border rounded-default"
                                    >
                                        <div
                                            v-for="(
                                                input, index
                                            ) in field.options"
                                            :key="index"
                                            class="mt-2"
                                        >
                                            <JetLabel
                                                :for="input.field"
                                                :value="input.label"
                                            />
                                            <JetInput
                                                v-if="field.type === 'schema'"
                                                :id="input.field"
                                                v-model="
                                                    form[field.field][
                                                        input.field
                                                    ]
                                                "
                                                :type="input.type"
                                                class="block w-full mt-1"
                                                autofocus
                                            />
                                            <textarea
                                                v-else
                                                :id="input.field"
                                                v-model="
                                                    form[field.field][
                                                        input.field
                                                    ]
                                                "
                                                rows="5"
                                                class="w-full p-4 text-sm border-gray-200 shadow-sm rounded-default"
                                                autofocus
                                            >
                                            </textarea>
                                        </div>
                                    </div>

                                    <JetInputError
                                        :message="form.errors[field.field]"
                                        class="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'datetime' ||
                                    field.type === 'time' ||
                                    field.type === 'date') &&
                                field.edit &&
                                field.tab === null
                            "
                        >
                            <div>
                                <ViltDate
                                    :type="field.type"
                                    :label="field.label"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    :message="form.errors[field.field]"
                                    v-model="form[field.field]"
                                    :className="field.className"
                                    :multi="field.multi"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                (field.type === 'relation' ||
                                    field.type === 'hasOne' ||
                                    field.type === 'select-value' ||
                                    field.type === 'select') &&
                                field.edit &&
                                field.tab === null
                            "
                        >
                            <div>
                                <ViltSelect
                                    :type="field.type"
                                    :id="field.field"
                                    :model="field.model"
                                    v-model="form[field.field]"
                                    :options="field.options"
                                    :multi="field.multi"
                                    :track_by_id="field.track_by_id"
                                    :track_by_name="field.track_by_name"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    :label="field.label"
                                    :message="form.errors[field.field]"
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'textarea' &&
                                field.edit &&
                                field.tab === null
                            "
                        >
                            <div class="py-2" v-if="field.edit">
                                <div>
                                    <ViltTextArea
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'rich' &&
                                field.edit &&
                                field.tab === null
                            "
                        >
                            <div class="py-2" v-if="field.edit">
                                <div>
                                    <ViltRich
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'tel' &&
                                field.edit &&
                                field.tab === null
                            "
                        >
                            <div class="py-2" v-if="field.edit">
                                <div>
                                    <ViltTel
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        :message="form.errors[field.field]"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                field.type === 'trans' &&
                                field.edit &&
                                field.tab === null
                            "
                        >
                            <div>
                                <ViltText
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    type="text"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                        field.disabled === 'edit' ? true : false
                                    "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div
                            v-else-if="
                                        field.type === 'color' &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                        >
                            <div>
                                <ViltColor
                                    :label="field.label"
                                    :id="field.field"
                                    v-model="form[field.field]"
                                    type="text"
                                    :className="field.className"
                                    :placeholder="field.placeholder"
                                    :message="form.errors[field.field]"
                                    :disabled="
                                                field.disabled === 'edit'
                                                    ? true
                                                    : false
                                            "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div v-else>
                            <div v-if="field.edit && field.tab === null">
                                <div>
                                    <ViltText
                                        v-if="field.type === 'icon'"
                                        :label="field.label"
                                        :id="field.field"
                                        v-model="form[field.field]"
                                        type="text"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :message="form.errors[field.field]"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                        autofocus
                                    />
                                    <ViltText
                                        v-else
                                        :id="field.field"
                                        :label="field.label"
                                        v-model="form[field.field]"
                                        :type="field.type"
                                        :className="field.className"
                                        :placeholder="field.placeholder"
                                        :message="form.errors[field.field]"
                                        :disabled="
                                            field.disabled === 'edit'
                                                ? true
                                                : false
                                        "
                                        autofocus
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <slot name="edit"></slot>
                </form>
                <Tabs
                    cache-lifetime="0"
                    :options="{ defaultTabHash: type.tabs[0].key }"
                    @changed="changeTab"
                    ref="tabs"
                    nav-class="flex justify-start space-x-2"
                    nav-item-class="py-2 px-4 rounded-lg"
                    nav-item-active-class="bg-main  py-2 px-4 rounded-lg text-white"
                >
                    <Tab
                        v-for="(item, key) in type.tabs"
                        :key="key"
                        :name="item.label"
                        :id="item.key"
                        :is-disabled="
                            (!item.create && !edit) || (!item.edit && edit)
                        "
                    >
                        <form
                            class="grid grid-cols-1 lg:grid-cols-1"
                            action=""
                            v-if="!edit"
                        >
                            <slot name="create-top"></slot>
                            <div
                                v-for="(field, key) in rowFilterCreate"
                                :key="key"
                                class=""
                            >
                                <div
                                    v-if="
                                        (field.type === 'image' ||
                                            field.type === 'file') &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <ViltMedia
                                            v-model="form[field.field]"
                                            :disabled="
                                                field.disabled === 'create'
                                                    ? true
                                                    : false
                                            "
                                            :label="field.label"
                                            :id="field.field"
                                            :multi="field.multi"
                                            :message="form.errors[field.field]"
                                            :preview="field.preview"
                                            :placeholder="field.placeholder"
                                        />
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'switch' &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                    class="px-6"
                                >
                                    <div>
                                        <ViltSwitch
                                            :label="field.label"
                                            :name="field.field"
                                            :id="field.field"
                                            v-model="form[field.field]"
                                            :message="form.errors[field.field]"
                                            :disabled="
                                                field.disabled === 'create'
                                                    ? true
                                                    : false
                                            "
                                            :className="field.className"
                                        />
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'repeater' &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                >
                                    <div
                                        v-if="
                                            (field.reactive &&
                                                form[field.row]) ||
                                            !field.reactive
                                        "
                                    >
                                        <ViltRepeater
                                            :default="field.default"
                                            :label="field.label"
                                            :name="field.field"
                                            :id="field.field"
                                            :options="field.options"
                                            v-model="form[field.field]"
                                            :message="form.errors[field.field]"
                                            :disabled="
                                                field.disabled === 'create'
                                                    ? true
                                                    : false
                                            "
                                            :className="field.className"
                                        />
                                        <div class="mb-4" v-if="field.hint">
                                            <span
                                                class="text-primary-500 text-xs"
                                                >{{ field.hint }}</span
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        (field.type === 'schema' ||
                                            field.type === 'schema-area') &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <div class="">
                                            <JetLabel
                                                :for="field.field"
                                                :value="field.label"
                                            />
                                            <div
                                                class="px-4 py-4 mt-2 border rounded-default"
                                            >
                                                <div
                                                    v-for="(
                                                        input, index
                                                    ) in field.options"
                                                    :key="index"
                                                    class="mt-2"
                                                >
                                                    <JetLabel
                                                        :for="input.field"
                                                        :value="input.label"
                                                    />
                                                    <JetInput
                                                        v-if="
                                                            field.type ===
                                                            'schema'
                                                        "
                                                        :id="input.field"
                                                        v-model="
                                                            form[field.field][
                                                                input.field
                                                            ]
                                                        "
                                                        :type="input.type"
                                                        class="block w-full mt-1"
                                                        autofocus
                                                    />
                                                    <textarea
                                                        v-else
                                                        :id="input.field"
                                                        v-model="
                                                            form[field.field][
                                                                input.field
                                                            ]
                                                        "
                                                        rows="5"
                                                        class="w-full p-4 text-sm border-gray-200 shadow-sm rounded-default"
                                                        autofocus
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>

                                            <JetInputError
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                class="mt-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        (field.type === 'datetime' ||
                                            field.type === 'time' ||
                                            field.type === 'date') &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <ViltDate
                                            :type="field.type"
                                            :label="field.label"
                                            :placeholder="field.placeholder"
                                            :disabled="
                                                field.disabled === 'create'
                                                    ? true
                                                    : false
                                            "
                                            :message="form.errors[field.field]"
                                            v-model="form[field.field]"
                                            :className="field.className"
                                            :multi="field.multi"
                                        />
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        (field.type === 'relation' ||
                                            field.type === 'select-value' ||
                                            field.type === 'hasOne' ||
                                            field.type === 'select') &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <ViltSelect
                                            :type="field.type"
                                            :id="field.field"
                                            v-model="form[field.field]"
                                            :options="field.options"
                                            :multi="field.multi"
                                            :model="field.model"
                                            :track_by_id="field.track_by_id"
                                            :disabled="
                                                field.disabled === 'create'
                                                    ? true
                                                    : false
                                            "
                                            :track_by_name="field.track_by_name"
                                            :label="field.label"
                                            :message="form.errors[field.field]"
                                        />
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'textarea' &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                >
                                    <div class="py-2" v-if="field.create">
                                        <div>
                                            <ViltTextArea
                                                :label="field.label"
                                                :id="field.field"
                                                v-model="form[field.field]"
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                :className="field.className"
                                                :placeholder="field.placeholder"
                                                :disabled="
                                                    field.disabled === 'create'
                                                        ? true
                                                        : false
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'rich' &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                >
                                    <div class="py-2" v-if="field.create">
                                        <div>
                                            <ViltRich
                                                :label="field.label"
                                                :id="field.field"
                                                v-model="form[field.field]"
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                :placeholder="field.placeholder"
                                                :disabled="
                                                    field.disabled === 'edit'
                                                        ? true
                                                        : false
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'tel' &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                >
                                    <div class="py-2" v-if="field.create">
                                        <div>
                                            <ViltTel
                                                :label="field.label"
                                                :id="field.field"
                                                v-model="form[field.field]"
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                :className="field.className"
                                                :placeholder="field.placeholder"
                                                :disabled="
                                                    field.disabled === 'edit'
                                                        ? true
                                                        : false
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'trans' &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <ViltText
                                            :label="field.label"
                                            :id="field.field"
                                            v-model="form[field.field]"
                                            type="text"
                                            :className="field.className"
                                            :placeholder="field.placeholder"
                                            :message="form.errors[field.field]"
                                            :disabled="
                                                field.disabled === 'create'
                                                    ? true
                                                    : false
                                            "
                                            autofocus
                                        />
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'color' &&
                                        field.create &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <ViltColor
                                            :label="field.label"
                                            :id="field.field"
                                            v-model="form[field.field]"
                                            type="text"
                                            :className="field.className"
                                            :placeholder="field.placeholder"
                                            :message="form.errors[field.field]"
                                            :disabled="
                                                field.disabled === 'create'
                                                    ? true
                                                    : false
                                            "
                                            autofocus
                                        />
                                    </div>
                                </div>
                                <div v-else>
                                    <div
                                        v-if="
                                            field.create &&
                                            field.tab === item.key
                                        "
                                    >
                                        <div>
                                            <ViltText
                                                v-if="field.type === 'icon'"
                                                :label="field.label"
                                                :id="field.field"
                                                v-model="form[field.field]"
                                                type="text"
                                                :className="field.className"
                                                :placeholder="field.placeholder"
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                :disabled="
                                                    field.disabled === 'create'
                                                        ? true
                                                        : false
                                                "
                                                autofocus
                                            />
                                            <ViltText
                                                v-else
                                                :id="field.field"
                                                :label="field.label"
                                                v-model="form[field.field]"
                                                :type="field.type"
                                                :className="field.className"
                                                :placeholder="field.placeholder"
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                :disabled="
                                                    field.disabled === 'create'
                                                        ? true
                                                        : false
                                                "
                                                autofocus
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <slot name="create"></slot>
                        </form>
                        <form
                            class="grid grid-cols-1 md:grid-cols-1"
                            action=""
                            v-else
                        >
                            <slot name="edit-top"></slot>
                            <div
                                v-for="(field, key) in rowFilterEdit"
                                :key="key"
                                class=""
                            >
                                <div
                                    v-if="
                                        (field.type === 'image' ||
                                            field.type === 'file') &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <ViltMedia
                                            v-model="form[field.field]"
                                            :disabled="
                                                field.disabled === 'edit'
                                                    ? true
                                                    : false
                                            "
                                            :label="field.label"
                                            :id="field.field"
                                            :multi="field.multi"
                                            :message="form.errors[field.field]"
                                            :preview="field.preview"
                                            :placeholder="field.placeholder"
                                        />
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'switch' &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                    class="px-6"
                                >
                                    <div>
                                        <ViltSwitch
                                            :label="field.label"
                                            :name="field.field"
                                            :id="field.field"
                                            v-model="form[field.field]"
                                            :message="form.errors[field.field]"
                                            :disabled="
                                                field.disabled === 'edit'
                                                    ? true
                                                    : false
                                            "
                                            :className="field.className"
                                        />
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'repeater' &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                >
                                    <div
                                        v-if="
                                            (field.reactive &&
                                                form[field.row]) ||
                                            !field.reactive
                                        "
                                    >
                                        <ViltRepeater
                                            :default="field.default"
                                            :label="field.label"
                                            :name="field.field"
                                            :id="field.field"
                                            :options="field.options"
                                            v-model="form[field.field]"
                                            :message="form.errors[field.field]"
                                            :disabled="
                                                field.disabled === 'edit'
                                                    ? true
                                                    : false
                                            "
                                            :className="field.className"
                                        />
                                        <div class="mb-4" v-if="field.hint">
                                            <span
                                                class="text-primary-500 text-xs"
                                                >{{ field.hint }}</span
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        (field.type === 'schema' ||
                                            field.type === 'schema-area') &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <div class="px-4">
                                            <JetLabel
                                                :for="field.field"
                                                :value="field.label"
                                            />
                                            <div
                                                class="px-4 pb-3 mt-2 border rounded-default"
                                            >
                                                <div
                                                    v-for="(
                                                        input, index
                                                    ) in field.options"
                                                    :key="index"
                                                    class="mt-2"
                                                >
                                                    <JetLabel
                                                        :for="input.field"
                                                        :value="input.label"
                                                    />
                                                    <JetInput
                                                        v-if="
                                                            field.type ===
                                                            'schema'
                                                        "
                                                        :id="input.field"
                                                        v-model="
                                                            form[field.field][
                                                                input.field
                                                            ]
                                                        "
                                                        :type="input.type"
                                                        class="block w-full mt-1"
                                                        autofocus
                                                    />
                                                    <textarea
                                                        v-else
                                                        :id="input.field"
                                                        v-model="
                                                            form[field.field][
                                                                input.field
                                                            ]
                                                        "
                                                        rows="5"
                                                        class="w-full p-4 text-sm border-gray-200 shadow-sm rounded-default"
                                                        autofocus
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>

                                            <JetInputError
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                class="mt-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        (field.type === 'datetime' ||
                                            field.type === 'time' ||
                                            field.type === 'date') &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <ViltDate
                                            :type="field.type"
                                            :label="field.label"
                                            :placeholder="field.placeholder"
                                            :disabled="
                                                field.disabled === 'edit'
                                                    ? true
                                                    : false
                                            "
                                            :message="form.errors[field.field]"
                                            v-model="form[field.field]"
                                            :className="field.className"
                                            :multi="field.multi"
                                        />
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        (field.type === 'relation' ||
                                            field.type === 'hasOne' ||
                                            field.type === 'select-value' ||
                                            field.type === 'select') &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <ViltSelect
                                            :type="field.type"
                                            :id="field.field"
                                            :model="field.model"
                                            v-model="form[field.field]"
                                            :options="field.options"
                                            :multi="field.multi"
                                            :track_by_id="field.track_by_id"
                                            :track_by_name="field.track_by_name"
                                            :disabled="
                                                field.disabled === 'edit'
                                                    ? true
                                                    : false
                                            "
                                            :label="field.label"
                                            :message="form.errors[field.field]"
                                        />
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'textarea' &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                >
                                    <div class="py-2" v-if="field.edit">
                                        <div>
                                            <ViltTextArea
                                                :label="field.label"
                                                :id="field.field"
                                                v-model="form[field.field]"
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                :className="field.className"
                                                :placeholder="field.placeholder"
                                                :disabled="
                                                    field.disabled === 'edit'
                                                        ? true
                                                        : false
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'rich' &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                >
                                    <div class="py-2" v-if="field.edit">
                                        <div>
                                            <ViltRich
                                                :label="field.label"
                                                :id="field.field"
                                                v-model="form[field.field]"
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                :placeholder="field.placeholder"
                                                :disabled="
                                                    field.disabled === 'edit'
                                                        ? true
                                                        : false
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'tel' &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                >
                                    <div class="py-2" v-if="field.edit">
                                        <div>
                                            <ViltTel
                                                :label="field.label"
                                                :id="field.field"
                                                v-model="form[field.field]"
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                :className="field.className"
                                                :placeholder="field.placeholder"
                                                :disabled="
                                                    field.disabled === 'edit'
                                                        ? true
                                                        : false
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'trans' &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <ViltText
                                            :label="field.label"
                                            :id="field.field"
                                            v-model="form[field.field]"
                                            type="text"
                                            :className="field.className"
                                            :placeholder="field.placeholder"
                                            :message="form.errors[field.field]"
                                            :disabled="
                                                field.disabled === 'edit'
                                                    ? true
                                                    : false
                                            "
                                            autofocus
                                        />
                                    </div>
                                </div>
                                <div
                                    v-else-if="
                                        field.type === 'color' &&
                                        field.edit &&
                                        field.tab === item.key
                                    "
                                >
                                    <div>
                                        <ViltColor
                                            :label="field.label"
                                            :id="field.field"
                                            v-model="form[field.field]"
                                            type="text"
                                            :className="field.className"
                                            :placeholder="field.placeholder"
                                            :message="form.errors[field.field]"
                                            :disabled="
                                                field.disabled === 'edit'
                                                    ? true
                                                    : false
                                            "
                                            autofocus
                                        />
                                    </div>
                                </div>
                                <div v-else>
                                    <div
                                        v-if="
                                            field.edit && field.tab === item.key
                                        "
                                    >
                                        <div>
                                            <ViltText
                                                v-if="field.type === 'icon'"
                                                :label="field.label"
                                                :id="field.field"
                                                v-model="form[field.field]"
                                                type="text"
                                                :className="field.className"
                                                :placeholder="field.placeholder"
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                :disabled="
                                                    field.disabled === 'edit'
                                                        ? true
                                                        : false
                                                "
                                                autofocus
                                            />
                                            <ViltText
                                                v-else
                                                :id="field.field"
                                                :label="field.label"
                                                v-model="form[field.field]"
                                                :type="field.type"
                                                :className="field.className"
                                                :placeholder="field.placeholder"
                                                :message="
                                                    form.errors[field.field]
                                                "
                                                :disabled="
                                                    field.disabled === 'edit'
                                                        ? true
                                                        : false
                                                "
                                                autofocus
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <slot name="edit"></slot>
                        </form>
                    </Tab>
                </Tabs>
            </div>
        </template>

        <template #footer>
            <slot name="footer-button"></slot>

            <div class="flex justify-start gap-2">
                <JetButton
                    :disabled="isDisabledBtn"
                    v-if="type.type === 'tabs' && !this.lastTab"
                    @click.prevent="nextTab()"
                >
                    {{ trans("global.next") }}
                </JetButton>
                <JetButton
                    :disabled="isDisabledBtn"
                    v-if="!edit && this.lastTab && this.type.type === 'tabs'"
                    @click.prevent="saveRecord()"
                >
                    {{ trans("global.save") }}
                </JetButton>
                <JetButton
                    :disabled="isDisabledBtn"
                    v-else-if="!edit && this.type.type === 'modal'"
                    @click.prevent="saveRecord()"
                >
                    {{ trans("global.save") }}
                </JetButton>
                <JetButton
                    :disabled="isDisabledBtn"
                    v-else-if="edit"
                    @click.prevent="updateRecord(form.id)"
                >
                    {{ trans("global.update") }}
                </JetButton>
                <JetSecondaryButton @click="close">
                    {{ trans("global.close") }}
                </JetSecondaryButton>
            </div>
        </template>
    </JetDialogModal>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import JetDialogModal from "@/Jetstream/DialogModal.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetButton from "@/Jetstream/Button.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import Multiselect from "@suadelabs/vue3-multiselect";
import Text from "@/Components/Base/Components/Text.vue";
import Switch from "@/Components/Base/Components/Switch.vue";
import Toggle from "@vueform/toggle";
import flatPickr from "vue-flatpickr-component";
import ViltMedia from "@/Components/Base/Rows/ViltMedia.vue";
import ViltText from "@/Components/Base/Rows/ViltText.vue";
import ViltSwitch from "@/Components/Base/Rows/ViltSwitch.vue";
import ViltDate from "@/Components/Base/Rows/ViltDate.vue";
import ViltSelect from "@/Components/Base/Rows/ViltSelect.vue";
import ViltTextArea from "@/Components/Base/Rows/ViltTextArea.vue";
import ViltRich from "@/Components/Base/Rows/ViltRich.vue";
import ViltTel from "@/Components/Base/Rows/ViltTel.vue";
import ViltRepeater from "@/Components/Base/Rows/ViltRepeater.vue";
import ViltColor from "@/Components/Base/Rows/ViltColor.vue";
import { Tabs, Tab } from "vue3-tabs-component";
import { ref } from "vue";

export default defineComponent({
    components: {
        Tabs,
        Tab,
        Link,
        JetDialogModal,
        JetSecondaryButton,
        JetButton,
        JetInput,
        JetInputError,
        JetLabel,
        Multiselect,
        Text,
        Switch,
        Toggle,
        flatPickr,
        ViltMedia,
        ViltText,
        ViltSwitch,
        ViltDate,
        ViltSelect,
        ViltTextArea,
        ViltRich,
        ViltTel,
        ViltRepeater,
        ViltColor,
    },
    props: {
        show: Boolean,
        edit: Boolean,
        item: Object,
        title: String,
        url: String,
        rows: Array,
        type: {
            String,
            default: "modal",
        },
    },
    computed: {
        lang() {
            return this.$page.props.data.trans;
        },
        rowFilterCreate() {
            let rows = this.$props.rows;
            let rowValue = [];
            for (let i = 0; i < rows.length; i++) {
                if (
                    this.arraysEqual(
                        rows[i].reactive,
                        this.form[rows[i].row]
                    ) &&
                    rows[i].create
                ) {
                    rowValue.push(rows[i]);
                } else if (!rows[i].reactive && rows[i].create) {
                    rowValue.push(rows[i]);
                }
            }

            return rowValue;
        },
        rowFilterEdit() {
            let rows = this.$props.rows;
            let rowValue = [];
            for (let i = 0; i < rows.length; i++) {
                if (
                    this.arraysEqual(
                        rows[i].reactive,
                        this.form[rows[i].row]
                    ) &&
                    rows[i].edit
                ) {
                    rowValue.push(rows[i]);
                } else if (!rows[i].reactive && rows[i].edit) {
                    rowValue.push(rows[i]);
                }
            }

            return rowValue;
        },
    },
    watch: {
        show(newValue, oldValue) {
            this.showModal = newValue;
        },
        item(newValue, oldValue) {
            this.form = newValue;
        },
    },
    data() {
        return {
            isDisabledBtn: false,
            showModal: false,
            form: this.$inertia.form(this.item),
            index: 0,
            lastTab: false,
        };
    },
    mounted() {
        this.$inertia.on("start", () => (this.isDisabledBtn = true));
        this.$inertia.on("finish", () => (this.isDisabledBtn = false));
    },
    methods: {
        changeTab(selectedTab) {
            let countActive = 0;
            for (let i = 0; i < this.type.tabs.length; i++) {
                if (this.type.tabs[i].key === selectedTab.tab.computedId) {
                    this.index = i;
                }
            }
            if (this.index === this.type.tabs.length - 1) {
                this.lastTab = true;
            } else {
                this.lastTab = false;
            }
        },
        nextTab() {
            this.index += 1;
            this.$refs.tabs.selectTab("#" + this.type.tabs[this.index].key);
        },
        trans(key) {
            return this.lang[key] ? this.lang[key] : key;
        },
        close() {
            this.$emit("close", this.showModal);
        },
        success(id = null) {
            if (this.edit) {
                this.$emit("update", { form: thitrues.form, id: id });
                this.isDisabledBtn = false;
            } else {
                this.$emit("create", this.form);
                this.isDisabledBtn = false;
            }
        },
        saveRecord() {
            this.form.submit("post", this.route(this.url + ".store"), {
                preserveScroll: true,
                onSuccess: () => {
                    this.form.reset();
                    this.$emit("success");
                    this.isDisabledBtn = false;
                },
                onError: () => {
                    if (this.type.type === "tabs") {
                        for (let r = 0; r < this.rows.length; r++) {
                            if (
                                Object.keys(this.form.errors)[0] ===
                                this.rows[r].field
                            ) {
                                if (this.$refs.tabs) {
                                    this.$refs.tabs.selectTab(
                                        "#" + this.rows[r].tab
                                    );
                                }

                                break;
                            }
                        }
                    }
                    this.$toast.success(this.trans("global.error.message"), {
                        position: "top",
                        style: {
                            background: "#d41717",
                            "border-radius": "0.25rem",
                        },
                    });
                },
            });
        },
        updateRecord(id) {
            this.form.submit("post", this.route(this.url + ".update", id), {
                preserveScroll: true,
                forceFormData: true,
                onSuccess: () => {
                    this.form.reset();
                    this.$emit("success");
                    this.isDisabledBtn = false;
                },
                onError: () => {
                    if (this.type.type === "tabs") {
                        for (let r = 0; r < this.rows.length; r++) {
                            if (
                                Object.keys(this.form.errors)[0] ===
                                this.rows[r].field
                            ) {
                                if (this.$refs.tabs) {
                                    this.$refs.tabs.selectTab(
                                        "#" + this.rows[r].tab
                                    );
                                }

                                break;
                            }
                        }
                    }
                    this.$toast.success(this.trans("global.error.message"), {
                        position: "top",
                        style: {
                            background: "#d41717",
                            "border-radius": "0.25rem",
                        },
                    });
                },
            });
        },
        arraysEqual(a, b) {
            return JSON.stringify(a) == JSON.stringify(b);
        },
    },
});
</script>
