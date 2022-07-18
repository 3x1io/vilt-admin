<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;

class Filter
{
    use Configure;

    private ?string $name = "name";
    private ?array $row = [];
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

    public function action($action): ?static
    {
        $this->action = $action;
        return $this;
    }

    public function row($row): ?static
    {
        $this->row = $row;
        return $this;
    }

    public function render()
    {
        return [
            "name" => $this->name,
            "action" => $this->action,
            "row" => $this->row,
        ];
    }
}
