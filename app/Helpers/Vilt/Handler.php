<?php

namespace App\Helpers\Vilt;

trait Handler
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
    public $trans = [];


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

    public function roles($table, $auth = "web")
    {
        $this->canView = auth($auth)->user()->can('view_' . $table);
        $this->canViewAny = auth($auth)->user()->can('view_any_' . $table);
        $this->canCreate = auth($auth)->user()->can('create_' . $table);
        $this->canEdit = auth($auth)->user()->can('update_' . $table);
        $this->canDelete = auth('web')->user()->can('delete_' . $table);
        $this->canDeleteAny = auth('web')->user()->can('delete_any_' . $table);
    }

    public function getTrans()
    {
        return array_merge(Core::loadLanguage(), $this->trans);
    }

    public function response($data, $url, $extra = [])
    {
        $response = [
            "success" => true,
            "collection" => $data,
            "rows" => $this->schema(),
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
            "langs" => $this->getTrans()
        ];
        return array_merge($response, $extra);
    }

    public function loadMedia($data)
    {
        foreach ($data as $item) {
            foreach ($this->schema() as $field) {
                if ($field['type'] === 'image') {
                    if (count($item->getMedia($field['field']))) {
                        $item->{$field['field']} = $item->getMedia($field['field'])->first()->getUrl();
                    } else {
                        $item->{$field['field']} = null;
                    }
                }
            }
        }
    }

    public function schemaFileds()
    {
        $filedsList = [];
        foreach ($this->schema() as $field) {
            if (($field['type'] !== 'image') && ($field['type'] !== 'relation') && ($field['field'] !== 'password_confirmation')) {
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
            if ($field['type'] === 'image') {
                if ($request->hasFile($field['field'])) {
                    $record->addMediaFromRequest($field['field'])
                        ->preservingOriginal()
                        ->toMediaCollection($field['field']);
                }
            }
        }
    }

    public function processUpdateMedia($request, $record)
    {
        foreach ($this->schema() as $field) {
            if ($field['type'] === 'image') {
                if ($request->hasFile($field['field'])) {
                    $record->clearMediaCollection($field['field']);
                    $record->addMediaFromRequest($field['field'])
                        ->preservingOriginal()
                        ->toMediaCollection($field['field']);
                }
            }
        }
    }
}
