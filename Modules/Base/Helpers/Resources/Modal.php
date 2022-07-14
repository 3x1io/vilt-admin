<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;


class Modal
{
    use Configure;

    private ?string $name = null;
    private ?string $title = null;
    private ?string $type = "success";
    private ?string $icon = "bx bx-circle";
    private ?array $actions = [];
    private ?array $rows = [];

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

    public function title($title): ?static
    {
        $this->title = $title;
        return $this;
    }

    public function rows($rows): ?static
    {
        $this->rows = $rows;
        return $this;
    }

    public function buttons($buttons): ?static
    {
        $this->buttons = $buttons;
        return $this;
    }

    public function icon($icon): ?static
    {
        $this->icon = $icon;
        return $this;
    }

    public function type($type): ?static
    {
        $this->type = $type;
        return $this;
    }

    public function render()
    {
        return [
            "name" => $this->name,
            "title" => $this->title,
            "type" => $this->type,
            "icon" => $this->icon,
            "rows" => $this->rows,
            "buttons" => $this->buttons,
        ];
    }
}
