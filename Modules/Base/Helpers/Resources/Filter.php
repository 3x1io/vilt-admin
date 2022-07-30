<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;

class Filter
{
    use Configure;

    private ?string $name = null;
    private ?string $label = null;
    private ?string $type = "action";
    private ?string $model = null;
    private ?array $rows = [];
    private ?string $action = null;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public static function make(string $name)
    {
        $static = app(static::class, ['name' => $name]);
        $static->setUp();

        return $static;
    }

    public function model($model): ?static
    {
        $this->model = $model;
        return $this;
    }

    public function type($type): ?static
    {
        $this->type = $type;
        return $this;
    }

    public function label($label): ?static
    {
        $this->label = $label;
        return $this;
    }

    public function action($action): ?static
    {
        $this->action = $action;
        return $this;
    }

    public function rows($row): ?static
    {
        $this->rows = $row;
        return $this;
    }

    public function render()
    {
        return [
            "name" => $this->name,
            "action" => $this->action,
            "rows" => $this->rows,
            "label" => $this->label,
            "type" => $this->type,
            "model" => $this->model,
        ];
    }
}
