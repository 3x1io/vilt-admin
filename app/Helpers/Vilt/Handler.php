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
            if ($field['type'] !== 'image') {
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
        if ($request->has('search')) {
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
