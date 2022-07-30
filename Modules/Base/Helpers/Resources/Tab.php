<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;

class Tab
{
    use Configure;

    private ?string $key = "key";
    private ?string $label = null;
    private ?string $color = null;
    private ?bool $create = true;
    private ?bool $edit = true;
    private $validation = null;

    public function __construct($key)
    {
        $this->key = $key;
    }

    public static function make(string $key)
    {
        $static = app(static::class, ['key' => $key]);
        $static->setUp();

        return $static;
    }

    public function label($label): ?static
    {
        $this->label = $label;
        return $this;
    }

    public function color($color): ?static
    {
        $this->color = $color;
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

    public function validation($validation): ?static
    {
        $this->validation = $validation;
        return $this;
    }

    public function get()
    {
        return [
            "key" => $this->key,
            "label" => $this->label,
            "color" => $this->color,
            "validation" => $this->validation,
            "create" => $this->create,
            "edit" => $this->edit,
        ];
    }
}
