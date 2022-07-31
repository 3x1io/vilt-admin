<?php

namespace Modules\Base\Helpers\Resources\Base;

use Modules\Base\Helpers\Resources\Modal;

class Modals {

    private ?string $name = null;
    private ?string $title = null;
    private ?string $type = "success";
    private ?string $icon = "bx bx-circle";
    private ?array $buttons = [];
    private ?array $rows = [];

    public function __construct()
    {
        $this->setup();
    }

    public function setup(): void {}

    public function get(): array
    {
        return Modal::make($this->name)
            ->title($this->title)
            ->type($this->type)
            ->icon($this->icon)
            ->buttons($this->buttons)
            ->rows($this->rows)
            ->render();
    }

    public function name($name): ?static
    {
        $this->name = $name;
        return $this;
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
}
