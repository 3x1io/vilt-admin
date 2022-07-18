<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;

class Widget
{
    use Configure;

    private ?string $title = null;
    private ?string $type = "card";
    private ?string $counter = null;
    private ?string $icon = "bx bx-circle";

    public function __construct($title)
    {
        $this->title = $title;
    }

    public static function make(string $title)
    {
        $static = app(static::class, ['title' => $title]);
        $static->setUp();

        return $static;
    }

    public function type($type): ?static
    {
        $this->type = $type;
        return $this;
    }

    public function counter($counter): ?static
    {
        $this->counter = $counter;
        return $this;
    }

    public function icon($icon): ?static
    {
        $this->icon = $icon;
        return $this;
    }

    public function render(): ?array
    {
        return [
            "title" => $this->title,
            "type" => $this->type,
            "counter" => $this->counter,
            "icon" => $this->icon,
        ];
    }
}
