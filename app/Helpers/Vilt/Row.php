<?php

namespace App\Helpers\Vilt;

use App\Helpers\Traits\Configure;

class Row
{
    use Configure;

    private ?string $label;
    private ?string $field;
    private ?string $type = "text";
    private ?bool $sorting = true;
    private ?bool $create = true;
    private ?bool $edit = true;
    private ?bool $view = true;
    private ?bool $list = true;

    public function __construct($field)
    {
        $this->field = $field;
    }

    public function get(): array
    {
        return [
            "label" => $this->label,
            "field" => $this->field,
            "type" => $this->type,
            "sorting" => $this->sorting,
            "create" => $this->create,
            "edit" => $this->edit,
            "view" => $this->view,
            "list" => $this->list,
        ];
    }

    public static function make(string $field)
    {
        $static = app(static::class, ['field' => $field]);
        $static->setUp();

        return $static;
    }

    public function label($label): ?static
    {
        $this->label = $label;
        return $this;
    }

    public function field($field): ?static
    {
        $this->field = $field;
        return $this;
    }

    public function type($type): ?static
    {
        $this->type = $type;
        return $this;
    }

    public function sorting($sorting): ?static
    {
        $this->sorting = $sorting;
        return $this;
    }

    public function create($create): ?static
    {
        $this->create = $create;
        return $this;
    }

    public function edit($edit): ?static
    {
        $this->edit = $edit;
        return $this;
    }

    public function view($view): ?static
    {
        $this->view = $view;
        return $this;
    }

    public function list($list): ?static
    {
        $this->list = $list;
        return $this;
    }
}
