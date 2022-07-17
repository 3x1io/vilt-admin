<?php

namespace Modules\Base\Helpers\Resources;


use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Cookie;

trait Controller
{
    public $search = null;
    public $per_page = 10;
    public $orderBy = 'id';
    public $desc = "asc";
    public $filters = [];
    public $create = false;
    public $canView = true;
    public $canViewAny = true;
    public $canEdit = true;
    public $canCreate = true;
    public $canDelete = true;
    public $canDeleteAny = true;
    public $url = null;
    public $table = null;
    public $group = 0;
    public $icon = "bx bxs-circle";
    public $resourceTitle = null;
    public $api = false;

    public function loadTranslations($data)
    {
        $data = $data->toArray();
        $rows = $this->schema();
        for ($i = 0; $i < count($data['data']); $i++) {
            foreach ($rows as $row) {
                if ($row['type'] === 'trans') {
                    if (isset($data['data'][$i][$row['field']][app()->getLocale()])) {
                        $data['data'][$i][$row['field']] = $data['data'][$i][$row['field']][app()->getLocale()];
                    } else {
                        $data['data'][$i][$row['field']] = "";
                    }
                }
            }
        }

        return $data;
    }

    public function loadSelect($data)
    {
        $rows = $this->schema();
        foreach ($data as $item) {
            foreach ($rows as $row) {
                if ($row['type'] === 'select-value' || $row['type'] === 'hasOne') {
                    foreach ($row['options'] as $option) {
                        if ($option[$row['track_by_id']] === $item->{$row['field']}) {
                            $item->{$row['field']} = $option;
                        }
                    }
                }
            }
        }
    }

    public function processTranslations($data, $record = null)
    {
        $rows = $this->schema();
        $locals = config('translations.locals');
        foreach ($rows as $row) {
            if ($row['type'] === 'trans') {
                if ($record) {
                    if (isset($data[$row['field']]) && !empty($data[$row['field']])) {
                        $text = $data[$row['field']];
                        if (is_array($record[$row['field']])) {
                            $data[$row['field']] = $record[$row['field']];
                            foreach ($locals as $key => $local) {
                                if ($key === app()->getLocale()) {
                                    $data[$row['field']][$key] = $text;
                                }
                            }
                        } else {
                            $data[$row['field']] = [];
                            foreach ($locals as $key => $local) {
                                if ($key === app()->getLocale()) {
                                    $data[$row['field']][$key] = $text;
                                }
                            }
                        }
                    }
                } else {
                    if (isset($data[$row['field']]) && !is_array($data[$row['field']])) {
                        if (isset($data[$row['field']]) && !empty($data[$row['field']])) {
                            $text = $data[$row['field']];
                            $data[$row['field']] = [];
                            foreach ($locals as $key => $local) {
                                if ($key === app()->getLocale()) {
                                    $data[$row['field']][$key] = $text;
                                } else {
                                    $data[$row['field']][$key] = "";
                                }
                            }
                        }
                    }
                }
            }
        }

        return $data;
    }

    public function generateName($sp = false, $sg = false)
    {
        $expload = explode('_', $this->table);
        $tableName = "";
        $x = 1;
        foreach ($expload as $item) {
            if ($sp) {
                if ($sg) {
                    if ($x === count($expload)) {
                        $item = Str::singular(Str::ucfirst($item));
                        $tableName .= " " . $item;
                    } else {
                        $item = Str::ucfirst($item) . " ";
                        $tableName .= " " . $item;
                    }
                    $x++;
                } else {
                    $item = Str::ucfirst($item) . " ";
                    $tableName .= " " . $item;
                }
            } else {
                $item = Str::ucfirst($item);
                $tableName .= " " . $item;
            }
        }

        return Str::ucfirst($tableName);
    }

    public function schema()
    {
        return $this->rows();
    }

    public function select($data, $trackBy, $id)
    {
        $options = [];
        foreach ($data as $item) {
            array_push($options, [
                "value" => $item->{$id},
                "label" => $item->{$trackBy},
            ]);
        }

        return $options;
    }

    public function getVaild(Request $request, $id = null)
    {
        $create = [];
        $edit = [];
        foreach ($this->schema() as $item) {
            if ($item['validation']) {
                $create[$item['field']] = $item['validation'];
                $edit[$item['field']] = str_replace('required', 'sometimes', $item['validation']);
                if ($item['unique']) {
                    $create[$item['field']] .= "|unique:" . $this->table . "," . $item['field'];
                    if ($id) {
                        $edit[$item['field']] .= "|unique:" . $this->table . "," . $item['field'] . "," . $id;
                    }
                }
            }
        }

        if ($id) {
            return $edit;
        } else {
            return $create;
        }
    }

    public function roles($auth = "web")
    {
        $this->canView = auth($auth)->user()->can('view_' . $this->table);
        $this->canViewAny = auth($auth)->user()->can('view_any_' . $this->table);
        $this->canCreate = auth($auth)->user()->can('create_' . $this->table);
        $this->canEdit = auth($auth)->user()->can('update_' . $this->table);
        $this->canDelete = auth('web')->user()->can('delete_' . $this->table);
        $this->canDeleteAny = auth('web')->user()->can('delete_any_' . $this->table);
    }

    public function loadLang()
    {
        $langs = [
            "index" => __($this->generateName()),
            "create" => __('Create ' . $this->generateName(true, true)),
            "bulk" => __('Delete Selected ' . $this->generateName(true, true)),
            "edit_title" => __('Edit ' . $this->generateName(true, true)),
            "create_title" => __('Create New ' . $this->generateName(true, true)),
            "view_title" => __('View ' . $this->generateName(true, true)),
            "delete_title" => __('Delete ' . $this->generateName(true, true)),
            "bulk_title" => __('Run Bulk Action To ' . $this->generateName(true, true)),
        ];

        if (!empty($this->resourceTitle)) {
            $langs['index'] = $this->resourceTitle;
        }

        return array_merge($this->lang(), $langs);
    }

    public function response($data, $url, $extra = [])
    {
        $rows = $this->schema();

        $response = [
            "success" => true,
            "collection" => $data,
            "rows" => $rows,
            "url" => $url,
            "search" => $this->search,
            "per_page" => $this->per_page,
            "orderBy" => $this->orderBy,
            "desc" => $this->desc,
            "filters" => $this->filters,
            "create" => $this->create,
            "canView" => $this->canView,
            "canViewAny" => $this->canViewAny,
            "canEdit" => $this->canEdit,
            "canCreate" => $this->canCreate,
            "canDelete" => $this->canDelete,
            "canDeleteAny" => $this->canDeleteAny,
            "lang" => $this->loadLang(),
            "actions" => $this->actions(),
            "modals" => $this->modals(),
        ];
        return array_merge($response, $extra);
    }

    public function loadMedia($data)
    {
        foreach ($data as $item) {
            foreach ($this->schema() as $field) {
                if ($field['type'] === 'image') {
                    if (count($item->getMedia($field['field']))) {
                        if ($field['multi']) {
                            $arrayImages = [];
                            foreach ($item->getMedia($field['field']) as $imageItem) {
                                array_push($arrayImages, $imageItem->getUrl());
                            }
                            $item->{$field['field']} = $arrayImages;
                        } else {
                            $item->{$field['field']} = $item->getMedia($field['field'])->first()->getUrl();
                        }
                    } else {
                        $item->{$field['field']} = null;
                    }
                }
            }
        }
    }

    public function schemaFileds($ex = [])
    {
        $filedsList = [];
        foreach ($this->schema() as $field) {

            if ((!$field['over']) && ($field['type'] !== 'image') && ($field['type'] !== 'relation') && ($field['field'] !== 'password_confirmation')) {
                array_push($filedsList, $field['field']);
            }
        }

        foreach ($ex as $item) {
            unset($filedsList[array_search($item, $filedsList)]);
        }

        return $filedsList;
    }

    public function searchFileds()
    {
        $filedsList = [];
        foreach ($this->schema() as $field) {

            if ($field['search']) {
                array_push($filedsList, $field['field']);
            }
        }

        return $filedsList;
    }

    public function loadFilters($request)
    {
        if ($request->has('create')) {
            $this->create = true;
        }
        if ($request->has('search') && !empty($request->has('search'))) {
            $this->search = $request->get('search');
        }
        if ($request->has('per_page')) {
            $this->per_page = $request->get('per_page');
        }
        if ($request->has('orderBy')) {
            $this->orderBy = $request->get('orderBy');
            $this->desc = $request->get('orderDirection');
        }
    }

    public function processCreateMedia($request, $record)
    {
        foreach ($this->schema() as $field) {
            if (($field['type'] === 'image') && (!$field['multi'])) {
                if ($request->hasFile($field['field'])) {
                    $record->addMediaFromRequest($field['field'])
                        ->preservingOriginal()
                        ->toMediaCollection($field['field']);
                }
            } else if (($field['type'] === 'image') && $field['multi']) {
                if ($request->{$field['field']} && is_array($request->{$field['field']})) {
                    foreach ($request->{$field['field']} as $item) {
                        $record->addMedia($item)
                            ->preservingOriginal()
                            ->toMediaCollection($field['field']);
                    }
                }
            }
        }
    }

    public function processUpdateMedia($request, $record)
    {
        foreach ($this->schema() as $field) {
            if (($field['type'] === 'image') && (!(bool)$field['multi'])) {
                if ($request->hasFile($field['field'])) {
                    $record->clearMediaCollection($field['field']);
                    $record->addMediaFromRequest($field['field'])
                        ->preservingOriginal()
                        ->toMediaCollection($field['field']);
                }
            } else if (($field['type'] === 'image') && (bool)$field['multi']) {
                if ($request->{$field['field']} && is_array($request->{$field['field']})) {
                    $hasNewMedia = false;
                    foreach ($request->{$field['field']} as $item) {
                        if (!is_string($item)) {
                            $hasNewMedia = true;
                        }
                    }
                    if ($hasNewMedia) {
                        foreach ($request->{$field['field']} as $item) {
                            $record->addMedia($item)
                                ->preservingOriginal()
                                ->toMediaCollection($field['field']);
                        }
                    }
                }
            }
        }
    }

    public function proccessSelect($request)
    {
        foreach ($this->schema() as $field) {
            if ($field['type'] === 'select-value' || $field['type'] === 'hasOne') {
                if ($request[$field['field']]) {
                    $request[$field['field']] = $request[$field['field']][$field['track_by_id']];
                }
            }
        }

        return $request;
    }

    public function getAllViewFilesWithTranslations($file)
    {
        /*
         * This pattern is derived from Barryvdh\TranslationManager by Barry vd. Heuvel <barryvdh@gmail.com>
         *
         * https://github.com/barryvdh/laravel-translation-manager/blob/master/src/Manager.php
         */
        $functions = [
            'trans',
            'trans_choice',
            'Lang::get',
            'Lang::choice',
            'Lang::trans',
            'Lang::transChoice',
            '@lang',
            '@choice'
        ];

        $patternA =
            // See https://regex101.com/r/jS5fX0/4
            '[^\w]' . // Must not start with any alphanum or _
            '(?<!->)' . // Must not start with ->
            '(' . implode('|', $functions) . ')' . // Must start with one of the functions
            "\(" . // Match opening parentheses
            "[\'\"]" . // Match " or '
            '(' . // Start a new group to match:
            '([a-zA-Z0-9_\/-]+::)?' .
            '[a-zA-Z0-9_-]+' . // Must start with group
            "([.][^\1)$]+)+" . // Be followed by one or more items/keys
            ')' . // Close group
            "[\'\"]" . // Closing quote
            "[\),]"  // Close parentheses or new parameter
        ;

        $patternB =
            // See https://regex101.com/r/2EfItR/2
            '[^\w]' . // Must not start with any alphanum or _
            '(?<!->)' . // Must not start with ->
            '(__|Lang::getFromJson)' . // Must start with one of the functions
            '\(' . // Match opening parentheses

            '[\"]' . // Match "
            '(' . // Start a new group to match:
            '[^"]+' . //Can have everything except "
            //            '(?:[^"]|\\")+' . //Can have everything except " or can have escaped " like \", however it is not working as expected
            ')' . // Close group
            '[\"]' . // Closing quote

            '[\)]'  // Close parentheses or new parameter
        ;

        $patternC =
            // See https://regex101.com/r/VaPQ7A/2
            '[^\w]' . // Must not start with any alphanum or _
            '(?<!->)' . // Must not start with ->
            '(__|Lang::getFromJson)' . // Must start with one of the functions
            '\(' . // Match opening parentheses

            '[\']' . // Match '
            '(' . // Start a new group to match:
            "[^']+" . //Can have everything except '
            //            "(?:[^']|\\')+" . //Can have everything except 'or can have escaped ' like \', however it is not working as expected
            ')' . // Close group
            '[\']' . // Closing quote

            '[\)]'  // Close parentheses or new parameter
        ;

        $__ = collect();

        // FIXME maybe we can count how many times one translation is used and eventually display it to the user

        $file = File::get($file);
        if (preg_match_all("/$patternB/siU", $file, $matches)) {
            $__->push($matches[2]);
        }

        if (preg_match_all("/$patternC/siU", $file, $matches)) {
            $__->push($matches[2]);
        }

        return $__->flatten()->unique();
    }
}
